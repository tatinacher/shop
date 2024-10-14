import { useEffect, useState } from "react";
import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

import { Catalog } from "../../features/catalog";
import { CatalogItem } from "../../app/data";

interface CatalogPageProps {
  data: CatalogItem[];
}

export function CatalogPage({ data }: CatalogPageProps) {
  const [catalog, setCatalog] = useState(data);
  const [sort, setSort] = useState("");

  console.log(sort, [...catalog]);

  const handleChange = (event: SelectChangeEvent<string>) => {
    setSort(event.target.value);
  };

  useEffect(() => {
    if (sort === "high") {
      const sortedCatalog = data.sort((a, b) => a.price - b.price);
      setCatalog([...sortedCatalog]);
    } else if (sort === "low") {
      const sortedCatalog = data.sort((a, b) => b.price - a.price);
      setCatalog([...sortedCatalog]);
    }
  }, [sort, data]);

  return (
    <Box sx={{ margin: "0 30px" }}>
      <Container sx={{ padding: "120px 0" }}>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <FormControl sx={{ width: "300px" }}>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value={"low"}>Price: Low-High</MenuItem>
              <MenuItem value={"high"}>Price: High-Low</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Catalog catalog={catalog} />
      </Container>
    </Box>
  );
}
