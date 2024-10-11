import { Container } from "@mui/material";
import { Catalog } from "./catalog";
import { SearchDisplayBlock } from "./search-block";
import { Connect } from "./connect";

export const MainPage = () => {
  return (
    <Container>
      <SearchDisplayBlock />
      <Catalog />
      <Connect />
    </Container>
  );
};
