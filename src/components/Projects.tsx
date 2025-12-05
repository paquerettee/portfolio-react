import { Container, Typography, Box, Card, CardContent, CardMedia, Button } from "@mui/material";
import ComponentContainer from "./ComponentContainer";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

interface ProjectItemProps {
  project: Project;
}

const projects = [
  {
    title: "CSS grid training",
    description: "A replica of a painting 'Composition A' by Piet Mondrian created with css grid.",
    image: "./img/css_grid.jpg",
    link: "https://kathy-css-grid-mondrian-painting.vercel.app/",
  },
  {
    title: "Blog",
    description: "Simple blog page made with React and Next.js. It will be upgraded incrementally.",
    image: "./img/blog.jpg",
    link: "https://kathy-blog-nextjs.vercel.app/",
  },
  {
    title: "Real estate",
    description:
      "A minimalistic demo of real estate company website made solely with HTML, SASS and TypeScript.",
    image: "./img/real_estate.jpg",
    link: "https://kathy-realestate-webpage-scss-ts.vercel.app/",
  },
  {
    title: "Lights out game",
    description: 'A React/Tailwind implementation of a classic "Lights Out" game.',
    image: "./img/lights_out.jpg",
    link: "https://kathy-lights-out-game.vercel.app/",
  },
  {
    title: "Ebook reader with TTS",
    description:
      "A modern fullstack web application built with React (frontend) and Flask (backend) that allows users to read eBooks directly in the browser and generate audiobooks from selected text using integrated text-to-speech (TTS) synthesis.",
    image: "./img/ebook_reader.jpg",
    link: "https://kathy-ebook-reader.vercel.app",
  },
];

export default function Projects() {
  return (
    <ComponentContainer componentId="projects" bgcolor="white">
      <Container id="projects" maxWidth="lg" sx={{ py: 8 }}>
        <Typography variant="h3" gutterBottom align="center">
          Projects
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr", // mobile
              sm: "repeat(2, 1fr)", // tablet
              md: "repeat(3, 1fr)", // desktop
            },
            gap: 3,
            pt: 6,
            px: 2,
          }}
        >
          {projects.map((project) => (
            <ProjectItem key={project.title} project={project} />
          ))}
        </Box>
      </Container>
    </ComponentContainer>
  );
}

function ProjectItem({ project }: ProjectItemProps) {
  return (
    <Card sx={{ width: "100%", height: 465 }}>
      <CardMedia
        component="img"
        image={project.image}
        alt={project.title}
        sx={{
          width: "100%",
          height: 250,
          objectFit: "cover",
          display: "block",
        }}
      />

      <CardContent
        sx={{
          height: 120,
          overflow: "hidden",
          mt: 2,
          p: 2,
          boxSizing: "border-box",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 1,
            lineHeight: 1.25,
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {project.title}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            lineHeight: 1.4,
          }}
        >
          {project.description}
        </Typography>
      </CardContent>

      <Box
        sx={{
          height: 60,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 2,
          boxSizing: "border-box",
        }}
      >
        <Button
          variant="outlined"
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          sx={{ textTransform: "none" }}
        >
          See more...
        </Button>
      </Box>
    </Card>
  );
}
