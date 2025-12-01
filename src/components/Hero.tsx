import { Box, Typography } from "@mui/material";

export default function Hero() {
  return (
    <Box
      id="home"
      sx={{
        margin: "0",
        width: "100%",
        maxWidth: "100%",
        minHeight: "100vh",
        backgroundImage: "url('/img/watercolor-4114530_1280_12.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        p: 0,
      }}
    >
      <Typography variant="h2">Hi I'm Kathy</Typography>
      <Typography variant="h5">software developer</Typography>
    </Box>
  );
}
