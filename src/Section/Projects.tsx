import { useRef, useState } from "react";
import {
  Box,
  Typography,
  Button,

  Grid,
} from "@mui/material";

interface ItemType {
  id: number;
  title: string;
  img: string;
  desc: string;
}

const items: ItemType[] = [
  {
    id: 1,
    title: "Food Commerce",
    img: "https://images.pexels.com/photos/18073372/pexels-photo-18073372/free-photo-of-young-man-sitting-in-a-car-on-a-night-street.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/18023772/pexels-photo-18023772/free-photo-of-close-up-of-a-person-holding-a-wristwatch.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum ",
  },
  {
    id: 3,
    title: "Vanilla JS App",
    img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit fakdfadsf  aiewifwo wowowow fhvnvwoov whvwowvovwnovw",
  },
  {
    id: 4,
    title: "Music App",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit...",
  },
];

const Single: React.FC<{ item: ItemType }> = ({ item }) => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <Box
      ref={ref}
      sx={{
        width: {xs:'92%',md:'100%'},
        display: 'flex',
        justifyContent: 'center',
        border: { xs: "2px solid", md: "none" },
        borderColor: { xs: "primary.main", md: "transparent" },
        borderRadius: { xs: 2, md: 0 },
        filter: "brightness(1.08)",
        overflow: 'hidden',
        zIndex: 2,
        boxShadow: {xs:"0 8px 32px 0 rgba(110, 87, 224, 0.25), 0 1.5px 8px 0 rgba(0,0,0,0.10)", md: "none" }, 
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '100%',
          mx: { xs: 0, lg: '16rem' },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 8 }}
          alignItems="center"
          justifyContent="center"
        >
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Box
              sx={{
                width: '100%',
                maxWidth: 620,
                aspectRatio: '4/3',
                mx: 'auto',
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
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              px={{xs:1,md:0}}
              display="flex"
              flexDirection="column"
              gap={{ xs: 2, md: 4 }}
              sx={{
                alignItems: { xs: 'center', md: 'flex-start' },
                textAlign: { xs: 'center', md: 'left' },
                width: {xs:'100%',md:'94%'},
                
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
                variant="contained"
                sx={{
                width: { xs: '35%', sm: 150 },
                 p:{xs:0,md:1},
                  borderRadius:{xs:0.4,md: 1},
                  backgroundColor: 'secondary.main',
                  color: 'white',
                  alignSelf: { xs: 'center', md: 'flex-start' },
                  fontWeight: 600,
                  fontSize: '1rem',
                  boxShadow: 2,
                  transition: 'background 0.2s, transform 0.2s',
                  mb:{xs:1,md:0},
                  '&:hover': {
                    backgroundColor: 'secondary.dark',
                    transform: 'translateY(-2px) scale(1.04)',
                  },
                }}
              >
                View
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
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        pt: { xs: 8, md: 10 },
        width: '100%',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: '100%', mx: { lg: '16rem' }, textAlign: 'center', mb: { xs: 6, md: 8 } }}>
        <Typography variant="h4" color="text.secondary" fontWeight={700}>
          Projects
        </Typography>
        <Box sx={{ height: 8, backgroundColor: 'secondary.main', borderRadius: 4, maxWidth: 150, margin: '0px auto 0 auto' }} />
      </Box>
      <Single item={item} />
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
