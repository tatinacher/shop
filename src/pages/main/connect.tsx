import { Box, Button, Card, Input, Typography } from "@mui/material";
import { BackgroundBox } from "../../ui/background-box";
import { TypographyHeader } from "../../ui/typography";

export function Connect() {
  return (
    <BackgroundBox image={"./back22.webp"}>
      <TypographyHeader>Find new ideas</TypographyHeader>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          marginRight: { xs: 0, sm: "200px" },
          marginBottom: "100px",
        }}
      >
        <Box
          sx={{
            maxWidth: "320px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <Card sx={{ padding: "15px", boxShadow: 0 }}>
            <Typography variant="subtitle1">
              Subscribe to our Newsletter and inspire yourself
            </Typography>
          </Card>
          <Card
            sx={{
              padding: "15px",
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <Typography variant="body2">
              Get all the news from our store. Just subscribe and get all the
              updates instantly
            </Typography>
            <Box sx={{ display: "flex", gap: "10px", boxShadow: 0 }}>
              <Input type="email" placeholder="Enter Your Email" />
              <Button
                size="medium"
                sx={{
                  boxShadow: 0,
                  boxSizing: "content-box",
                  backgroundColor: "secondary.main",
                }}
              >
                Subscribe!
              </Button>
            </Box>
          </Card>
        </Box>
      </Box>
    </BackgroundBox>
  );
}
