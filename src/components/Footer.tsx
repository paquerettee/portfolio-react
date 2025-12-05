import { Box, Typography } from "@mui/material";

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
    </Box>
  );
}
