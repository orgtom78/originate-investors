import { CognitoIdentityServiceProvider } from "aws-sdk";
import { Logger } from "@aws-lambda-powertools/logger";
import type { DynamoDBStreamHandler } from "aws-lambda";
import type { AttributeValue } from "aws-lambda/trigger/dynamodb-stream";
import { env } from '$amplify/env/dyndbinvestor'; 

const logger = new Logger({ serviceName: "CognitoUserHandler" });

const cognito = new CognitoIdentityServiceProvider();

export const handler: DynamoDBStreamHandler = async (event) => {
  const userPoolId = env.USER_POOL_ID;

  if (!userPoolId) {
    logger.error("USER_POOL_ID environment variable is not set");
    return;
  }

  for (const record of event.Records) {
    if (record.eventName !== "INSERT" && record.eventName !== "MODIFY") {
      logger.info("Skipping non-relevant record", { eventName: record.eventName });
      continue;
    }

    const newImage = record.dynamodb?.NewImage;
    if (!newImage) {
      logger.warn("Missing NewImage in DynamoDB record");
      continue;
    }

    const email = getAttributeValue(newImage.email);
    if (!email) {
      logger.warn("Missing email attribute in DynamoDB record", { record: newImage });
      continue;
    }

    const params: CognitoIdentityServiceProvider.AdminCreateUserRequest = {
      UserPoolId: userPoolId,
      Username: email,
      UserAttributes: [
        { Name: "email", Value: email },
        { Name: "email_verified", Value: "true" },
      ],
    };

    try {
      const response = await cognito.adminCreateUser(params).promise();
      logger.info("User created successfully", { email, response });
    } catch (error: any) {
      logger.error("Failed to create user", { email, error: error.message });
    }
  }
};

/**
 * Helper function to safely extract a string value from DynamoDB AttributeValue.
 */
const getAttributeValue = (attribute?: AttributeValue): string | null => {
  return attribute?.S ?? null;
};
