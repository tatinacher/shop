import { Catalog } from "./catalog";
import { SearchDisplayBlock } from "./search-block";
import { Connect } from "./connect";
import { DeliveryInfo } from "./delivery-info";
import { Box, Container } from "@mui/material";
import { SliderBlock } from "./slider";

export const MainPage = () => {
  return (
    <Box sx={{ margin: "0 30px" }}>
      <SearchDisplayBlock />
      <Container sx={{ padding: "120px 0" }}>
        <Catalog />
      </Container>
      <Connect />
      <Container sx={{ padding: "120px 0" }}>
        <DeliveryInfo />
      </Container>
      <SliderBlock />
      <SearchDisplayBlock />
    </Box>
  );
};
