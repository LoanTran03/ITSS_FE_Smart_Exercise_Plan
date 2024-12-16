import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { PieChart, Pie, Cell, Legend, Text } from "recharts";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics"; // Icon nhảy dây
import PoolIcon from "@mui/icons-material/Pool"; // Icon bơi lội

const data = [
  { name: "Complete", value: 80, color: "#6a5acd" },
  { name: "Not complete", value: 20, color: "#ff1493" },
];

const RADIAN = Math.PI / 180;

const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <Text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </Text>
  );
};

const Statistics = () => {
  return (
    <Box sx={{ p: 3 }}>
      {/* Tiêu đề */}
      <Typography variant="h4" gutterBottom>
        Statistics
      </Typography>

      {/* Biểu đồ thống kê */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Progress now: Weight loss
        </Typography>
        <Grid container justifyContent="center">
          <PieChart width={400} height={250}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label={renderCustomLabel}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </Grid>
      </Paper>

      {/* Danh sách bài tập mới nhất */}
      <Paper elevation={3} sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Latest exercises
        </Typography>
        <Grid container spacing={2} justifyContent="center">
          {Array.from({ length: 8 }).map((_, index) => (
            <Grid item key={index}>
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#e0e0e0",
                }}
              >
                {index === 0 ? (
                  <SportsGymnasticsIcon fontSize="large" color="primary" />
                ) : (
                  <PoolIcon fontSize="large" color="primary" />
                )}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>

      {/* Đánh giá và bình luận */}
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Review and comment
        </Typography>
        <ul>
          <li>You have completed the set goals relatively well.</li>
          <li>Try to cycle and jogging more.</li>
          <li>Make more use of free time.</li>
        </ul>
      </Paper>
    </Box>
  );
};

export default Statistics;
