import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import { motion } from 'framer-motion';
import { techStackIcons } from "../constants/logo";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { useScrollAnimationScale } from '../hooks/useScrollAnimation';
import { useMemo } from 'react';




const TechStack: React.FC = () => {
  const containerAnimation = useScrollAnimationScale(0);
  
  const memoizedTechStackItems = useMemo(() => 
    techStackIcons.map((techStackIcon) => (
      <Grid size={{ xs: 3, sm: 3, md: 3, lg: 2 }} key={techStackIcon.name}>
        <Card
          elevation={2}
          sx={{
            width: '100%',
            mx: 'auto',
            overflow: "visible",
            position: "relative",
            background: "transparent",
            border: "1px solid",
            borderColor: "background.paper",
           "&:hover":{
            boxShadow:"0 8px 32px 0 rgba(110, 87, 224, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)", 
            borderColor: "primary.main",
            opacity: 1,
            transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, border-color 0.4s, filter 0.4s",
           }
          }}
        >
          <CardContent
            className="tech-card-content"
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: { xs: 1, sm: 1.5, md: 2, lg: 2.5 },
              gap: { xs: 1, sm: 2, md: 3 },
              transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s, border-color 0.4s, filter 0.4s",
              "&:hover": {
                transform: "scale(1.3) translateY(-8px) rotate(-2deg)",
                zIndex: 2,
                cursor: 'pointer',
                "& .tech-card-content": {
                  color: 'secondary.main',
                },
              },
            }}
          >
            <Box sx={{ width: '100%', height: { xs: 60, sm: 80, md: 100, lg: 120 }, mb: { xs: 2, sm: 1.5, md: 1 } }}>
              <TechIconCardExperience model={techStackIcon} />
            </Box>
            <Typography variant="body1" align="center" fontWeight="bold" sx={{ fontSize: { xs: '0.7rem', sm: '0.8rem', md: '1rem' }, color: 'text.secondary' }}>
              {techStackIcon.name}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )), []
  );

  return (
    <Box id="skills" sx={{ minHeight: "auto", display: "flex", justifyContent: "center", pt: { xs: 8, md: 16 } }}>
      <motion.div
        ref={containerAnimation.ref}
        initial={containerAnimation.initial}
        animate={containerAnimation.animate}
        transition={containerAnimation.transition}
      >
        <Box sx={{mx: { xs: 2, lg: '18rem' }}}>
          <Box sx={{ textAlign: "center", mb: 4 }}>
            <Typography variant="h4" color="text.secondary" fontWeight={700}>
              My Tech Stack
            </Typography>
            <Box sx={{ height: 4, backgroundColor: "secondary.main", borderRadius: 4, maxWidth: 225, margin: "0px auto 0 auto" }} />
          </Box>
        <Grid container spacing={{ xs: 1, sm: 0, md: 4 }} mt={4}>
          {memoizedTechStackItems}
        </Grid>
        </Box>
      </motion.div>
    </Box>
  );
};

export default TechStack;
