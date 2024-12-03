import React, { useState } from "react";
// MUI Imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Component Imports
import DirectionalIcon from "@components/DirectionalIcon";

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

const StepPersonalInfo = ({
  handleNext,
  handlePrev,
}: {
  handleNext: () => void;
  handlePrev: () => void;
}) => {
  const [accountType, setAccountType] = useState<string>("Individual");

  const handleAccountTypeChange = (event: SelectChangeEvent<string>) => {
    setAccountType(event.target.value);
  };

  const renderPersonalInfoFields = (InvestorNumber: number) => (
    <>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label={`Investor ${InvestorNumber} - Full Legal Name`}
          placeholder="John Doe / The Family Trust LLC"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label={`Investor ${InvestorNumber} - Address`}
          placeholder="1456, Liberty Street"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label={`Investor ${InvestorNumber} - City`}
          placeholder="Miami"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          type="number"
          label={`Investor ${InvestorNumber} - Zip Code`}
          placeholder="19901"
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>{`Investor ${InvestorNumber} - State`}</InputLabel>
          <Select label={`Investor ${InvestorNumber} - State`} defaultValue="">
            {US_STATES.map((state) => (
              <MenuItem key={state} value={state}>
                {state}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} md={6}>
        <FormControl fullWidth>
          <InputLabel>{`Investor ${InvestorNumber} - Country`}</InputLabel>
          <Select
            label={`Investor ${InvestorNumber} - Country`}
            defaultValue="United States"
          >
            {OECD_COUNTRIES.map((country) => (
              <MenuItem key={country} value={country}>
                {country}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label={`Investor ${InvestorNumber} - Date of Birth / Date of Incorporation`}
          placeholder="MM-DD-YYYY"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          label={`Investor ${InvestorNumber} - TIN or SSN`}
          placeholder="###-##-####"
        />
      </Grid>
    </>
  );

  return (
    <>
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
            variant="contained"
            onClick={handleNext}
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
    </>
  );
};

export default StepPersonalInfo;
