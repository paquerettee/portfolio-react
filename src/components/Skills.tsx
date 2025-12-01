import { Box, Container, Typography, List, ListItem } from "@mui/material";

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
          <SkillItem
            title="Development"
            skills={[
              "UI/UX Design",
              "HTML, CSS, SASS, Bootstrap, Tailwind",
              "JavaScript, React, Node.js",
              "Python, Django",
              "C++, C#",
            ]}
          />

          <SkillItem
            title="Tools & Technologies"
            skills={[
              "Git, GitHub & Subversion",
              "RESTful APIs & CRUD operations",
              "PostgreSQL, MS SQL",
              "Unit & Functional Testing",
              "AI Integration & Prompt Engineering",
            ]}
          />
          <SkillItem
            title="Team & Workflow"
            skills={[
              "Agile (Scrum)",
              "Team Communication",
              "Scheduling & Coordination",
              "Cross‑functional Collaboration",
            ]}
          />
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
      <Typography variant="h5" gutterBottom>
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
