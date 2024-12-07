import React, { useState, useEffect } from "react";
// MUI Imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { valibotResolver } from "@hookform/resolvers/valibot";
import { object, minLength, string, email, pipe, nonEmpty } from "valibot";
import type { InferInput } from "valibot";

// Component Imports
import DirectionalIcon from "@components/DirectionalIcon";

// Import AWS Amplify data client
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../../amplify/data/resource";

const client = generateClient<Schema>();

type FormData = InferInput<typeof schema>;

const schema = object({
  legalname1: pipe(string(), nonEmpty("First Name is required")),
  address1: pipe(string(), nonEmpty("Address is required")),
  city1: pipe(string(), nonEmpty("City is required")),
  zip1: pipe(string(), nonEmpty("Zip Code is required")),

});

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

type StepProps = {
  handleNext: () => void;
  handlePrev?: () => void;
  formData: Record<string, any>;
  accountDetails: Record<string, string>;
  updateFormData: (data: Record<string, any>) => void;
};

const StepPersonalInfo = ({ handleNext, handlePrev, formData, updateFormData, accountDetails }: StepProps) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
      setValue,
    } = useForm<FormData>({
      resolver: valibotResolver(schema),
    });

      // Prepopulate form fields with existing data

  const [accountType, setAccountType] = useState<string>(
    formData.accountType || "Individual"
  );

  // Only update parent state if accountType changes  
  useEffect(() => {
    if (formData.accountType !== accountType) {
      updateFormData({ accountType });
    }
  }, [accountType, formData.accountType, updateFormData]);

  const handleAccountTypeChange = (event: SelectChangeEvent<string>) => {
    setAccountType(event.target.value);
  };

  const renderPersonalInfoFields = (InvestorNumber: number) => {

    return (
      <>
        {/* Legal Name Field */}
        <Grid item xs={12}>
        <Controller
            name={`legalname1`}
            control={control}
            defaultValue={`formData.legalNameKey${InvestorNumber}` || ""}
            render={({ field }) => (
              <TextField
                {...field}
                fullWidth
                label={`Investor ${InvestorNumber} - Full Legal Name`}
               placeholder="John Doe / The Family Trust LLC"
                error={!!errors.legalname1}
                helperText={errors.legalname1?.message}
              />
            )}
          />
        </Grid>

        {/* Address Field */}
        <Grid item xs={12}>
          <TextField
            fullWidth
            name={`address1`}
            defaultValue={formData.address1|| ""}
            label={`Investor ${InvestorNumber} - Address`}
            placeholder="1456, Liberty Street"
            error={!!errors.address1}
            helperText={errors.address1?.message}
          />
        </Grid>
        {/* City Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            name={`city1`}
            defaultValue={formData.city1 || ""}
            label={`Investor ${InvestorNumber} - City`}
            placeholder="Miami"
            error={!!errors.city1}
            //helperText={errors[cityKey]?.message}
          />
        </Grid>

        {/* Zip Code Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            name={`zip1`}
            defaultValue={formData.zip1 || ""}
            fullWidth
            label={`Investor ${InvestorNumber} - Zip Code`}
            placeholder="19901"
            error={!!errors.zip1}
            //helperText={errors[zipKey]?.message}
          />
        </Grid>

        {/* State Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>{`Investor ${InvestorNumber} - State`}</InputLabel>
            <Select
              label={`Investor ${InvestorNumber} - State`}
              value={formData[`state${InvestorNumber}`] || ""}
              onChange={(e) =>
                updateFormData({ [`state${InvestorNumber}`]: e.target.value })
              }
            >
              {US_STATES.map((state) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Country Field */}
        <Grid item xs={12} md={6}>
          <FormControl fullWidth>
            <InputLabel>{`Investor ${InvestorNumber} - Country`}</InputLabel>
            <Select
              label={`Investor ${InvestorNumber} - Country`}
              value={formData[`country${InvestorNumber}`] || "United States"}
              onChange={(e) =>
                updateFormData({ [`country${InvestorNumber}`]: e.target.value })
              }
            >
              {OECD_COUNTRIES.map((country) => (
                <MenuItem key={country} value={country}>
                  {country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* Date of Birth/Incorporation Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label={`Investor ${InvestorNumber} - Date of Birth / Incorporation`}
            placeholder="MM-DD-YYYY"
            value={formData[`dob${InvestorNumber}`] || ""}
            onChange={(e) =>
              updateFormData({ [`dob${InvestorNumber}`]: e.target.value })
            }
          />
        </Grid>

        {/* TIN/SSN Field */}
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label={`Investor ${InvestorNumber} - TIN or SSN`}
            placeholder="###-##-####"
            value={formData[`tin${InvestorNumber}`] || ""}
            onChange={(e) =>
              updateFormData({ [`tin${InvestorNumber}`]: e.target.value })
            }
          />
        </Grid>
      </>
    );
  };

  // Function to check if user exists and return their ID if found
  const checkUserExists = async (email: string): Promise<string | null> => {
    try {
      const { data: users } = await client.models.User.list({
        filter: { email: { eq: email } },
      });

      // If users are found, return the first user's ID (assuming email is unique)
      if (users.length > 0) {
        return users[0].id; // Return the user's ID
      }
      return null; // Return null if no user found
    } catch (error) {
      console.error("Error checking if user exists:", error);
      return null; // Return null if there is an error
    }
  };

  // Function to  update user in the database
  const updateUserInDB = async (
    formData: Record<string, any>
  ): Promise<void> => {
    try {
      const userExists = await checkUserExists(accountDetails.email);
      console.log(userExists);

      if (userExists) {
        // Use an object format to store multiple investors' details
        const legalname = {
          legalname1: formData["legalName1"],
          legalname2: formData["legalName2"],
        };
        const address = {
          address1: formData["address1"],
          address2: formData["address2"],
        };
        const city = {
          city1: formData["city1"],
          city2: formData["city2"],
        };
        const zip = {
          zip1: formData["zip1"],
          zip2: formData["zip2"],
        };
        const state = {
          state1: formData["state1"],
          state2: formData["state2"],
        };
        const country = {
          country1: formData["country1"],
          country2: formData["country2"],
        };
        const dob = {
          dob1: formData["dob1"],
          dob2: formData["dob2"],
        };
        const tin = {
          tin1: formData["tin1"],
          tin2: formData["tin2"],
        };

        // Update the user in the database with the full object for multiple investors
        const { data, errors } = await client.models.User.update({
          id: userExists,
          legalname: JSON.stringify(legalname),
          address: JSON.stringify(address),
          city: JSON.stringify(city),
          zipcode: JSON.stringify(zip),
          state: JSON.stringify(state),
          country: JSON.stringify(country),
          dob: JSON.stringify(dob),
          tin: JSON.stringify(tin),
        });

        if (errors) {
          console.error("Error updating user:", errors);
        } else {
          console.log("User updated successfully:", data);
        }
      } else {
        console.log("User does not exist.");
      }
    } catch (error) {
      console.error("Failed to update user in the database:", error);
    }
  };

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(formData)
    console.log("Validated Data:", data);
    updateFormData(data);
    await updateUserInDB(data); // Attempt to create the user or skip if they exist
    handleNext(); // Allow the user to proceed to the next step regardless
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mbe-5">
        <Typography variant="h4" className="mbe-1">
          Personal Information
        </Typography>
        <Typography>Enter Your Personal Information</Typography>
      </div>
      <Grid container spacing={5}>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel>Account Type</InputLabel>
            <Select
              label="Account Type"
              value={accountType}
              onChange={handleAccountTypeChange}
            >
              {ACCOUNT_TYPES.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {renderPersonalInfoFields(1)}

        {accountType === "Joint" && renderPersonalInfoFields(2)}

        <Grid item xs={12} className="flex justify-between">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handlePrev}
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

export default StepPersonalInfo;
