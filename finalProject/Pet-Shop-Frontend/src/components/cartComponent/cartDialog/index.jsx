import { Dialog, DialogTitle, DialogContent, Typography, IconButton, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export default function SuccessDialog({ open, onClose }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="success-dialog-title"
      PaperProps={{
        sx: {
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
          borderRadius: 2,
          width: { xs: "calc(100% - 32px)", sm: 440 },
          maxWidth: 440,
          m: 0,
        },
      }}
    >
      <DialogTitle id="success-dialog-title" sx={{ px: 3, pt: 3, pb: 1.5 }}>
        <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: 800, lineHeight: 1.1 }} >
            Congratulations!
          </Typography>

          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{ color: "inherit", mt: -0.5, mr: -0.5 }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>

      <DialogContent sx={{ px: 3, pb: 3, pt: 0 }}>
        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            mb: 1.25,
            opacity: 0.95,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            maxWidth: 300,
          }}
        >
          Your order has been successfully placed on the website.
        </Typography>

        <Typography
          variant="subtitle2"
          sx={{
            fontWeight: 500,
            opacity: 0.95,
            whiteSpace: "normal",
            overflowWrap: "anywhere",
            maxWidth: 300,
          }}
        >
          A manager will contact you shortly to confirm your order.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}
