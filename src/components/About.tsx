import { Container, Typography } from "@mui/material";
import ComponentContainer from "./ComponentContainer";

export default function About() {
  return (
    <ComponentContainer componentId="about" bgcolor="white">
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h3">About Me</Typography>

        <Typography variant="body1" sx={{ p: 2, lineHeight: 1.8, textAlign: "center" }}>
          Hi, I’m Kathy. I’ve always loved math and foreign languages, so technology felt like a
          natural choice — a space where I could put both to practical use. I studied at Wrocław
          University of Technology, where I earned my master’s degree in Computer Science, I worked
          as a mid‑level C++ developer and contributed to projects in Python and Django. Later, to
          balance family life while remaining active in the industry, I transitioned into an
          assistant role at an IT startup, which gave me valuable insight into project lifecycles
          and team dynamics. Now it’s time to return fully to IT. After considering my options, I’ve
          decided to focus on fullstack development with a strong emphasis on AI. Currently, I am
          expanding my expertise by building fullstack applications with JavaScript (TypeScript,
          React) and Python (Django, Flask). I also leverage AI tools to support my growth — always
          with a critical eye and thoughtful application. My goal is to create projects that
          integrate artificial intelligence in ways that genuinely benefit people. I am fluent in
          English, curious about the world, persistent, and committed to continuous learning. In my
          free time, I love swimming, hiking in the mountains, skiing, and learning to play the
          piano (still figuring it out!). I also enjoy bike trips and playing board games with my
          sons.
        </Typography>
      </Container>
    </ComponentContainer>
  );
}
