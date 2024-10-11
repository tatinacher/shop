import { Typography } from "@mui/material";

interface TypographyHeaderProps {
  children: React.ReactNode;
}

export function TypographyHeader({ children }: TypographyHeaderProps) {
  return (
    <Typography
      variant="h1"
      sx={{
        color: "white",
        fontFamily: "sans-serif",
        fontWeight: 800,
        opacity: 0.7,
        padding: "30px",
        maxWidth: "900px",
        fontSize: {
          xs: "30px",
          sm: "70px",
          md: "100px",
          lg: "130px",
        },
      }}
    >
      {children}
    </Typography>
  );
}
