// React Imports
import { useState } from "react";
import type { ChangeEvent } from "react";

// MUI Imports
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";


// Component Imports
import DirectionalIcon from "@components/DirectionalIcon";

type StepProps = {
  handlePrev?: () => void; // Optional for steps without a "Previous" button
  formData: Record<string, string>;
  accountDetails: Record<string, string>;
  personalInfo: Record<string, string>;
  updateFormData: (data: Record<string, string>) => void;
};


const StepBillingDetails = ({
  handlePrev,
  accountDetails,
  personalInfo
}: StepProps) => {
  console.log(personalInfo.legalname1)
  const pageUrl = `https://sign.zoho.com/signform?form_link=234b4d535f495623766485fd8f9b0a494badf5912a647e27fa4ea75fca4e71d1e8392e9d1ff7bfdf033debebbafe24b81835e0ed41f119ad62e39c466b91d04d2fa5f4fecbdb24a9#&Name=${personalInfo.legalname1}&Amount=${personalInfo.legalname1}&Investor-Name=${personalInfo.legalname1}&Investor-State=${personalInfo.state1}&Investor-Email=${accountDetails.email}&Investor-Address=${personalInfo.address1}&Investor-Citizenship=${personalInfo.country1}&Investor-Name-2=${personalInfo.legalname1}&Investor-Street-2=${personalInfo.address1}&State=${personalInfo.state1}&City=${personalInfo.city1}&Zip=${personalInfo.zip1}`;

  return (
    <>
      <div className="w-full flex flex-col space-y-4">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Subscription Agreement</h2>
      </div>

      {/* Document Container */}
      <div className="w-full flex flex-col space-y-4">
        {/* iFrame wrapper with fixed height */}
        <div className="w-full" style={{ height: "600px" }}>
          <iframe 
            src={pageUrl}
            name="SignForm"
            className="w-full h-full border rounded-lg bg-white"
          />
        </div>
        </div>
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
            color="success"
            onClick={() => alert("Submitted..!!")}
            endIcon={<i className="ri-check-line" />}
          >
            Submit
          </Button>
        </Grid>
      </div>
      </>
  );
};

export default StepBillingDetails;
