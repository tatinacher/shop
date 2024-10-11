import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";

export const MainPage = () => {
  return (
    <div>
      <SearchDisplayBlock />
    </div>
  );
};

function SearchDisplayBlock() {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        height: {
          xs: "400px",
          sm: "400px",
          md: "500px",
          lg: "600px",
        },
        backgroundImage: 'url("./back4.webp")',
        backgroundPosition: "center center",
        backgroundSize: {
          xs: "auto 100%",
          sm: "100%",
        },
        backgroundRepeat: "no-repeat",
        margin: "30px 0",
        borderRadius: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontFamily: "sans-serif",
          fontWeight: 800,
          opacity: 0.7,
          padding: "30px",
          maxWidth: "900px",
          fontSize: {
            xs: "30px",
            sm: "70px",
            md: "100px",
            lg: "130px",
          },
        }}
      >
        FURNITURE FOR FUTURE
      </Typography>
      <Box
        sx={{
          margin: "30px",
          padding: "30px",
          borderRadius: "15px",
          backgroundColor: "primary.main",
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
            backgroundColor: "secondary.main",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
