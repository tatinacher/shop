import { Box, Container } from "@mui/material";

import { Catalog } from "../../features/catalog";
import { catalog } from "../../app/data";

export function CatalogPage() {
  const data = [...catalog, ...catalog, ...catalog];
  return (
    <Box sx={{ margin: "0 30px" }}>
      <Container sx={{ padding: "120px 0" }}>
        <Catalog catalog={data} />
      </Container>
    </Box>
  );
}
