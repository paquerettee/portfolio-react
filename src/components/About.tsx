import { Container, Typography } from "@mui/material";

export default function About() {
  return (
    <Container id="about" maxWidth="md" sx={{ py: 8 }}>
      <Typography variant="h3" gutterBottom align="center">
        About Me
      </Typography>

      <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
        Hi, I’m Kathy. I’ve always loved math and foreign languages, so tech felt like a natural
        choice — a space where I could make practical use of both. I started studying at Wrocław
        University of Technology and earned my master’s degree in Computer Science. I began my
        career working as a programmer. Later on, due to personal reasons, I shifted into a role as
        an assistant in an IT startup, which gave me a fresh perspective on how projects and teams
        operate. Now it’s time to return to IT. After considering my options, I’ve decided to focus
        on fullstack development with a strong emphasis on AI. In my free time, I love swimming,
        hiking in the mountains, skiing, and learning to play the piano (still figuring it out!). I
        also enjoy bike trips and playing board games with my sons. A teraz zdanie po polsku żeby
        sorawdzć poslkie znaki przy tłumaczeniu ąśćęłóżź
      </Typography>
    </Container>
  );
}
