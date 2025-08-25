import { useState } from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import {
  Box,
  Typography,
  Button,
  Grid,

} from "@mui/material";
import { Link } from "react-scroll";

interface ItemType {
  id: number;
  title: string;
  img: string;
  desc: string;
  url: string;
}

const items: ItemType[] = [
  {
    id: 1,
    title: "Rock Bazaar",
    img: "/assets/projects/Rockbazaar.png",
    desc: " RockBazaar is a modern e-commerce web application built for fans of rock and pop music. It offers a curated collection of band-inspired clothing and merchandise with intuitive filtering by artist, genre, and category. The platform features a clean UI, responsive design, and secure checkout. Developed using  Django , RockBazaar demonstrates my skills in full-stack development, dynamic content management, and user-centric design.",
    url: "https://github.com/rajeshniure/RockBazaar--Django",
  },
  {
    id: 2,
    title: "Advance Dashboard",
    img: "/assets/projects/AdvanceDashboard.png",
    desc: "The Advanced Dashboard is a sleek, responsive admin interface designed to visualize data and manage content with ease. Built using React and Material UI, it features interactive cards, smooth animations, drag-and-drop functionality, and dynamic data rendering. This project highlights my ability to create visually appealing, highly functional UIs with a strong focus on user experience and component reusability.",
    url: "https://github.com/rajeshniure/Advance-Dashboard",
  },
  {
    id: 3,
    title: "Snap Note",
    img: "/assets/projects/SnapNote.jpg",
    desc: "Snap Note is a tweet-style web application built with Django, allowing users to share short notes alongside images. Authenticated users can post image-based updates with brief descriptions, creating a clean, scrollable feed. The project emphasizes simplicity, user interaction, and a dynamic image-posting experience.",
    url: "https://github.com/rajeshniure/SnapNote-Django",
  },
  {
    id: 4,
    title: "Food Commerce",
    img: "/assets/projects/Foodcommerce.png",
    desc: "A basic e-commerce web app for ordering delicious food items like cakes, muffins, and more. Built using ReactJS and styled with Tailwind CSS, it includes essential features like Add to Cart, Cart Quantity Increment, and Order Confirmation.",
    url: "https://github.com/rajeshniure/FoodCommerce",
  },
  {
    id: 5,
    title: "Tip Splitter",
    img: "/assets/projects/tipsplitter.png",
    desc: "A responsive tip calculator built with React,TypeScript, and Material UI. Enter the bill, select or input a custom tip percentage, and split the total evenly among people. Clean UI, mobile-friendly, and easy to use.",
    url: "https://github.com/rajeshniure/Tip-Splitter",
  },
    {
    id: 6,
    title: "Clash of Categories",
    img: "/assets/projects/clashOfCategories.png",
    desc: "Clash of Categories is a web-based platform designed to create, organize, and manage category-based challenge games. It allows admins to define custom categories, add rounds of challenges, and streamline gameplay for participants. Built with Django on the backend and a JavaScript-powered frontend, the system focuses on clean structure, usability, and efficient game flow management.",
    url: "https://github.com/rajeshniure/Clash-of-Categories",
  },
];

const Single: React.FC<{ item: ItemType; index: number }> = ({ item }) => {

  return (
    <Box
      sx={{
        width: {xs:'92%',md:'100%'},
        display: 'flex',
        justifyContent: 'center',
        border: { xs: "2px solid", md: "none" },
        borderColor: { xs: "gray" },
        borderRadius: { xs: 1, md: 0 },
        filter: "brightness(1.08)",
        overflow: 'hidden',
        // boxShadow: {xs:"0 8px 32px 0 rgba(110, 87, 224, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)", md: "none" }, 
        
      }}
    >
      <Box
        sx={{
          width: '100%',
          mx: { xs: 0, lg: '10.5rem', xl: '18rem' },
        }}
      >
        <Grid
          container
          spacing={{ xs: 1, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="project-box">
            <Box
              sx={{
                aspectRatio: '4/3',
                boxShadow: 2,
                borderRadius: {xs:0,md:2},
                overflow: 'hidden',
                background: 'rgba(0,0,0,0.03)',
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }} className="project-box">
            <Box
              sx={{
                px: {xs:1,md:0},
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 4 },
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                width: {xs:'100%',md:'100%'},
              }}
            >
            <Typography
              variant="h3"
              sx={{ fontWeight: 700, fontSize: { xs: '2rem', sm: '2.2rem', md: '2.8rem' } }}
            >
              {item.title}
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ textAlign: 'justify', fontSize: { xs: '0.8rem', md: '1.1rem' } }}>
              {item.desc}
            </Typography>
            <Button
              href={item.url}
              variant="contained"
              sx={{
                alignSelf: 'flex-start' ,
                my: { xs: 1, md: 1 },
                px: { xs: 1.2, md: 2 },
                py: { xs: 0.5, md: 1 },
                minWidth: { xs: 'auto', sm: 170 },
                backgroundColor: 'secondary.main',
                color: 'white',
                fontWeight: {xs:500,md:700},
                textTransform: 'none',
                letterSpacing: 0.2,
                fontSize: { xs: '0.95rem', md: '1rem' },
                boxShadow: 3,
                transition: 'all 0.2s ease',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: 6,
                },
                '&:active': {
                  transform: 'translateY(0)',
                  boxShadow: 2,
                },
                display: 'flex',
                alignItems: 'center',
                '& .MuiButton-startIcon': { mr: 1 },
              }}
              startIcon={<GitHubIcon />}
            >
              Source Code
            </Button>
          </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

const Projects: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const item = items[current];
  const isFirst = current === 0;
  const isLast = current === items.length - 1;

  return (
    <Box
      id="projects"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        width: '100%',
      }}
    >
      <Box sx={{ mx: { lg: '16rem' }, textAlign: 'center', mb: { xs: 6, md: 8 } }} className="top-header">
        <Link to="projects" smooth duration={500} offset={-80} style={{ textDecoration: 'none', color: 'inherit', cursor: 'pointer' }}>
          <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{fontSize:{xs:"1.75rem",md:"2rem"}}}>
            Projects
          </Typography>
        </Link>
        <Box sx={{ height: 4, backgroundColor: 'secondary.main', borderRadius: 4, maxWidth: 160, mx: 'auto' }} />
      </Box>
      <Single item={item} index={current} />
      <Box sx={{ display: 'flex', gap: 3, mt:4 }}>
        <Button variant="contained" sx={{ backgroundColor: 'primary.main' }} disabled={isFirst} onClick={() => setCurrent(current - 1)}>
          Prev
        </Button>
        <Button variant="contained" sx={{ backgroundColor: 'primary.main' }} disabled={isLast} onClick={() => setCurrent(current + 1)}>
          Next
        </Button>
      </Box>
      <Typography variant="caption" sx={{ mt: 2 }}>
        {current + 1} / {items.length}
      </Typography>
    </Box>
  );
};

export default Projects;
