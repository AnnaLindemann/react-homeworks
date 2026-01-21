import { Box, Typography, TextField, Button, Alert, Grid } from "@mui/material";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { postSale } from "../../../api/api";
import bild5 from "../../../assets/images/bild5.png";

export default function DiscountProductSection() {
  const [requestStatus, setRequestStatus] = useState("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: { name: "", phone: "", email: "" },
    mode: "onChange",
    reValidateMode: "onChange"
  });

  async function onSubmit(data) {
    try { setRequestStatus("loading"); await postSale(data); setRequestStatus("success"); reset(); } catch { setRequestStatus("error"); }
  }

  const isLoading = requestStatus === "loading";
  const isSuccess = requestStatus === "success";
  const isError = requestStatus === "error";

  const fieldSx = {
    width: "100%",
    "& .MuiInputBase-root": { backgroundColor: "rgba(255,255,255,0.08)", color: "#fff", borderRadius: "8px" },
    "& .MuiInputLabel-root": { color: "rgba(255,255,255,0.85)" },
    "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.45)" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.85)" },
    "& .MuiFormHelperText-root": { color: "rgba(255,255,255,0.92)", minHeight: "1.25rem", lineHeight: "1.25rem" },
    "& .MuiInputLabel-root.Mui-error": { color: "rgba(255,255,255,0.92)" },
    "& .MuiFormHelperText-root.Mui-error": { color: "#fff" }
  };



  return (
    <Box sx={{ width: "100%", px: { xs: "1rem", md: "2rem" }, py: { xs: "1rem", md: "2rem" } }}>
      <Box sx={{ width: "100%", borderRadius: "12px", overflow: "hidden", background: "linear-gradient(90deg, #0D50FF 0%, #2451C6 100%)", px: { xs: "1rem", md: "2rem" }, pt: { xs: "1.25rem", md: "2rem" }, pb: { xs: "1.25rem", md: 0 } }}>
        <Typography sx={{ color: "#fff", fontWeight: 700, textAlign: "center", fontSize: { xs: "2.25rem", md: "64px" }, lineHeight: 1.1, mb: { xs: "1.25rem", md: "2rem" } }}>5% off on the first order</Typography>

        <Grid container spacing={{ xs: 2, md: 3 }} alignItems="stretch" sx={{ width: "100%" }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignSelf: "stretch" }}>
            <Box sx={{ width: "100%", display: "flex", alignItems: "flex-end", flex: 1 }}>
              <Box component="img" src={bild5} alt="Discount banner" sx={{ width: "100%", height: "auto", display: "block", alignSelf: "flex-end" }} />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", alignItems: "center", alignSelf: "stretch", pb: { xs: 0, md: "2rem" } }}>
            <Box component="form" onSubmit={handleSubmit(onSubmit)} sx={{ width: "100%", display: "flex", flexDirection: "column", gap: { xs: "14px", md: "18px" } }}>
              <TextField label="Name" fullWidth {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters." } })} error={Boolean(errors.name)} helperText={errors.name?.message || " "} sx={{ ...fieldSx }} />
              <TextField label="Phone number" fullWidth {...register("phone", { required: "Phone is required", pattern: { value: /^\+?[0-9()\-\s]{7,20}$/, message: "Phone can contain digits, +, spaces, dashes and parentheses" }, validate: (v) => v.replace(/\D/g, "").length >= 8 || "Phone number is too short" })} error={Boolean(errors.phone)} helperText={errors.phone?.message || " "} sx={{ ...fieldSx }} />
              <TextField label="Email" fullWidth {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} error={Boolean(errors.email)} helperText={errors.email?.message || " "} sx={{ ...fieldSx }} />
              <Button type="submit" fullWidth disabled={isLoading} sx={{ width: "100%", py: { xs: "0.9rem", md: "1rem" }, fontWeight: 600, textTransform: "none", backgroundColor: "#fff", color: "#0D50FF", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", "&:hover": { backgroundColor: "rgba(255,255,255,0.92)" } }}>{isLoading ? "Sending..." : "Get a discount"}</Button>
              {isSuccess && <Alert severity="success">Request sent</Alert>}
              {isError && <Alert severity="error">Something went wrong, try again</Alert>}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
