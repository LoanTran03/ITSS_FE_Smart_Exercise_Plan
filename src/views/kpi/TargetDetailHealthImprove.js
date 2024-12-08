import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from '@mui/material/styles';
import './StarRating.css';
import {
    Card,
    CardContent,
    Divider,
    Box,
    Typography,
    TextField,
    FormControlLabel,
    Checkbox,
    Button,
    Grid,
    RadioGroup,
    Radio,
    FormControl,
    MenuItem,
  } from "@mui/material";

  const CustomDatePickerWrapper = styled('div')(({ theme }) => ({
    marginBottom: '20px',
    '& .react-datepicker': {
      border: `1px solid ${theme.palette.primary.main}`,
      borderRadius: theme.shape.borderRadius,
      boxShadow: theme.shadows[2],
    },
    '& .react-datepicker__header': {
      backgroundColor: theme.palette.primary.light,
      borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    '& .react-datepicker__day--selected': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      borderRadius: '50%',
    },
    '& .react-datepicker__day:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  }));

const TargetDetailHealthImprove = () => {
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);
    const [rating, setRating] = useState(0);  // Lưu đánh giá của người dùng
    const [hover, setHover] = useState(null);  // Lưu sao đang hover

    const handleClick = (index) => {
      setRating(index); // Cập nhật sao được chọn
    };

    return (
        <Card
        variant="outlined"
        sx={{
          p: 0,
        }}
        >
        <Box
          sx={{
            padding: "15px 30px",
          }}
          display="flex"
          alignItems="center"
        >
          <Box flexGrow={1}>
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "500",
              }}
            >
            Weight loss
            </Typography>
          </Box>
        </Box>
        <Divider />
        <CardContent
          sx={{
            padding: "30px",
          }}
        >
          <form>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <Grid container spacing={1}>
              <Grid item xs={6}>
                <CustomDatePickerWrapper>
                    <DatePicker
                        selected={selectedStartTime}
                        onChange={(date) => setSelectedStartTime(date)}
                        customInput={<TextField label="Start time" variant="outlined" fullWidth />}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                </CustomDatePickerWrapper>
              </Grid>
              <Grid item xs={6}>
                <CustomDatePickerWrapper>
                    <DatePicker
                        selected={selectedEndTime}
                        onChange={(date) => setSelectedEndTime(date)}
                        customInput={<TextField label="End Time" variant="outlined" fullWidth />}
                        showTimeSelect
                        dateFormat="Pp"
                    />
                </CustomDatePickerWrapper>
              </Grid>
            </Grid>
            <div className="star-rating">
              {[...Array(5)].map((_, index) => {
                const starIndex = index + 1;
                return (
                  <span
                    key={starIndex}
                    className={`star ${starIndex <= (hover || rating) ? 'filled' : ''}`}
                    onClick={() => handleClick(starIndex)}
                    onMouseEnter={() => setHover(starIndex)}  // Di chuột vào sao
                    onMouseLeave={() => setHover(null)}       // Rời chuột khỏi sao
                  >
                    ★
                  </span>
                );
              })}
            </div>
            <div>
              <Button color="primary" variant="contained">
                Save
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    );
}

export default TargetDetailHealthImprove;