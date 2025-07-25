import React from "react";
import { Box, Typography, Chip } from "@mui/material";

// Define props interface
interface TitleHeaderProps {
  title: string;
  sub: string;
}

const TitleHeader: React.FC<TitleHeaderProps> = ({ title, sub }) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <Chip
        label={sub}
        color="secondary"
        variant="outlined"
        sx={{
          fontSize: "0.9rem",
          px: 2,
          py: 1,
          borderRadius: 2,
          fontWeight: 500,
        }}
      />

      <Typography
        variant="h3"
        align="center"
        sx={{
          fontWeight: 600,
          fontSize: {
            xs: "1rem", // Mobile
            md: "1rem", // Tablet
            lg: "2rem", // Desktop
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default TitleHeader;
