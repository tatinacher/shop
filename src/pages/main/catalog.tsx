import { Box, Button, Grid2 as Grid, Typography } from "@mui/material";
import { ItemCard } from "../../ui/card";

const catalog = [
  {
    name: "Chair",
    image: "./chair-image.webp",
    tag: "Best seller",
    color: 3,
    price: 120,
  },
  {
    name: "Lamp",
    image: "./lamp-1.webp",
    tag: "Best seller",
    color: 5,
    price: 50,
  },
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
    name: "Chair",
    image: "./chair-2.webp",
    tag: "Best price",
    color: 15,
    price: 40,
  },
  {
    name: "Lamp",
    image: "./lamp-3.webp",
    tag: "Top rated",
    color: 3,
    price: 120,
  },
];

export function Catalog() {
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
          paddingBottom: "20px",
        }}
      >
        <Typography variant="h1">Collection</Typography>
        <Button
          variant="outlined"
          sx={{ color: "primary.light", borderColor: "primary.light" }}
        >
          See all collection
        </Button>
      </Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 1, sm: 2, md: 3 }}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          {catalog.map((card) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }}>
              <ItemCard {...card} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
