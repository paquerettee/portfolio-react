import { Container, Typography, TextField, Button, Box, Stack, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ComponentContainer from "./ComponentContainer";

export default function Contact() {
  return (
    <ComponentContainer componentId="contact" backgroundImage="/img/watercolor-4114530_1280_22.png">
      <Container maxWidth="md">
        <Typography variant="h3">Contact</Typography>

        <Typography variant="h6" align="center" sx={{ py: 2, whiteSpace: "pre-line" }}>
          {`Want to team up or just say hi?\nGet in touch!`}
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={2} sx={{ p: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexBasis: { md: "33.333%" },
            }}
          >
            <Box>
              {/* Email */}
              <Box>
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
                  {<EmailIcon sx={{ mr: 1 }} />} kathy.fullstack@gmail.com
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
              flex: 1,
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
