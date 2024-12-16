import React from "react";

import {
  Card,
  CardContent,
  Divider,
  Box,
  Typography,
  Chip,
  LinearProgress,
} from "@mui/material";

const KPICard = (props) => {
  const getChipColor = (chiptitle) => {
    switch (chiptitle) {
      case "Active":
        return "success.main";
      case "Set active":
        return "grey.500";
      default:
        return "grey.500";
    }
  };

  return (
    <Card
      variant="outlined"
      sx={{
        p: 0,
        width: "100%",
      }}
    >
      {/* Header */}
      <Box p={2} display="flex" alignItems="center" backgroundColor="#f4f4f8">
        <Box>
          <Typography variant="h5">{props.title}</Typography>
        </Box>

        {/* Chip nút Set active / Active */}
        {props.chiptitle && (
          <Chip
            label={props.chiptitle}
            size="small"
            onClick={props.onChipClick}
            sx={{
              ml: "auto",
              fontSize: "12px",
              fontWeight: "500",
              color: "white",
              cursor: "pointer",
              backgroundColor: getChipColor(props.chiptitle),
            }}
          />
        )}
      </Box>

      {/* Divider */}
      <Divider />

      {/* Nội dung */}
      <CardContent>
        {/* Hiển thị số % tiến độ */}
        <Typography
          variant="body2"
          sx={{
            mb: 1,
            color: "text.secondary",
            fontSize: "14px",
          }}
        >
          {props.progress || 0}% {/* Hiển thị giá trị tiến độ */}
        </Typography>

        {/* Thanh tiến độ */}
        <LinearProgress
          variant="determinate"
          value={props.progress || 0}
          sx={{
            height: 8,
            borderRadius: 4,
            backgroundColor: "#e0e0e0",
            "& .MuiLinearProgress-bar": {
              backgroundColor: "primary.main",
            },
            mb: 2,
          }}
        />

        {/* Nội dung con */}
        {props.children}
      </CardContent>
    </Card>
  );
};

export default KPICard;
