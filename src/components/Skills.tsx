import { Box, Container, Typography, List, ListItem } from "@mui/material";
import ComponentContainer from "./ComponentContainer";

interface SkillCategoryProps {
  title: string;
  skills: string[];
}

const skills: Record<string, string[]> = {
  Development: [
    "Frontend: JavaScript, TypeScript, React, HTML, CSS3, SASS, Tailwind, MUI",
    "Backend: Python, Django, Flask, REST API, CRUD, C++, C#, PostgreSQL",
    "UI/UX Design: Interface design, User experience optimization",
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
    <ComponentContainer componentId="skills" backgroundImage="/img/watercolor-4116932_1280.png">
      <Container>
        <Typography variant="h3">Skills</Typography>

        <Box display="flex" flexDirection={{ xs: "column", md: "row" }} gap={4} sx={{ p: 2 }}>
          {Object.keys(skills).map((category) => (
            <SkillItem key={category} title={category} skills={skills[category]} />
          ))}
        </Box>
      </Container>
    </ComponentContainer>
  );
}

function SkillItem({ title, skills }: SkillCategoryProps) {
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
