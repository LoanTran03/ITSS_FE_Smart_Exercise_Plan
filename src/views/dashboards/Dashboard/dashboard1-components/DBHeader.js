import React from "react";
import { Box, Typography, IconButton } from "@mui/material";
import HouseIcon from '@mui/icons-material/House';  // Import House icon

const DBHeader = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        marginBottom: "20px",  // Khoảng cách giữa header và phần dưới
      }}
    >
      <IconButton>
        <HouseIcon sx={{ fontSize: 30 }} />
      </IconButton>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          marginLeft: "10px",  // Khoảng cách giữa icon và text
        }}
      >
        Dashboard
      </Typography>
    </Box>
  );
};

export default DBHeader;
