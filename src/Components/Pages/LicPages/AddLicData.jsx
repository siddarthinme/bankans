import React, { useEffect, useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid,
} from "@mui/material";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "../../../Firebase/Firebase";
import CreditCardForm from "./LicDetailsDisplay";

const AddLicData = (props) => {
  const [formData, setFormData] = useState({
    Status: true,
    InsuranceProvider: "",
    CommencementDate: "",
    Name: "",
    DOB: "",
    Username: "",
    PolicyNo: "",
    Premium: "",
    Plan: "",
    PolicyTerm: "",
    PremiumPayingTerm: "",
    SumAssured: "",
    DateOfLastPayment: "",
    Nomination: "",
    MaturityDate: "",
    Comments: "",
    file: null,
  });

  useEffect(() => {
    if (props.editMode && props.selectedRow) {
      // Populate formData with selectedRow data
      setFormData({
        ...props.selectedRow,
        CommencementDate__1: props.selectedRow.CommencementDate,
      });
    } else {
      // Clear form data when not in edit mode
      setFormData({
        CommencementDate: "",
        Name: "",
        DOB: "",
        Username: "",
        PolicyNo: "",
        Premium: "",
        CommencementDate__1: "",
        Plan: "",
        PolicyTerm: "",
        PremiumPayingTerm: "",
        SumAssured: "",
        DateOfLastPayment: "",
        Nomination: "",
        MaturityDate: "",
        Comments: "",
        file: null,
      });
    }
  }, [props.editMode, props.selectedRow]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClearForm = () => {
    setFormData({
      CommencementDate: "",
      Name: "",
      DOB: "",
      Username: "",
      PolicyNo: "",
      Premium: "",
      CommencementDate__1: "",
      Plan: "",
      PolicyTerm: "",
      PremiumPayingTerm: "",
      SumAssured: "",
      DateOfLastPayment: "",
      Nomination: "",
      MaturityDate: "",
      Comments: "",
      file: null,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formsRef = collection(db, "licdetails");

      if (props.editMode) {
        // Update data if in edit mode
        await updateDoc(doc(db, "licdetails", props.selectedRow.id), formData);
      } else {
        // Add new data if not in edit mode
        await addDoc(formsRef, formData);
      }

      handleClearForm();
      props.handleCloseAddDialog();
      console.log("Form data submitted successfully!");
    } catch (error) {
      console.error("Error adding/updating form data: ", error);
    }
  };

  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        onClick={props.handleopenAddDialog}
        sx={{ mb: 4 }}
      >
        Add
      </Button>
      {console.log("openAddDialog", props.openAddDialog)}
      <Dialog open={props.openAddDialog} onClose={props.handleCloseAddDialog}>
        <DialogTitle>Add LIC Data</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit} type="Paper">
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Name"
                  name="Name"
                  fullWidth
                  required
                  value={formData.Name}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Commencement Date"
                  name="CommencementDate"
                  fullWidth
                  required
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.CommencementDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Insurance Provider"
                  name="InsuranceProvider"
                  fullWidth
                  required
                  InputLabelProps={{ shrink: true }}
                  value={formData.InsuranceProvider}
                  onChange={handleChange}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Birth"
                  name="DOB"
                  fullWidth
                  required
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.DOB}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="User Name"
                  name="Username"
                  fullWidth
                  required
                  value={formData.Username}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Policy No."
                  name="PolicyNo"
                  fullWidth
                  required
                  value={formData.PolicyNo}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Premium"
                  name="Premium"
                  fullWidth
                  required
                  type="number"
                  value={formData.Premium}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Plan"
                  name="Plan"
                  fullWidth
                  required
                  value={formData.Plan}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Policy Term"
                  name="PolicyTerm"
                  fullWidth
                  required
                  type="number"
                  value={formData.PolicyTerm}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Premium Paying Term"
                  name="PremiumPayingTerm"
                  fullWidth
                  required
                  type="number"
                  value={formData.PremiumPayingTerm}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Sum Assured"
                  name="SumAssured"
                  fullWidth
                  required
                  type="number"
                  value={formData.SumAssured}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Date of Last Payment"
                  name="DateOfLastPayment"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.DateOfLastPayment}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Nomination"
                  name="Nomination"
                  fullWidth
                  value={formData.Nomination}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Maturity Date"
                  name="MaturityDate"
                  fullWidth
                  type="date"
                  InputLabelProps={{ shrink: true }}
                  value={formData.MaturityDate}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Comments"
                  name="Comments"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.Comments}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <DialogActions>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              <Button onClick={handleClearForm} color="secondary">
                Clear
              </Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </Container>
  );
};

export default AddLicData;
