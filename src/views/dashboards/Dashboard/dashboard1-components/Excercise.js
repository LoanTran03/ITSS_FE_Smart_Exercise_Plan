import React, { useState } from "react";
import { Card, CardContent, Typography, Box, Button } from "@mui/material";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter'; // Nhảy dây
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer'; // Bóng đá
import TerrainIcon from '@mui/icons-material/Terrain'; // Leo núi
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball'; // Bóng rổ
import PoolIcon from '@mui/icons-material/Pool'; // Bơi lội
import SportsIcon from '@mui/icons-material/Sports'; // Cầu lông
import DirectionsRunIcon from '@mui/icons-material/DirectionsRun'; // Yoga
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople'; // Khiêu vũ

const Excercise = () => {
  const seriesDescription = [
    { title: "Jump Rope" },
    { title: "Soccer" },
    { title: "Climbing" },
    { title: "Basketball" },
    { title: "Swimming" },
    { title: "Badminton" },
    { title: "Yoga" },
    { title: "Dancing" },
  ];

  // Các icon thay thế cho môn thể thao
  const seriesData = [
    FitnessCenterIcon,
    SportsSoccerIcon,
    TerrainIcon,  // Sử dụng TerrainIcon cho Leo núi
    SportsBasketballIcon,
    PoolIcon,
    SportsIcon,
    DirectionsRunIcon,
    EmojiPeopleIcon
  ];

  const [selectedSports, setSelectedSports] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

  return (
    <Card
      variant="outlined"
      sx={{
        width: "100%", // Làm cho card chiếm hết chiều rộng để có thể hiển thị nhiều môn thể thao
        marginY: 3,
        paddingBottom: 0,
        overflow: "hidden",  // Đảm bảo các phần tử không bị tràn
        boxShadow: 3, // Tạo bóng mờ nhẹ cho card
        borderRadius: 2, // Bo góc card
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
            justifyContent: "center", // Căn giữa tiêu đề
            marginBottom: "20px", // Khoảng cách dưới tiêu đề
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
            Let's do Exercise !!!
          </Typography>
        </Box>

        <Box
          sx={{
            marginTop: "20px",
            display: "flex",
            flexWrap: "wrap", // Các môn thể thao sẽ tự động xuống dòng nếu cần thiết
            justifyContent: "space-evenly", // Căn đều các môn thể thao
          }}
        >
          {seriesData.map(
            (SportIcon, index) =>
              selectedSports.includes(index) && (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "16px",
                    width: "140px", // Chiều rộng cố định
                    textAlign: "center",
                  }}
                >
                  {/* Button thay cho biểu tượng môn thể thao */}
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
                        backgroundColor: "primary.dark", // Thêm màu hover tối hơn
                      },
                      marginBottom: "8px", // Khoảng cách giữa button và tên môn thể thao
                      width: "100%", // Đảm bảo button chiếm toàn bộ chiều rộng
                      borderRadius: 1, // Bo góc button
                    }}
                    startIcon={<SportIcon sx={{ fontSize: 40, color: "white" }} />}
                  />
                  {/* Tên môn thể thao dưới icon */}
                  <Typography variant="body1" sx={{ fontWeight: "bold", marginTop: "8px" }}>
                    {seriesDescription[index].title}
                  </Typography>
                </Box>
              )
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Excercise;
