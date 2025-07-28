import { Box, Card, CardContent, Typography } from "@mui/material";
import {  motion } from 'framer-motion';
import { useScrollAnimationScale } from '../hooks/useScrollAnimation';
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import type{ SxProps, Theme } from "@mui/material/styles";

const About: React.FC = () => {
  const containerAnimation = useScrollAnimationScale(0);

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: { scale: 1, rotate: 0 }
  };

  const softSkills = [
    { name: "Communication", emoji: "💬" },
    { name: "Leadership", emoji: "👑" },
    { name: "Problem Solving", emoji: "🧩" },
    { name: "Teamwork", emoji: "🤝" },
    { name: "Adaptability", emoji: "🔄" },
    { name: "Creativity", emoji: "🎨" },
    { name: "Time Management", emoji: "⏰" }
  ];

  const motivations = [
    { name: "Innovation", emoji: "🚀" },
    { name: "Learning", emoji: "📚" },
    { name: "Impact", emoji: "💡" },
    { name: "Excellence", emoji: "⭐" },
    { name: "Growth", emoji: "🌱" },
    { name: "Collaboration", emoji: "🤝" }
  ];

  const description = "Hello, I'm Rajesh Niure, a dedicated Backend Developer and a passionate Computer Science student currently studying at Prime College. I have built a strong technical foundation in Python, Django, JavaScript, HTML, CSS, and MySQL, and I continuously strive to deepen my knowledge in full-stack web development. Throughout my academic and personal projects, I have gained valuable experience in developing scalable, efficient, and user-focused web applications. I have a particular interest in backend development, database design, and API integrations, and I enjoy crafting solutions that are both technically sound and aligned with user needs. With a keen eye for clean code architecture and best practices, I am always eager to learn new technologies, improve my problem-solving skills, and collaborate on impactful projects. I believe that technology, when applied thoughtfully, can create meaningful changes — and I am committed to being a part of that innovation. I'm currently seeking opportunities to further apply my skills, grow as a developer, and contribute to exciting and challenging projects.";

  const cardStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    backdropFilter: 'blur(0px)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 1.5,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3)",
    },
  };

  const tagStyles = {
    px: 0.8,
    py: 0.4,
    borderRadius: 0.6,
    backgroundColor: 'primary.main',
    color: 'white',
    fontSize: {xs:'0.6rem',md:'1rem'},
    fontWeight: 500,
    display: 'flex',
    alignItems: 'center',
    gap: 0.3,
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    '&:hover': {
      transform: 'scale(1.05)',
    }
  };

  const SkillCard = ({ 
    icon, 
    title, 
    subtitle, 
    items, 
    delay ,
    sx,
    itemsSx,
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    items: Array<{ name: string; emoji: string }>;
    delay: number;
    sx?: SxProps<Theme>;
    itemsSx?: SxProps<Theme>;
  }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <Card elevation={2} sx={{ height: '100%', ...cardStyles, ...sx }}>
        <CardContent sx={{ p: { xs: 1.5, md: 2 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <motion.div
                variants={iconVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: delay + 0.1, duration: 0.5, ease: "backOut" }}
              >
                {icon}
              </motion.div>
              <Typography variant="h6" color="text.secondary" fontWeight={600} sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' }, ml: 1 }}>
                {title}
              </Typography>
            </Box>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1, opacity: 0.8, fontSize: { xs: '0.7rem', md: '0.9rem' } }}>
              {subtitle}
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, md: 0.5 }, ...itemsSx }}>
              {items.slice(0, 4).map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: delay + 0.2 + index * 0.1 }}
                >
                  <Box sx={tagStyles}>
                    <span>{item.emoji}</span>
                    {item.name}
                  </Box>
                </motion.div>
              ))}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </motion.div>
  );
  const DescriptionCard = ({ delay }: { delay: number }) => (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
    >
      <Card elevation={2} sx={{ ...cardStyles,mb:{xs:1,md:0} }}>
        <CardContent sx={{ p: { xs: 1, sm: 2 }, height: '100%', display: 'flex', flexDirection: 'column',justifyContent: 'space-between',minHeight: {md:'600px'} }}>
         <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb:{xs:0,md:1} }}>
            <motion.div
              variants={iconVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: delay + 0.1, duration: 0.5, ease: "backOut" }}
            >
              <PsychologyIcon sx={{ color: 'secondary.main', fontSize: { xs: 24, sm: 28 } }} />
            </motion.div>
            <Typography variant="h6" color="text.secondary" fontWeight={600} sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' }, ml: 1 }}>
              Know Me Better
            </Typography>
          </Box>
          <Typography variant="body1" color="text.secondary" sx={{ 
            lineHeight: 1.6, 
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '1rem' },
            textAlign: { xs: 'justify', md: 'left' },
            flex: 1,
            mb: {xs:0, md:2}
          }}>
            {description}
          </Typography>
          </Box>

          <Box sx={{ display: { xs: 'none', md: 'block'} }}>

          <SkillCard
              icon={<EmojiEventsIcon sx={{ color: 'secondary.main', fontSize: 20}} />}
              title="What Drives Me"
              subtitle="Core values & motivations"
              items={motivations}
              delay={0.4}
              itemsSx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:1 }}
              sx={{elevation:0}}
            />
            </Box>
        </CardContent>
      </Card>
    </motion.div>
  );

  return (
    <Box id="about" sx={{ minHeight: "auto", display: "flex", justifyContent: "center", pt: { xs: 6, md: 16 } }}>
      <motion.div
        ref={containerAnimation.ref}
        initial={containerAnimation.initial}
        animate={containerAnimation.animate}
        transition={containerAnimation.transition}
      >
        <Box sx={{ mx: { xs: 1, sm: 2, lg: '24rem' } }}>
          <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
            <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{ fontSize: { xs: '1.75rem', md: '2.125rem' } }}>
              About Me
            </Typography>
            <Box sx={{ height: 4, backgroundColor: "secondary.main", borderRadius: 4, maxWidth: 170, margin: "0px auto 0 auto" }} />
          </Box>

          {/* Mobile Layout */}
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <DescriptionCard delay={0.1} />
            <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
              <SkillCard
                icon={<PsychologyIcon sx={{ color: 'secondary.main', fontSize: { xs: 18, sm: 20 }, mr: 1 }} />}
                title="Soft Skills"
                subtitle="Interpersonal expertise"
                items={softSkills}
                delay={0.2}
              />
              <SkillCard
                icon={<EmojiEventsIcon sx={{ color: 'secondary.main', fontSize: { xs: 18, sm: 20 }, mr: 1 }} />}
                title="What Drives Me"
                subtitle="Core values & motivations"
                items={motivations}
                delay={0.4}
              />
            </Box>
          </Box>

          {/* Desktop Layout */}
          <Box 
            sx={{ 
              display: { xs: 'none', md: 'grid' }, 
              gridTemplateColumns: 'repeat(3, 1fr)',
              gridAutoRows: 'minmax(auto, 1fr)',
              gap: 2,
              mt: 4,
              '& > *:nth-of-type(1)': { gridColumn: '1', gridRow: '1 / 3' },
              '& > *:nth-of-type(2)': { gridColumn: '2 / 4', gridRow: '1 / 5' },
              '& > *:nth-of-type(3)': { gridColumn: '1', gridRow: '3 / 5' },
              // '& > *:nth-of-type(4)': { gridColumn: '2 / 4', gridRow: '4' }
            }}
          >
            {/* Profile Image Card */}
            <motion.div
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <Card elevation={2} sx={{ height: '100%', ...cardStyles, overflow: 'hidden' }}>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/src/assets/images/About.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                />
              </Card>
            </motion.div>

            <DescriptionCard delay={0.1} />

            <SkillCard
              icon={<PsychologyIcon sx={{ color: 'secondary.main', fontSize: 20 }} />}
              title="Soft Skills"
              subtitle="Interpersonal expertise"
              items={softSkills}
              delay={0.2} 
              itemsSx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:3, }}
            
            />


          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default About;