import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Box, Card, CardContent, Grid, Typography, Container } from "@mui/material";
import { techStackIcons } from "../constants/logo";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
// import TitleHeader from "../components/TitleHeader";


interface TechStackIconType {
  name: string;
  modelPath: string;
  scale?: [number, number, number];
  rotation?: [number, number, number];

}

const TechStack: React.FC = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
        },
      }
    );
  }, []);
  

  return (
    <Box id="skills" sx={{ minHeight: {xs:'0',md:'100vh'}, display: "flex", justifyContent: "center",pt: { xs: 8, md: 16 } }}>
      <Container>
      <Box sx={{ textAlign: "center", mb: 4 }}>
        <Typography variant="h4" color="text.secondary" fontWeight={700}>
          My Tech Stack
        </Typography>
        <Box sx={{ height: 8, backgroundColor: "secondary.main", borderRadius: 4, maxWidth: 240, margin: "0px auto 0 auto" }} />
      </Box>

        <Grid container spacing={{xs:1,sm:0,md:4}} mt={4}>
          {techStackIcons.map((techStackIcon: TechStackIconType) => (
            <Grid size={{ xs: 3, sm: 3, md: 3, lg: 2 }} key={techStackIcon.name}>
              <Card
              elevation={0}
                sx={{
                  width: {  md: '110%' },
                 
                  mx: 'auto',
                  overflow: "visible",

                  transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, border-color 0.4s, filter 0.4s",
                  position: "relative",
                  background: "transparent",
                  "&:hover": {
                    transform: "scale(1.5) translateY(-8px) rotate(-2deg)",
                    zIndex: 2,
                    cursor: 'pointer',
                    "& .tech-card-content": {
                      color: 'secondary.main',

                    },
                  },
                }}
              >
                <CardContent
                  className="tech-card-content"
                  sx={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
                    gap: { xs: 1, sm: 2, md: 3 },
                    transition: "color 0.4s, text-shadow 0.4s",
                  }}
                >
                  <Box sx={{ width: '100%', height: { xs: 60, sm: 80, md: 100, lg: 120 }, mb: { xs: 2, sm: 1.5, md: 2 } }}>
                    <TechIconCardExperience model={techStackIcon} />
                  </Box>
                  <Typography variant="body1" align="center" fontWeight="bold" sx={{fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }}}>
                    {techStackIcon.name}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;
