import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@mui/material";
import { db } from "../../Firebase/Firebase";
import { collection, addDoc } from "firebase/firestore";

const LicDataPage = () => {
  const [formData, setFormData] = useState({
    commencementDate: "",
    name: "",
    dob: "",
    uName: "",
    policyNo: "",
    premium: "",
    plan: "",
    policyTerm: "",
    premiumPayingTerm: "",
    sumAssured: "",
    dateOfLastPayment: "",
    nomination: "",
    maturityDate: "",
    comments: "",
    file: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Assuming you have a 'forms' collection in Firebase Firestore
      const formsRef = collection(db, "licdetails");
      await addDoc(formsRef, formData);

      // Reset the form after submission
      setFormData({
        commencementDate: "",
        name: "",
        dob: "",
        uName: "",
        policyNo: "",
        premium: "",
        plan: "",
        policyTerm: "",
        premiumPayingTerm: "",
        sumAssured: "",
        dateOfLastPayment: "",
        nomination: "",
        maturityDate: "",
        comments: "",
      });

      console.log("Form data submitted successfully!");
    } catch (error) {
      console.error("Error adding form data: ", error);
    }
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        mt: 10,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh", // This ensures the container takes the full height of the viewport
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        LIC Data
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Commencement Date"
              name="commencementDate"
              fullWidth
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.commencementDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Name"
              name="name"
              fullWidth
              required
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Birth"
              name="dob"
              fullWidth
              required
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.dob}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="User Name"
              name="uName"
              fullWidth
              required
              value={formData.uName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Policy No."
              name="policyNo"
              fullWidth
              required
              value={formData.policyNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Premium"
              name="premium"
              fullWidth
              required
              type="number"
              value={formData.premium}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Plan"
              name="plan"
              fullWidth
              required
              value={formData.plan}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Policy Term"
              name="policyTerm"
              fullWidth
              required
              type="number"
              value={formData.policyTerm}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Premium Paying Term"
              name="premiumPayingTerm"
              fullWidth
              required
              type="number"
              value={formData.premiumPayingTerm}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Sum Assured"
              name="sumAssured"
              fullWidth
              required
              type="number"
              value={formData.sumAssured}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Date of Last Payment"
              name="dateOfLastPayment"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.dateOfLastPayment}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nomination"
              name="nomination"
              fullWidth
              value={formData.nomination}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Maturity Date"
              name="maturityDate"
              fullWidth
              type="date"
              InputLabelProps={{ shrink: true }}
              value={formData.maturityDate}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Comments"
              name="comments"
              fullWidth
              multiline
              rows={4}
              value={formData.comments}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <input type="file" onChange={handleFileChange} />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default LicDataPage;
