import { Box, Container, Typography, List, ListItem } from "@mui/material";

const skills = {
  Development: [
    "Frontend: JavaScript, TypeScript, React, HTML, CSS3, SASS, Tailwind",
    "Backend: Python, Django, REST API, CRUD, C++, C#, PostgreSQL",
    "UI/UX Design: Interface design, user experience optimization",
  ],
  "Tools & Technologies": [
    "Git, GitHub, Subversion",
    "Vercel, Windows, Linux",
    "Unit & Functional Testing",
    "AI Integration & Prompt Engineering (ChatGPT, Copilot)",
  ],
  "Workflow & Collaboration": [
    "Agile (Scrum)",
    "Clear Code, Code Review",
    "Team Communication",
    "Cross‑functional Collaboration",
  ],
};

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: 8,
        backgroundImage: "url('/img/watercolor-4116932_1280.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Skills
        </Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4}>
          {Object.keys(skills).map((category) => (
            <SkillItem key={category} title={category} skills={skills[category]} />
          ))}
        </Box>
      </Container>
    </Box>
  );
}

function SkillItem({ title, skills }) {
  return (
    <Box
      flex={1}
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Typography variant="h6" gutterBottom align="center">
        {title}
      </Typography>
      <List>
        {skills.map((skill) => (
          <ListItem
            key={skill}
            sx={{
              justifyContent: "center",
              textAlign: "center",
              display: "block",
            }}
          >
            {skill}
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
