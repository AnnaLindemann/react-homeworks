import { Box, Typography, TextField, Button, Alert, Grid } from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { postSale } from "../../../api/api";
import bild5 from "../../../assets/images/bild5.png";

export default function DiscountProductSection() {
  const [requestStatus, setRequestStatus] = useState("idle");
  const { register, handleSubmit, reset, formState: { errors } } = useForm({ defaultValues: { name: "", phone: "", email: "" }, mode: "onChange", reValidateMode: "onChange" });

  async function onSubmit(data) { try { setRequestStatus("loading"); await postSale(data); setRequestStatus("success"); reset(); } catch { setRequestStatus("error"); } }

  const isLoading = requestStatus === "loading";
  const isSuccess = requestStatus === "success";
  const isError = requestStatus === "error";

const fieldSx = {
  "& .MuiOutlinedInput-root": { backgroundColor: "transparent", borderRadius: "10px", color: "#fff" },
  "& .MuiOutlinedInput-notchedOutline": { borderColor: "rgba(255,255,255,0.65)" },
  "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "#fff" },
  "& .MuiInputBase-input::placeholder": { color: "rgba(255,255,255,0.9)", opacity: 1 },
  "& .MuiFormHelperText-root": { color: "rgba(255,255,255,0.9)", minHeight: "1.25rem" },
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
              <TextField placeholder="Name" fullWidth {...register("name", { required: "Name is required", minLength: { value: 2, message: "Name must be at least 2 characters." } })} error={Boolean(errors.name)} helperText={errors.name?.message || " "} sx={fieldSx} />
              <TextField placeholder="Phone number" fullWidth {...register("phone", { required: "Phone is required", pattern: { value: /^\+?[0-9()\-\s]{7,20}$/, message: "Phone can contain digits, +, spaces, dashes and parentheses" }, validate: (v) => v.replace(/\D/g, "").length >= 8 || "Phone number is too short" })} error={Boolean(errors.phone)} helperText={errors.phone?.message || " "} sx={fieldSx} />
              <TextField placeholder="Email" fullWidth {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} error={Boolean(errors.email)} helperText={errors.email?.message || " "} sx={fieldSx} />

              <Button type="submit" fullWidth disabled={isLoading} sx={{ width: "100%", py: { xs: "0.9rem", md: "1rem" }, backgroundColor: "#fff", color: "#111", borderRadius: "10px", boxShadow: "0 8px 20px rgba(0,0,0,0.18)", "&:hover": { backgroundColor: "#0f0f0f", color: "#fff" }, "&.Mui-disabled": { backgroundColor: "rgba(255,255,255,0.75)", color: "rgba(0,0,0,0.55)" } }}>{isLoading ? "Sending..." : "Get a discount"}</Button>

              {isSuccess && <Typography sx={{ textAlign: "center", color: "#0D50FF", fontWeight: 600, mt: "0.25rem" }}>Request Submitted</Typography>}
              {isError && <Alert severity="error" sx={{ mt: "0.25rem" }}>Something went wrong, try again</Alert>}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
