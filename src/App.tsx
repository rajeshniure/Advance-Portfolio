import Navbar from "./Section/Navbar"
import HeroSection from "./Section/HeroSection"
import { useTheme } from "@mui/material/styles"
import StarBackground from "./components/StarBackground"
import TechStack from "./Section/TechStack"
import Projects from "./Section/Projects"
import Certificate from "./Section/Certificate"
import Contact from "./Section/Contact"
import AboutSection from "./Section/About"
import Footer from "./Section/Footer"
import { useScrollReveal } from "./hooks/useScrollReveal";


function App() {
     const theme = useTheme();
     useScrollReveal();
  return (
   <>
   {theme.palette.mode === "dark" && <StarBackground />}
        <Navbar />
        <HeroSection />
        <AboutSection />
        <TechStack />
        <Projects />
        <Certificate />
        <Contact />
        <Footer />
   </>
  )
}

export default App