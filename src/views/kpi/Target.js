import { Grid, Typography } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from "@mui/system";
import KPICard from "./kpi-components/KPICard";
import Fab from "@mui/material/Fab";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Chip from "@mui/material/Chip";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const Target = () => {
    const handleViewDetail1 = () => {
        navigate('/target/detail1');
    }

    const handleViewDetail2 = () => {
        navigate('/target/detail2');
    }

    const handleViewDetail3 = () => {
        navigate('/target/detail3');
    }

    const initialKPIList = [
        {
            id: "1",
            title: "Weight gain",
            chiptitle: "Set active",
            handleViewDetail: handleViewDetail1,
        },
        {
            id: "2",
            title: "Weight loss",
            chiptitle: "Active",
            handleViewDetail: handleViewDetail2,
        },
        {
            id: "3",
            title: "Health improvement",
            chiptitle: "Set active",
            handleViewDetail: handleViewDetail3,
        },
    ];

    const [KPIList, setKPIList] = useState(initialKPIList);
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [toBeDeletedId, setToBeDeletedId] = useState(null);

    const handleClickOpen = (id) => {
        setToBeDeletedId(id);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <Box>
            <Typography paddingLeft={2} variant="h3" sx={{ marginBottom: "0" }} gutterBottom>
                <Link to="/target" style={{ color: 'inherit', textDecoration: 'none' }}>Target</Link>
            </Typography>
            <Grid container spacing={0}>
                {KPIList.map((kpi) => (
                    <Grid
                        item
                        xs={12}
                        lg={4}
                        sm={6}
                        sx={{
                            display: "flex",
                            alignItems: "stretch",
                        }}
                    >
                        <KPICard title={kpi.title} chiptitle={kpi.chiptitle}>
                            <Box
                                sx={{
                                    marginBottom: "3rem",
                                    textAlign: "center",
                                }}
                            >
                            </Box>
                            <Box
                                sx={{
                                    textAlign: "right",
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        justifyContent: "space-around",

                                    }}>
                                    <Fab
                                        color="primary"
                                        variant="extended"
                                        size="small"
                                        onClick={kpi.handleViewDetail}
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
}

export default Target;