import React from "react";
import { useState } from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import InputAdornment from "@mui/material/InputAdornment";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, minLength, string, email, pipe, nonEmpty } from "valibot";
import type { SubmitHandler } from "react-hook-form";
import type { InferInput } from "valibot";
import DirectionalIcon from "@components/DirectionalIcon";

// Import AWS Amplify data client
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../../amplify/data/resource";

import createuser from "@data/mutations/createuser";

const client = generateClient<Schema>();

type FormData = InferInput<typeof schema>;

const schema = object({
  firstname: pipe(string(), nonEmpty("First Name is required")),
  lastname: pipe(string(), nonEmpty("Last Name is required")),
  email: pipe(
    string(),
    nonEmpty("Email is required"),
    email("Please enter a valid email address")
  ),
  Mobile: pipe(
    string(),
    nonEmpty("Phone is required"),
    minLength(5, "Phone must be at least 5 characters long")
  ),
});

const StepAccountDetails = ({ handleNext }: { handleNext: () => void }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: valibotResolver(schema),
  });

  // Function to create user in the database
  
  const createUserInDB = async (formData: FormData) => {
    try {
      const { data, errors } = await client.models.User.create({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        phone: formData.Mobile,
      });
      if (errors) {
        console.error("Database errors:", errors);
        return;
      }
      console.log("User created successfully:", data);
    } catch (error) {
      console.error("Failed to create user in database:", error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log("Validated Data:", data);
    await createUserInDB(data); // Call function to save data
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mbe-5">
        <Typography variant="h4" className="mbe-1">
          Account Information
        </Typography>
        <Typography>Enter Your Account Details</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12} sm={6}>
          <Controller
            name="firstname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="First Name"
                placeholder="John"
                error={!!errors.firstname}
                helperText={errors.firstname?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="lastname"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Last Name"
                placeholder="Doe"
                error={!!errors.lastname}
                helperText={errors.lastname?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Email"
                placeholder="johndoe@gmail.com"
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Controller
            name="Mobile"
            control={control}
            defaultValue=""
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                type="number"
                label="Mobile"
                placeholder="123-456-7890"
                error={!!errors.Mobile}
                helperText={errors.Mobile?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">US (+1)</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} className="flex justify-between">
          <Button
            disabled
            variant="outlined"
            color="secondary"
            startIcon={
              <DirectionalIcon
                ltrIconClass="ri-arrow-left-line"
                rtlIconClass="ri-arrow-right-line"
              />
            }
          >
            Previous
          </Button>
          <Button
            type="submit"
            variant="contained"
            endIcon={
              <DirectionalIcon
                ltrIconClass="ri-arrow-right-line"
                rtlIconClass="ri-arrow-left-line"
              />
            }
          >
            Next
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default StepAccountDetails;
