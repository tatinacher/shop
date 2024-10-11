import { Container } from "@mui/material";
import { Catalog } from "./catalog";
import { SearchDisplayBlock } from "./search-block";

export const MainPage = () => {
  return (
    <Container>
      <SearchDisplayBlock />
      <Catalog />
    </Container>
  );
};
