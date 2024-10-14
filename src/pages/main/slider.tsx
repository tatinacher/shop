import { Box, Button, Paper, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

interface ItemProps {
  item: {
    image: string;
    name: string;
    description: string;
  };
}

export function SliderBlock() {
  const items = [
    {
      image: "./sl.png",
      name: "Elevate Your Space with Timeless Furniture",
      description:
        "Explore our collection of stylish, comfortable furniture. Perfect for any room, designed to inspire and last.",
    },
    {
      image: "./sl2.png",
      name: "Create Your Perfect Space",
      description:
        "Shop elegant and versatile furniture that adds style and comfort to any room. Designed to fit your life.",
    },
  ];
  return (
    <Box>
      <Carousel sx={{ boxShadow: 0 }}>
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </Box>
  );
}

function Item({ item }: ItemProps) {
  return (
    <Paper
      sx={{
        display: "flex",
        boxShadow: "none",
        backgroundColor: "primary.main",
        borderRadius: "30px",
        height: {
          xs: "400px",
          sm: "400px",
          md: "500px",
          lg: "600px",
        },
      }}
    >
      <Box component="img" sx={{ borderRadius: "30px" }} src={item.image} />
      <Box
        sx={{
          padding: "80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            paddingBottom: "50px",
            textAlign: "center",
          }}
        >
          {item.name}
        </Typography>
        <Typography variant="body2">{item.description}</Typography>
        <Button
          variant="outlined"
          sx={{
            color: "primary.light",
            borderColor: "primary.light",
            marginTop: "60px",
          }}
        >
          Check it out!
        </Button>
      </Box>
    </Paper>
  );
}
