import {
  Avatar,
  Box,
  Card,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

interface ItemCardProps {
  color: number;
  image: string;
  name: string;
  price: number;
  tag: string;
}

export const ItemCard = ({ price, name, image, color, tag }: ItemCardProps) => {
  const colorText = color > 1 ? "colors" : "color";
  return (
    <Card
      sx={{
        position: "relative",
        boxShadow: 0,
        border: "1px solid",
        borderColor: "primary.main",
        backgroundColor: "primary.main",
      }}
    >
      <Chip
        label={tag}
        variant="outlined"
        sx={{
          position: "absolute",
          top: "10px",
          left: "10px",
          backgroundColor: "#fff",
          border: 0,
        }}
      />
      <Chip
        label={`${color} ${colorText}`}
        variant="outlined"
        sx={{
          position: "absolute",
          top: "10px",
          right: "10px",
          backgroundColor: "#fff",
          border: 0,
        }}
      />
      <CardMedia
        sx={{
          height: 190,
          // borderRadius: "5px",
          backgroundSize: "100% auto",
        }}
        image={image}
        title={name}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ padding: "20px" }}>
          <Typography>{name}</Typography>
          <Typography>${price}</Typography>
        </Box>
        <IconButton sx={{ height: "56px" }}>
          <Avatar sx={{ backgroundColor: "secondary.light" }}>
            <ShoppingBagIcon />
          </Avatar>
        </IconButton>
      </Box>
    </Card>
  );
};
