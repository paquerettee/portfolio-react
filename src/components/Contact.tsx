import { Container, Typography, TextField, Button, Box, Grid, IconButton } from "@mui/material";
// import EmailIcon from "@mui/icons-material/Email";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import GitHubIcon from "@mui/icons-material/GitHub";

export default function Contact() {
  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        backgroundImage: "url('/img/watercolor-4114530_1280_22.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Contact
        </Typography>
        <Typography variant="body1" align="center" sx={{ mb: 4 }}>
          Want to team up or just say hi? Get in touch!
        </Typography>

        {/* Formularz */}
        <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField label="Your Name" variant="outlined" fullWidth />
          <TextField label="Your Email" variant="outlined" fullWidth />
          <TextField label="Message" variant="outlined" multiline rows={4} fullWidth />
          <Button variant="contained" color="primary">
            Send
          </Button>
        </Box>

        {/* Ikony kontaktowe */}
        <Grid container justifyContent="center" spacing={2} sx={{ mt: 4 }}>
          <Grid item>
            <IconButton href="mailto:kasia@example.com">{/* <EmailIcon /> */}</IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://linkedin.com/in/username" target="_blank">
              {/* <LinkedInIcon /> */}
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton href="https://github.com/username" target="_blank">
              {/* <GitHubIcon /> */}
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
