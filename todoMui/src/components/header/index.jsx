import { Container, Paper, Box, Typography } from "@mui/material";

function Header() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 2 }}>
        <Paper
          elevation={2}
          sx={{
            p: 2,
            borderRadius: 2,
            bgcolor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
            Todo List
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}

export default Header;


