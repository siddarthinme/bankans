import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { TextField, Button, Typography, Container } from "@mui/material";
import { auth, sendPasswordReset } from "../../../Firebase/Firebase";

function ResetPassword() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/dashboard");
  }, [user, loading]);

  return (
    <Container
      maxWidth="auto"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 12,
      }}
    >
      <TextField
        type="text"
        className="reset__textBox"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="E-mail Address"
        variant="outlined"
        fullWidth
        margin="normal"
        placeholder="E-mail Address"
      />
      <Button
        className="reset__btn"
        onClick={() => sendPasswordReset(email)}
        variant="contained"
        color="primary"
      >
        Send password reset email
      </Button>
      <Typography>
        Don't have an account? <Link to="/register">Register</Link> now.
      </Typography>
    </Container>
  );
}

export default ResetPassword;
