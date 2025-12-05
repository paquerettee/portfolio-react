import { Container, Typography, TextField, Button, Box, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComponentContainer from "./ComponentContainer";

export default function Contact() {
  return (
    <ComponentContainer componentId="contact" backgroundImage="/img/watercolor-4114530_1280_22.png">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Contact
        </Typography>

        {/* <Typography variant="body1" align="center" sx={{ mb: 4 }}> */}
        <Typography variant="h6" gutterBottom align="center" sx={{ mb: 4 }}>
          Want to team up or just say hi? Get in touch!
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2}>
          {/* <Box sx={{ pt: 6, px: 4, width: "100%" }}> */}
          <Box
            sx={{
              display: "flex",
              flexBasis: { md: "33.333%" }, // md:basis-1/3
              // justifyContent: { xs: "center", md: "left" }, // md:justify-center
            }}
          >
            <Box>
              {/* Email */}
              <Box>
                {/* <Typography variant="body1" fontWeight="bold" color="text.primary" mt={2}> */}
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "text.primary" }}>
                  Email:
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  ml={3}
                  mb={2}
                  sx={{
                    display: "inline-flex",
                  }}
                >
                  {<EmailIcon sx={{ mr: 1 }} />} paquerettee@gmail.com
                </Typography>
              </Box>

              {/* Social */}
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: "bold", color: "text.primary" }}>
                  Social:
                </Typography>
                <Stack direction="column" spacing={0.5} ml={3}>
                  <Link
                    href="https://github.com/paquerettee"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      // color: "#0077b5",
                      color: "text.secondary",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <GitHubIcon sx={{ mr: 1 }} /> GitHub
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/katarzyna-walig%C3%B3ra-025655129/"
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      display: "inline-flex",
                      color: "text.secondary",
                      "&:hover": { textDecoration: "underline" },
                    }}
                  >
                    <LinkedInIcon sx={{ mr: 1 }} /> LinkedIn
                  </Link>
                </Stack>
              </Box>
            </Box>
          </Box>

          {/* contact form */}
          <Box
            sx={{
              flex: 1, // flex-grow: 1
              // maxWidth: "48rem",
            }}
          >
            <Box
              component="form"
              action="https://formspree.io/f/mnnglqpq"
              method="POST"
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <TextField name="name" label="Your Name" variant="outlined" fullWidth />
              <TextField name="email" label="Your Email" variant="outlined" fullWidth />
              <TextField
                name="message"
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                // variant="outlined"
                sx={{
                  textTransform: "none",
                }}
              >
                Send
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </ComponentContainer>
  );
}
