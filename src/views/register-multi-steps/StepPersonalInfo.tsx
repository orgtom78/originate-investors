import React, { useEffect, useState } from "react";
import {
  Grid,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, pipe, string, nonEmpty, optional } from "valibot";
import DirectionalIcon from "@components/DirectionalIcon";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../../amplify/data/resource";
import type { SubmitHandler } from "react-hook-form";

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "Other",
];

const OECD_COUNTRIES = [
  "Australia",
  "Austria",
  "Belgium",
  "Canada",
  "Chile",
  "Colombia",
  "Czech Republic",
  "Denmark",
  "Estonia",
  "Finland",
  "France",
  "Germany",
  "Greece",
  "Hungary",
  "Iceland",
  "Ireland",
  "Israel",
  "Italy",
  "Japan",
  "Korea",
  "Latvia",
  "Lithuania",
  "Luxembourg",
  "Mexico",
  "Netherlands",
  "New Zealand",
  "Norway",
  "Poland",
  "Portugal",
  "Slovak Republic",
  "Slovenia",
  "Spain",
  "Sweden",
  "Switzerland",
  "Turkey",
  "United Kingdom",
  "United States",
];

const ACCOUNT_TYPES = ["Individual", "Joint", "Corporation", "Trust", "IRA"];

const client = generateClient<Schema>();

const schema = object({
  accounttype: pipe(string(), nonEmpty("Account Type is required")),
  legalname1: pipe(string(), nonEmpty("Full Legal Name is required")),
  address1: pipe(string(), nonEmpty("Address is required")),
  city1: pipe(string(), nonEmpty("City is required")),
  zip1: pipe(string(), nonEmpty("Zip Code is required")),
  dob1: pipe(string(), nonEmpty("Date of Birth is required")),
  tin1: pipe(string(), nonEmpty("TIN or SSN is required")),
  amount: pipe(string(), nonEmpty("Amount is required")),
  state1: pipe(string(), nonEmpty("State is required")),
  country1: pipe(string(), nonEmpty("Country is required")),
  legalname2: optional(string()),
  address2: optional(string()),
  city2: optional(string()),
  zip2: optional(string()),
  dob2: optional(string()),
  tin2: optional(string()),
  state2: optional(string()),
  country2: optional(string()),
});

type FormData = {
  [key: string]: string;
};

type StepProps = {
  handleNext: () => void;
  handlePrev: () => void;
  formData: Record<string, string>;
  accountDetails: Record<string, string>;
  updateFormData: (data: Record<string, string>) => void;
};

