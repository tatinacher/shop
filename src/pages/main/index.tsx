import { Box, Container } from "@mui/material";

import { SearchDisplayBlock } from "./search-block";
import { Connect } from "./connect";
import { DeliveryInfo } from "./delivery-info";
import { SliderBlock } from "./slider";
import { Popular } from "./popular";
import { PreviewCatalog } from "./preview-catalog";

export const MainPage = () => {
  return (
    <Box sx={{ margin: "0 30px" }}>
      <SearchDisplayBlock />
      <Container sx={{ padding: "120px 0" }}>
        <PreviewCatalog />
      </Container>
      <Connect />
      <Container sx={{ padding: "120px 0" }}>
        <DeliveryInfo />
      </Container>
      <SliderBlock />
      <Container sx={{ padding: "120px 0" }}>
        <Popular />
      </Container>
    </Box>
  );
};
