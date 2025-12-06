import { Container, Typography } from "@mui/material";
import ComponentContainer from "./ComponentContainer";

export default function Hero() {
  return (
    <ComponentContainer
      componentId="home"
      backgroundImage="/img/watercolor-4114530_1280_12.png"
      paddingY={0}
    >
      <Container
        maxWidth="lg"
        sx={{
          width: "100%",
          maxWidth: "100%",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h2">Hi I'm Kathy</Typography>
        <Typography variant="h5">software developer</Typography>
      </Container>
    </ComponentContainer>
  );
}
