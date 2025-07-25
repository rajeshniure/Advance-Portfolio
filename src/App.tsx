import Navbar from "./Section/Navbar"
import HeroSection from "./Section/HeroSection"
import { useTheme } from "@mui/material/styles"
// import VideoBackground from "./components/VideoBackground"
import StarBackground from "./components/StarBackground"
import TechStack from "./Section/TechStack"
import Projects from "./Section/Projects"
import Certificate from "./Section/Certificate"
import Contact from "./Section/Contact"



function App() {
     const theme = useTheme();
  return (
   <>
   {theme.palette.mode === "dark" && <StarBackground />}
        <Navbar />
        <HeroSection />
        <TechStack />
        <Projects />
        <Certificate />
        <Contact />
   </>
)
}

export default App