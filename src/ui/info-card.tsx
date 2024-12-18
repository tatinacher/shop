import { Card, Typography } from "@mui/material";

interface InfoCardProps {
  icon?: React.ReactNode;
  description: string;
  title: string;
  isDark?: boolean;
}

export const InfoCard = ({
  title,
  description,
  icon,
  isDark,
}: InfoCardProps) => {
  return (
    <Card
      sx={{
        width: 345,
        height: 345,
        position: "relative",
        boxShadow: 0,
        border: "1px solid",
        borderColor: "transparent",
        backgroundColor: "secondary.light",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "15px",
        padding: "20px",
        boxSizing: "border-box",
        textAlign: "center",
      }}
    >
      <div style={{ filter: isDark ? "invert(1)" : "" }}>{icon}</div>
      <Typography
        variant="h5"
        sx={{
          margin: "20px 0 5px",
          letterSpacing: "1px",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ letterSpacing: "2px" }}>{description}</Typography>
    </Card>
  );
};
