import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        py: 2,
        textAlign: "center",
        bgcolor: "white",
        color: "black",
        mt: 4,
      }}
    >
      <Typography variant="body2">© {new Date().getFullYear()} Kathy Codes</Typography>
    </Box>
  );
}
