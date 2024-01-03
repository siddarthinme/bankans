import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../Firebase/Firebase";

const DisplayLicData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "licdetails"));
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="auto" sx={{ mt: 10 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Display LIC Data
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ minHeight: 50 }}>
              <TableCell sx={{ minWidth: 100 }}>Commencement Date</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Name</TableCell>
              <TableCell sx={{ minWidth: 120 }}>Date of Birth</TableCell>
              <TableCell sx={{ minWidth: 100 }}>User Name</TableCell>
              <TableCell sx={{ minWidth: 120 }}>Policy No.</TableCell>
              <TableCell sx={{ minWidth: 80 }}>Premium</TableCell>
              <TableCell sx={{ minWidth: 150 }}>Plan</TableCell>
              <TableCell sx={{ minWidth: 50 }}>Policy Term</TableCell>
              <TableCell sx={{ minWidth: 50 }}>Paying Term</TableCell>
              <TableCell sx={{ minWidth: 50 }}>Sum Assured</TableCell>
              <TableCell sx={{ minWidth: 120 }}>Date of Last Payment</TableCell>
              <TableCell sx={{ minWidth: 100 }}>Nomination</TableCell>
              <TableCell sx={{ minWidth: 120 }}>Maturity Date</TableCell>
              <TableCell sx={{ minWidth: 250 }}>Comments</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id} sx={{ height: 40 }}>
                <TableCell>{item.commencementDate}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.dob}</TableCell>
                <TableCell>{item.uName}</TableCell>
                <TableCell>{item.policyNo}</TableCell>
                <TableCell>{item.premium}</TableCell>
                <TableCell>{item.plan}</TableCell>
                <TableCell>{item.policyTerm}</TableCell>
                <TableCell>{item.premiumPayingTerm}</TableCell>
                <TableCell>{item.sumAssured}</TableCell>
                <TableCell>{item.dateOfLastPayment}</TableCell>
                <TableCell>{item.nomination}</TableCell>
                <TableCell>{item.maturityDate}</TableCell>
                <TableCell>{item.comments}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default DisplayLicData;
