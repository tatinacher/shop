import { Catalog } from "../../features/catalog/index";

import { catalog } from "../../app/data";
import { Box, Typography, Button } from "@mui/material";

export function PreviewCatalog() {
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
      <Catalog catalog={catalog} />
    </div>
  );
}
