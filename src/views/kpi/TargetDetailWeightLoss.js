import React, { useState } from "react";
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { styled } from '@mui/material/styles';
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

const TargetDetailWeightLoss = () => {
    const [selectedStartTime, setSelectedStartTime] = useState(null);
    const [selectedEndTime, setSelectedEndTime] = useState(null);

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
            <TextField
              id="init-weight"
              label="Initial Weight"
              variant="outlined"
              defaultValue="80"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="target-weight"
              label="Target Weight"
              variant="outlined"
              defaultValue="70"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
            <TextField
              id="current-weight"
              label="Current Weight"
              variant="outlined"
                defaultValue="75"
              fullWidth
              sx={{
                mb: 2,
              }}
            />
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

export default TargetDetailWeightLoss;