import { Box, Card, CardContent, Typography } from "@mui/material";
import PsychologyIcon from '@mui/icons-material/Psychology';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import type{ SxProps, Theme } from "@mui/material/styles";

const About: React.FC = () => {
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

  const description = "Hello, I’m Rajesh Niure, a passionate Web Developer and Computer Science student at Prime College. I have a strong focus on frontend development, specializing in React to build interactive, responsive, and user-friendly interfaces. Alongside this, I work with Django to develop secure backends and integrate APIs, making me capable of delivering complete full-stack solutions. My technical foundation also includes Python, JavaScript, and MySQL, which support my ability to create efficient and scalable applications.I love turning ideas into functional and visually appealing web experiences, while also ensuring that the underlying architecture is clean and reliable. With a continuous drive to learn new technologies and refine my problem-solving skills, I thrive in collaborative environments where creativity meets innovation.I believe in building applications that truly enhance user experiences, and I’m eager to contribute my skills to impactful and challenging projects while continuing to grow as a developer.";

  const cardStyles = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: 1.5,
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    "&:hover": {
      transform: "translateY(-8px)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
    }
  };

  const tagStyles = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 0.5,
    px: { xs: 0.7, md: 1 },
    py: { xs: 0.3, md: 0.5 },
    borderRadius: 1,
    fontSize: { xs: '0.6rem', sm: '0.7rem', md: '0.75rem' },
    fontWeight: 500,
    background: 'rgba(255, 255, 255, 0.08)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: 'text.secondary',
    transition: 'transform 0.2s ease',
    '&:hover': {
      background: 'rgba(255, 255, 255, 0.12)',
      transform: 'translateY(-1px)'
    }
  };

  const SkillCard = ({
    icon,
    title,
    subtitle,
    items,
    sx,
    itemsSx,
  }: {
    icon: React.ReactNode;
    title: string;
    subtitle: string;
    items: Array<{ name: string; emoji: string }>;
    sx?: SxProps<Theme>;
    itemsSx?: SxProps<Theme>;
  }) => (
    <Card elevation={2} sx={{ ...cardStyles, ...sx }}>
      <CardContent sx={{ p: { xs: 1.5, md: 2 }, display: 'flex', flexDirection: 'column' }}>
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
            {icon}
            <Typography variant="h6" color="text.secondary" fontWeight={600} sx={{ fontSize: { xs: '0.9rem', md: '1.25rem' }, ml: 1 }}>
              {title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1, opacity: 0.8, fontSize: { xs: '0.7rem', md: '0.9rem' } }}>
            {subtitle}
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 0.5, md: 0.5 }, ...itemsSx }}>
            {items.slice(0, 4).map((item) => (
              <Box key={item.name} sx={tagStyles}>
                <span>{item.emoji}</span>
                {item.name}
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );

  const DescriptionCard = () => (
    <Card elevation={2} sx={{ ...cardStyles, mb:{xs:1,md:0} }}>
      <CardContent sx={{ p: { xs: 1, sm: 2 }, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: {md:'600px'} }}>
       <Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb:{xs:0,md:1} }}>
          <PsychologyIcon sx={{ color: 'secondary.main', fontSize: { xs: 24, sm: 28 } }} />
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
            itemsSx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:1 }}
            sx={{elevation:0}}
          />
          </Box>
      </CardContent>
    </Card>
  );

  return (
    <Box id="about" sx={{ display: "flex", justifyContent: "center", pt: { xs: 6, md: 16 } }}>
      <Box sx={{ mx: { xs: 1, sm: 2, lg: '24rem' } }}>
        <Box sx={{ textAlign: "center", mb: { xs: 3, md: 4 } }}>
          <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{ fontSize: { xs: '1.75rem', md: '2rem' } }}>
            About Me
          </Typography>
          <Box sx={{ height: 4, backgroundColor: "secondary.main", borderRadius: 4, maxWidth: 150, mx: "auto" }} />
        </Box>


        <Box sx={{ display: { xs: 'block', md: 'none' } }}>
          <DescriptionCard />
          <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2 }}>
            <SkillCard
              icon={<PsychologyIcon sx={{ color: 'secondary.main', fontSize: { xs: 18, sm: 20 }, mr: 1 }} />}
              title="Soft Skills"
              subtitle="Interpersonal expertise"
              items={softSkills}
            />
            <SkillCard
              icon={<EmojiEventsIcon sx={{ color: 'secondary.main', fontSize: { xs: 18, sm: 20 }, mr: 1 }} />}
              title="What Drives Me"
              subtitle="Core values & motivations"
              items={motivations}
            />
          </Box>
        </Box>


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
          }}
        >

          <Card elevation={2} sx={{ ...cardStyles, overflow: 'hidden' }}>
            <Box
              sx={{
                width: '100%',
                height: '100%',
                backgroundImage: 'url(/assets/images/About.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            
              }}
            />
          </Card>

          <DescriptionCard />

          <SkillCard
            icon={<PsychologyIcon sx={{ color: 'secondary.main', fontSize: 20 }} />}
            title="Soft Skills"
            subtitle="Interpersonal expertise"
            items={softSkills}
            itemsSx={{ display:'flex', flexDirection:'column', alignItems:'flex-start', gap:3, }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default About;