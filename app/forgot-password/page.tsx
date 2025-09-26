"use client";

import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { forgotPassword } from "../hooks/auth/useAuth";
import { toast } from "react-toastify";

function Page() {
  const [email, setEmail] = useState("");
  const { mutate, isSuccess, isError } = forgotPassword();
  if (isSuccess) {
    return toast.success("Mail Gönderildi");
  }
  if (isError) {
    return toast.error("Bir Hata Oluştu");
  }
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          bgcolor: "white",
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: "100%",
          maxWidth: 400,
        }}
      >
        <Typography variant="h5" sx={{ mb: 2, textAlign: "center" }}>
          Şifre Sıfırla
        </Typography>
        <TextField
          fullWidth
          label="E-Posta"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          margin="normal"
          required
        />
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
          onClick={() => mutate(email)}
        ></Button>
      </Box>
    </Container>
  );
}

export default Page;
