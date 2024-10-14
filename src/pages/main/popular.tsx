import { Box, Button, Typography } from "@mui/material";
import { Catalog } from "../../features/catalog";

const catalog = [
  {
    name: "Lamp",
    image: "./lamp-2.webp",
    tag: "Best price",
    color: 2,
    price: 60,
  },
  {
    name: "Sofa",
    image: "./sofa-1.webp",
    tag: "Best seller",
    color: 9,
    price: 220,
  },
  {
    name: "Lamp",
    image: "./lamp-3.webp",
    tag: "Top rated",
    color: 3,
    price: 120,
  },
];

export function Popular() {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row",
          },
          justifyContent: "space-between",
          padding: "80px 0 20px",
        }}
      >
        <Typography variant="h1">Best products</Typography>
        <Button
          variant="outlined"
          sx={{ color: "primary.light", borderColor: "primary.light" }}
        >
          See all collection
        </Button>
      </Box>
      <Catalog catalog={catalog} />
    </div>
  );
}
