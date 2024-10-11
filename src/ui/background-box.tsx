import { Box } from "@mui/material";
import React from "react";

interface BackgroundBoxProps {
  image: string;
  children: React.ReactNode;
}

export function BackgroundBox({ image, children }: BackgroundBoxProps) {
  return (
    <Box
      sx={{
        height: {
          xs: "400px",
          sm: "400px",
          md: "500px",
          lg: "600px",
        },
        backgroundImage: `url(${image})`,
        backgroundPosition: "center center",
        backgroundSize: {
          xs: "auto 100%",
          sm: "100%",
        },
        backgroundRepeat: "no-repeat",
        margin: "30px 0",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      {children}
    </Box>
  );
}
