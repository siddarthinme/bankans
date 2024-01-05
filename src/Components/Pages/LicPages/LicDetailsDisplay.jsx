import { Box, Typography } from "@mui/material";
import React from "react";

export default function LicDetailsDisplay({ selectedRow }) {
  return (
    <Box
      sx={{
        width: { xs: "100%", md: 300 },
        mx: "auto",
        textAlign: "left", // Align text to the left
      }}
    >
      <Typography>Commencement Date: {selectedRow.CommencementDate}</Typography>
      <Typography>Name: {selectedRow.Name}</Typography>
      <Typography>Date of Birth: {selectedRow.DOB}</Typography>
      <Typography>Policy No.: {selectedRow.PolicyNo}</Typography>
      <Typography>Premium: {selectedRow.Premium}</Typography>
      <Typography>Username: {selectedRow.Username}</Typography>
      <Typography>Plan: {selectedRow.Plan}</Typography>
      <Typography>Policy Term: {selectedRow.PolicyTerm}</Typography>
      <Typography>
        Premium Paying Term: {selectedRow.PremiumPayingTerm}
      </Typography>
      <Typography>Sum Assured: {selectedRow.SumAssured}</Typography>
      <Typography>
        Date Of Last Payment: {selectedRow.DateOfLastPayment}
      </Typography>
      <Typography>Nomination: {selectedRow.Nomination}</Typography>
      <Typography>Maturity Date: {selectedRow.MaturityDate}</Typography>
      <Typography>Comments: {selectedRow.Comments}</Typography>
    </Box>
  );
}
