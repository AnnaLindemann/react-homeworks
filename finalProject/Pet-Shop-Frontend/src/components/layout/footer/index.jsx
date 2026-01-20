import { Box, Typography, Container, Paper } from "@mui/material";
import whatsApp from "../../../assets/icons/whatsApp.svg";
import insta from "../../../assets/icons/insta.svg";

export default function Footer() {
  return (
    <Box component="footer" sx={{ width: "100%", py: "4rem" }}>
      <Container maxWidth={false} disableGutters>
        <Box sx={{ px: { xs: "1rem", sm: "2rem", md: "4rem" } }}>
          <Typography variant="h2" sx={{ mb: "2rem" }}>
            Contact
          </Typography>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
              gap: "2rem",
              width: "100%",
            }}
          >
            <Paper sx={{ p: "2rem", width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Phone
              </Typography>
              <Typography
                variant="h3"
                component="a"
                href="tel:+493091588492"
                sx={{
                  color: "text.primary",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                +49 30 915-88492
              </Typography>
            </Paper>

            <Paper sx={{ p: "2rem", width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Socials
              </Typography>
              <Box sx={{ display: "flex", gap: "1.5rem", mt: "0.5rem" }}>
                <Box
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  sx={{
                    display: "inline-flex",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease",
                    "&:hover": { opacity: 0.7 },
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  <Box component="img" src={insta} alt="Instagram" />
                </Box>
                <Box
                  component="a"
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  sx={{
                    display: "inline-flex",
                    cursor: "pointer",
                    transition: "opacity 0.2s ease",
                    "&:hover": { opacity: 0.7 },
                    "&:focus-visible": {
                      outline: "2px solid",
                      outlineColor: "primary.main",
                      outlineOffset: "2px",
                    },
                  }}
                >
                  <Box component="img" src={whatsApp} alt="WhatsApp" />
                </Box>
              </Box>
            </Paper>

            <Paper sx={{ p: "2rem", width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Address
              </Typography>
              <Typography variant="h3">
                Wallstraße 9–13, 10179 Berlin, Deutschland
              </Typography>
            </Paper>

            <Paper sx={{ p: "2rem", width: "100%" }}>
              <Typography variant="subtitle2" color="text.secondary">
                Working Hours
              </Typography>
              <Typography variant="h3">24 hours a day</Typography>
            </Paper>
          </Box>

          <Box
            sx={{
              mt: "2rem",
              height: { xs: "15rem", md: "20rem" },
              borderRadius: "0.75rem",
              backgroundColor: "grey.100",
              width: "100%",
            }}
          />
        </Box>
      </Container>
    </Box>
  );
}
