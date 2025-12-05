import "./App.css";
import "@fontsource/rosarivo";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

let theme = createTheme({
  spacing: 8,
  typography: {
    fontFamily: [
      "ui-sans-serif",
      "system-ui",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
      "Segoe UI Symbol",
      "Noto Color Emoji",
    ].join(","),

    h1: { fontFamily: "'Rosarivo', cursive", fontWeight: 700 },
    h2: { fontFamily: "'Rosarivo', cursive", fontWeight: 700, textAlign: "center" },
    h3: { fontFamily: "'Rosarivo', cursive", fontWeight: 700 },
    h4: { fontFamily: "'Rosarivo', cursive", fontWeight: 700 },
    h5: { fontFamily: "'Rosarivo', cursive", fontWeight: 700, textAlign: "center" },
    h6: { fontFamily: "'Rosarivo', cursive", fontWeight: 700 },
  },
});

theme = responsiveFontSizes(theme);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
