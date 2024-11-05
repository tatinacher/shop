import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useState } from "react";
import { BackgroundBox } from "../../ui/background-box";
import { TypographyHeader } from "../../ui/typography";

export function SearchDisplayBlock() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };
  return (
    <BackgroundBox image={"./3.png"}>
      <div style={{ marginLeft: "50px" }}>
        <TypographyHeader>FURNITURE FOR FUTURE</TypographyHeader>
      </div>
      <Box
        sx={{
          margin: "30px",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "secondary.main",
          display: "flex",
          flexDirection: {
            xs: "column",
            sm: "row",
          },
          gap: "10px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" size="small">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" size="small">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" size="small">
            Age
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
            size="small"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          size="small"
          sx={{
            boxShadow: 0,
            padding: "0 15px",
            boxSizing: "content-box",
            backgroundColor: "primary.main",
            color: "primary.contrastText",
          }}
        >
          Search
        </Button>
      </Box>
    </BackgroundBox>
  );
}
