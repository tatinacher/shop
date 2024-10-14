import { Box, Grid2 as Grid } from "@mui/material";

import { ItemCard } from "../../ui/card";
import { CatalogItem } from "../../app/data";

interface CatalogProps {
  catalog: CatalogItem[];
}

export function Catalog({ catalog }: CatalogProps) {
  return (
    <Box sx={{ flexGrow: 1, marginTop: "45px" }}>
      <Grid
        container
        spacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {catalog.map((card, key) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={key}>
            <ItemCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
