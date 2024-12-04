import { defineFunction } from "@aws-amplify/backend";

export const myDynamoDBFunction = defineFunction({
  name: "dyndbinvestor",
  environment: {
    USER_POOL_ID: 'us-east-2_IcXEAjeU8'
  }
});