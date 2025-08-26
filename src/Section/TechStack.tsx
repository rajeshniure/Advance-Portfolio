import { Box, Card, Grid, Typography, Container } from "@mui/material";
import { techStackIcons } from "../constants/logo";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { useMemo } from 'react';
import { Link } from "react-scroll";

const TechStack: React.FC = () => {
  
  const memoizedTechStackItems = useMemo(() => 
    techStackIcons.map((techStackIcon) => (
      <Grid size={{ xs: 3, sm: 4, md: 3, lg: 2 }} key={techStackIcon.name} className="skills-item">
        <Card
          elevation={2}
          sx={{
            background: "transparent",
            border: "1px solid",
            borderColor: "divider",
            transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
            position: "relative",
            overflow: "visible",
            "&:hover": {
              boxShadow: "0 8px 32px 0 rgba(110, 87, 224, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)", 
              borderColor: "primary.main",
            }
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: { xs: 1.2, sm: 1.25, md: 2, lg: 2},
              pt: { xs: 1.5,lg:0, },
              pb: { xs: 1.5,lg:1.2,},
              gap: { xs: 1.5, md: 0 },
              transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              position: "relative",
              "&:hover": {
                transform: "scale(1.15) translateY(-2px)",
                zIndex: 5,
              },
            }}
          >
            <Box sx={{ 
              height: { md: 120, lg: 140 }, 
              mb: { xs: 0, md: 1 },
              width: "100%",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <TechIconCardExperience model={techStackIcon} />
            </Box>
            <Typography 
              variant="body1" 
              align="center" 
              fontWeight="bold" 
              sx={{ 
                fontSize: { xs: '0.7rem', sm: '0.8rem', md: '0.9rem' }, 
                
                color: 'text.secondary',
                lineHeight: 1.2,
                mt: { xs: 0.25, md: 0 },
              }}
            >
              {techStackIcon.name}
            </Typography>
          </Box>
        </Card>
      </Grid>
    )), []
  );

  return (
    <Box id="skills" sx={{ display: "flex", justifyContent: "center", pt: { xs: 8, md: 10 } }}>
      <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 2, md: 4 } }} className="top-header">
          <Link to="skills" smooth duration={500} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
            <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{display:"inline-block", fontSize:{xs:"1.6rem",md:"1.8rem"},fontFamily:"monospace",borderBottom:"4px solid",borderColor:"secondary.main",borderRadius:0.5 }} >
              My Tech Stack
            </Typography>
          </Link>
          <Typography variant="body1" align="center" maxWidth="sm" mx="auto" color="text.secondary" mt={1} fontFamily="monospace" fontSize={{xs:"0.8rem",md:"1rem"}}>
          My preferred tech stack that reflects my skills and expertise in modern development.
         </Typography>
        </Box>
      <Grid container spacing={{ xs: 1, sm: 2, md: 4 }} mt={4} className="skills-gallery">
        {memoizedTechStackItems}
      </Grid>
      </Container>
    </Box>
  );
};

export default TechStack;