const StepAccountDetails = ({
  handleNext,
  handlePrev,
  formData,
  accountDetails,
  updateFormData,
}: StepProps) => {
  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      accounttype: formData.accounttype || "Individual",
      legalname1: formData.legalname1 || "",
      address1: formData.address1 || "",
      city1: formData.city1 || "",
      zip1: formData.zip1 || "",
      dob1: formData.dob1 || "",
      tin1: formData.tin1 || "",
      amount: formData.amount || "",
      state1: formData.state1 || "",
      country1: formData.country1 || "",
      legalname2: formData.legalname2 || "",
      address2: formData.address2 || "",
      city2: formData.city2 || "",
      zip2: formData.zip2 || "",
      dob2: formData.dob2 || "",
      tin2: formData.tin2 || "",
      state2: formData.state2 || "",
      country2: formData.country2 || "",
    },
    resolver: valibotResolver(schema),
  });

  const [accountType, setAccountType] = useState<string>(
    formData.accounttype || "Individual"
  );

  // Update formData when account type changes
  useEffect(() => {
    if (formData.accounttype !== accountType) {
      updateFormData({ accounttype: accountType });
    }
  }, [accountType]);

  const handleAccountTypeChange = (event: SelectChangeEvent<string>) => {
    setAccountType(event.target.value);
  };

  // Trigger updateFormData and go to the previous step
  const handlePrevious = () => {
    const currentFormData = getValues();
    updateFormData(currentFormData);
    handlePrev();
  };

  const renderTextField = (
    name: string,
    label: string,
    placeholder: string,
    type = "text"
  ) => (
    <Grid item xs={12} sm={6} key={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            fullWidth
            label={label}
            placeholder={placeholder}
            type={type}
            error={!!errors[name]}
            helperText={errors[name]?.message}
          />
        )}
      />
    </Grid>
  );

  const renderSelectField = (
    name: string,
    label: string,
    options: string[]
  ) => (
    <Grid item xs={12} sm={6} key={name}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <FormControl fullWidth error={!!errors[name]}>
            <InputLabel>{label}</InputLabel>
            <Select {...field} value={field.value || ""}>
              {options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
            {errors[name] && (
              <Typography variant="body2" color="error">
                {errors[name]?.message}
              </Typography>
            )}
          </FormControl>
        )}
      />
    </Grid>
  );

  const renderPersonalInfoFields = () => (
    <>
      {[
        {
          name: "legalname2",
          label: "Full Legal Name",
          placeholder: "John Doe",
        },
        { name: "address2", label: "Address", placeholder: "123 Main St" },
        { name: "city2", label: "City", placeholder: "New York" },
        {
          name: "zip2",
          label: "Zip Code",
          placeholder: "10001",
          type: "number",
        },
        { name: "dob2", label: "Date of Birth", placeholder: "MM-DD-YYYY" },
        { name: "tin2", label: "TIN/SSN", placeholder: "123-45-6789" },
      ].map(({ name, label, placeholder, type }) =>
        renderTextField(name, label, placeholder, type)
      )}
      {renderSelectField("state2", "State", US_STATES)}
      {renderSelectField("country2", "Country", OECD_COUNTRIES)}
    </>
  );

  const updateUserInDB = async (data: FormData): Promise<void> => {
    try {
      const userExists = await client.models.User.list({
        filter: { email: { eq: accountDetails.email } },
      });
      if (userExists.data && userExists.data.length > 0) {
        const { id } = userExists.data[0];
        await client.models.User.update({
          id,
          ...data,
        });
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (
    data: Record<string, string>
  ) => {
    setIsSubmitting(true);
    try {
      console.log("Validated Data:", data);
      await updateUserInDB(data);
      updateFormData(data);
      handleNext(); // Proceed to the next step
    } catch (error) {
      console.error("Submission failed:", error);
      // Optionally show an error notification or message
    } finally {
      setIsSubmitting(false);
    } // Allow the user to proceed to the next step regardless
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Typography variant="h4">Account Information</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Controller
            name="accounttype"
            control={control}
            render={({ field }) => (
              <FormControl fullWidth>
                <InputLabel>Account Type</InputLabel>
                <Select
                  {...field}
                  value={field.value || "Individual"}
                  onChange={(e) => {
                    field.onChange(e);
                    handleAccountTypeChange(e);
                  }}
                >
                  {ACCOUNT_TYPES.map((type) => (
                    <MenuItem key={type} value={type}>
                      {type}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          />
        </Grid>
        {[
          {
            name: "legalname1",
            label: "Full Legal Name",
            placeholder: "John Doe",
          },
          { name: "address1", label: "Address", placeholder: "123 Main St" },
          { name: "city1", label: "City", placeholder: "New York" },
          {
            name: "zip1",
            label: "Zip Code",
            placeholder: "10001",
            type: "number",
          },
          { name: "dob1", label: "Date of Birth", placeholder: "MM-DD-YYYY" },
          { name: "tin1", label: "TIN/SSN", placeholder: "123-45-6789" },
        ].map(({ name, label, placeholder, type }) =>
          renderTextField(name, label, placeholder, type)
        )}
        {renderSelectField("state1", "State", US_STATES)}
        {renderSelectField("country1", "Country", OECD_COUNTRIES)}
        <Grid item xs={12}>
          <Controller
            name="amount"
            control={control}
            defaultValue={formData.amount || ""}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label="Subscription Amount"
                placeholder="100,000"
                error={!!errors.amount}
                helperText={errors.amount?.message}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">US $</InputAdornment>
                  ),
                }}
              />
            )}
          />
        </Grid>
        {accountType === "Joint" && renderPersonalInfoFields()}

        {/* Navigation Buttons */}
        <Grid item xs={12} className="flex justify-between">
          <Button
            variant="outlined"
            onClick={(event) => {
              event.preventDefault(); // Prevent default button behavior
              handlePrevious(); // Call your function with `formData`
            }}
          >
            <DirectionalIcon
              ltrIconClass="ri-arrow-left-line"
              rtlIconClass="ri-arrow-right-line"
            />
            Previous
          </Button>
          <Button type="submit" variant="contained" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Next"}
            <DirectionalIcon
              ltrIconClass="ri-arrow-right-line"
              rtlIconClass="ri-arrow-left-line"
            />
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default StepAccountDetails;
