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
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAge(event.target.value);
  };
  return (
    <Box
      sx={{
        height: "600px",
        backgroundImage: 'url("./back4.webp")',
        backgroundPosition: "center center",
        backgroundSize: "100%",
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
          fontSize: "130px",
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
          gap: "10px",
        }}
      >
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          sx={{
            boxShadow: 0,
            padding: "0 15px",
            boxSizing: "content-box",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};
