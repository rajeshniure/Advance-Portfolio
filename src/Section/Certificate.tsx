import { Box, Typography, Button, Paper, Grid } from "@mui/material";
import { motion, useSpring, useTransform } from "framer-motion";
import type { MouseEventHandler } from "react";

interface ItemType {
  id: number;
  img: string;
  Name: string;
  Issuer: string;
}

const items: ItemType[] = [
  {
    id: 1,
    img: "/assets/certificates/DSA Certificate.jpg",
    Name: "DSA",
    Issuer: "Programiz",
  },
  {
    id: 2,
    img: "/assets/certificates/javascript.jpg",
    Name: "JavaScript",
    Issuer: "Programiz",
  },
  {
    id: 3,
    img: "/assets/certificates/SQL.jpg",
    Name: "MySQL",
    Issuer: "Programiz",
  },
  {
    id: 4,
    img: "/assets/certificates/hackaverse.jpg",
    Name: "Hackaverse",
    Issuer: "Prime Colllege",
  },
];

const sheenSize = 500;
const cardRotation = 15;
const cardScale = 1.07;

function CertificateCard({ item }: { item: ItemType }) {
  const xPcnt = useSpring(0, { bounce: 0 });
  const yPcnt = useSpring(0, { bounce: 0 });
  const mouseX = useSpring(0, { bounce: 0 });
  const mouseY = useSpring(0, { bounce: 0 });
  const scale = useSpring(1, { bounce: 0 });

  const rotateX = useTransform(
    yPcnt,
    [-0.5, 0.5],
    [`-${cardRotation}deg`, `${cardRotation}deg`]
  );
  const rotateY = useTransform(
    xPcnt,
    [-0.5, 0.5],
    [`${cardRotation}deg`, `-${cardRotation}deg`]
  );

  const sheenX = useTransform(() => mouseX.get() - sheenSize / 2);
  const sheenY = useTransform(() => mouseY.get() - sheenSize / 2);

  const getMousePosition = (e: React.MouseEvent<Element, MouseEvent>) => {
    const { width, height, left, top } = e.currentTarget.getBoundingClientRect();
    const currentMouseX = e.clientX - left;
    const currentMouseY = e.clientY - top;
    return {
      currentMouseX,
      currentMouseY,
      containerWidth: width,
      containerHeight: height,
    };
  };

  const handleMouseMove: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY, containerWidth, containerHeight } = getMousePosition(e);
    xPcnt.set(currentMouseX / containerWidth - 0.5);
    yPcnt.set(currentMouseY / containerHeight - 0.5);
    mouseX.set(currentMouseX);
    mouseY.set(currentMouseY);
  };

  const handleMouseEnter: MouseEventHandler = (e) => {
    const { currentMouseX, currentMouseY } = getMousePosition(e);
    mouseX.jump(currentMouseX);
    mouseY.jump(currentMouseY);
    scale.set(cardScale);
  };

  const handleMouseLeave: MouseEventHandler = () => {
    xPcnt.set(0);
    yPcnt.set(0);
    scale.set(1);
  };

  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        transformStyle: "preserve-3d",
      }}
    >
      <Paper
        elevation={8}
        sx={{
          borderRadius: 1,
          background: "transparent",
          backdropFilter: "blur(10px)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          transition: "all 0.3s ease",
          position: "relative",
          '&:hover': {
            transform: "translateY(-5px)",
          },
        }}
      >
        <motion.div
          style={{
            height: sheenSize,
            width: sheenSize,
            position: "absolute",
            zIndex: 1,
            borderRadius: "50%",
            opacity: 0.1,
            left: sheenX,
            top: sheenY,
            pointerEvents: "none",
          }}
        />
        <CardContent item={item} />
      </Paper>
    </motion.div>
  );
}

export default function CertificateSection() {
  return (
    <Box id="certifications" sx={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      pt: {xs:8,md:10},
    }}>
      <Box  sx={{ textAlign: "center", mb: 8 }}>
        <Typography variant="h4" color="text.secondary" fontWeight={700} sx={{fontSize:{xs:"1.75rem",md:"2rem"}}}>
          Certificates
        </Typography>
        <Box
          sx={{
            height: 4,
            backgroundColor: "secondary.main",
            borderRadius: 2,
            width: 170,
            margin: "0 auto",
          }}
        />
      </Box>
      <Grid container spacing={4} sx={{
        width: {xs:"90%",md:"70%"},
      }}>
        {items.map((item) => (
          <Grid size={{ xs: 6, md: 3 }} key={item.id}>
            <CertificateCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

const CardContent: React.FC<{ item: ItemType }> = ({ item }) => {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: { xs: 100, md: 250 },
          overflow: "hidden",
        }}
      >
        <img
          src={item.img}
          alt={item.Name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
      <Box sx={{p:1, flexGrow: 1, display: "flex", flexDirection: "column",gap:1 }}>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: 600,fontSize:{xs:"1rem",md:"1.3rem"} }}>
            {item.Name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontFamily: "monospace" }}
          >
            {item.Issuer}
          </Typography>
        </Box>
        <Button
          variant="contained"
          size="small"
          sx={{
            p:0,
            py:{xs:0.3,md:0.5},
            width:{xs:"55%",md:"45%"},
            textTransform: "none",
            fontWeight:500,
            fontSize: {xs:10,md:16},
            borderRadius: {xs:"4px",md:"6px"},
            backgroundColor: "primary.main",
            '&:hover': {
              backgroundColor: "primary.dark",
            },
            
          }}
          onClick={()=>{
            window.open(item.img,"_blank");
          }}
        >
          View Certificate
        </Button>
      </Box>
    </>
  );
};
