import { Box, Typography, IconButton } from "@mui/material";
// import GitHubIcon from "@mui/icons-material/GitHub";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        textAlign: "center",
        bgcolor: "white",
        color: "black",
        mt: 8,
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Kathy Codes</Typography>

      {/* <Box sx={{ mt: 1 }}>
        <IconButton href="https://github.com/username" target="_blank" color="inherit">
          {/* <GitHubIcon /> *}
        </IconButton>
        <IconButton href="https://linkedin.com/in/username" target="_blank" color="inherit">
          {/* <LinkedInIcon /> *}
        </IconButton>
      </Box> */}
    </Box>
  );
}
