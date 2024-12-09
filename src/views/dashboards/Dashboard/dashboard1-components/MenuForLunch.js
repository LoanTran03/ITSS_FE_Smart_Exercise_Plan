import React from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import RestaurantIcon from '@mui/icons-material/Restaurant';

const MenuForLunch = () => {
  const lunchItems = [
    { title: "Chicken Salad" },
    { title: "Grilled Salmon" },
    { title: "Vegetable Stir Fry" },
    { title: "Pasta Carbonara" },
    { title: "Beef Tacos" },
    { title: "Caesar Salad" },
    { title: "Fruit Smoothie" },
    { title: "Grilled Chicken Sandwich" },
  ];

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%",
        marginY: 3,
        paddingBottom: 0,
        overflow: "hidden",
        boxShadow: 3,
        borderRadius: 2,
      }}
    >
      <CardContent
        sx={{
          paddingBottom: "16px !important",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              color: "primary.main",
            }}
          >
            Menu for Lunch
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
          }}
        >
          {lunchItems.map((item, index) => (
            <Box
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "16px",
                width: "140px",
                textAlign: "center",
              }}
            >
              <Button
                variant="contained"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px",
                  backgroundColor: "primary.main",
                  "&:hover": {
                    backgroundColor: "primary.dark",
                  },
                  marginBottom: "8px",
                  width: "100%",
                  borderRadius: 1,
                }}
                startIcon={<RestaurantIcon sx={{ fontSize: 40, color: "white" }} />}
              />
              <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "8px" }}>
                {item.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default MenuForLunch;
