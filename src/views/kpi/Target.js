import { Grid, Typography } from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import KPICard from "./kpi-components/KPICard";
import Fab from "@mui/material/Fab";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Chip from "@mui/material/Chip";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const Target = () => {
  const navigate = useNavigate();

  const initialKPIList = [
    {
      id: "1",
      title: "Weight gain",
      chiptitle: "Set active",
    },
    {
      id: "2",
      title: "Weight loss",
      chiptitle: "Set active",
    },
    {
      id: "3",
      title: "Health improvement",
      chiptitle: "Set active",
    },
  ];

  const [KPIList, setKPIList] = useState(initialKPIList);

  const handleChipClick = (id) => {
    const updatedKPIList = KPIList.map((kpi) => {
      if (kpi.id === id) {
        return { ...kpi, chiptitle: "Active" };
      }
      return { ...kpi, chiptitle: "Set active" };
    });
    setKPIList(updatedKPIList);
  };

  return (
    <Box>
      <Typography
        paddingLeft={2}
        variant="h3"
        sx={{ marginBottom: "0" }}
        gutterBottom
      >
        <Link to="/target" style={{ color: "inherit", textDecoration: "none" }}>
          Target
        </Link>
      </Typography>
      <Grid container spacing={0}>
        {KPIList.map((kpi) => (
          <Grid
            key={kpi.id}
            item
            xs={12}
            lg={4}
            sm={6}
            sx={{
              display: "flex",
              alignItems: "stretch",
            }}
          >
            <KPICard
              title={kpi.title}
              chiptitle={kpi.chiptitle}
              onChipClick={() => handleChipClick(kpi.id)}
            >
              <Box
                sx={{
                  marginBottom: "3rem",
                  textAlign: "center",
                }}
              ></Box>
              <Box
                sx={{
                  textAlign: "right",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-around",
                  }}
                >
                  <Fab
                    color="primary"
                    variant="extended"
                    size="small"
                    onClick={() => navigate(`/target/detail${kpi.id}`)}
                    sx={{
                      mr: 1,
                      mb: {
                        xs: 1,
                        sm: 1,
                        lg: 1,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        ml: 1,
                        textTransform: "capitalize",
                      }}
                    >
                      Details
                    </Typography>
                    <NavigateNextIcon />
                  </Fab>
                </Box>
              </Box>
            </KPICard>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Target;
