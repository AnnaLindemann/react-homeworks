import { Box, Paper, Typography, TextField, Button } from "@mui/material";
import { useForm } from "react-hook-form";

export default function CartForm({
  totalQty,
  totalPrice,
  onSubmit,
  status = "idle",
  errorMessage = null,
}) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", phone: "", email: "" },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const disabled = status === "loading";

  const submit = async (values) => {
    const ok = await onSubmit(values);
    if (ok) reset();
  };

  return (
    <Paper sx={{ p: { xs: 2, md: 3 } }}>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Order details
      </Typography>

      <Typography variant="h4" color="text.secondary" sx={{ mb: 2 }}>
        {totalQty} items
      </Typography>

      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", mb: 2 }}>
        <Typography variant="h4" color="text.secondary">
          Total
        </Typography>
        <Typography variant="h3">
          ${Number(totalPrice).toFixed(2)}
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(submit)}
        sx={{ display: "flex", flexDirection: "column", gap: { xs: 1.75, md: 2.25 } }}
      >
        <TextField
          placeholder="Name"
          {...register("name", {
            required: "Name is required",
            minLength: { value: 2, message: "Name must be at least 2 characters." },
          })}
          error={Boolean(errors.name)}
          helperText={errors.name?.message || " "}
        />

        <TextField
          placeholder="Phone number"
          {...register("phone", {
            required: "Phone is required",
            pattern: {
              value: /^\+?[0-9()\-\s]{7,20}$/,
              message: "Phone can contain digits, +, spaces, dashes and parentheses",
            },
            validate: (v) => v.replace(/\D/g, "").length >= 8 || "Phone number is too short",
          })}
          error={Boolean(errors.phone)}
          helperText={errors.phone?.message || " "}
        />

        <TextField
          placeholder="Email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Please enter a valid email",
            },
          })}
          error={Boolean(errors.email)}
          helperText={errors.email?.message || " "}
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={disabled}
          sx={{ mt: 1, py: { xs: 1.1, md: 1.2 } }}
        >
          {disabled ? "Sending..." : "Order"}
        </Button>

        {status === "error" && (
          <Box sx={{ mt: 0.5, fontSize: 14, color: "#b00020" }}>
            {errorMessage || "Something went wrong, try again"}
          </Box>
        )}
      </Box>
    </Paper>
  );
}
