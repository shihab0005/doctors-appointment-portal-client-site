import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';

const InfoCard = () => {
    return (
        <Container sx={{ my: 2, padding: 2 }}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12} lg={4}>
                    <Paper elevation={2} sx={{ backgroundColor: "#15BB5B" }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "10px"
                        }}>
                            <AccessTimeIcon sx={{ fontSize: "50px" }} />
                            <Box>
                                <Typography variant='h5' sx={{ my: 2, fontWeight: "bold" }}>
                                    Opening Hour
                                </Typography>
                                <Typography variant='body1'>
                                    We Are Open At 7 days
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <Paper elevation={2} sx={{ backgroundColor: "#CFC617" }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "10px"
                        }}>
                            <LocationOnIcon sx={{ fontSize: "50px" }} />
                            <Box>
                                <Typography variant='h5' sx={{ my: 2, fontWeight: "bold" }}>
                                    Our Location
                                </Typography>
                                <Typography variant='body'>
                                    mirpur ,DHaka-1255
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={12} lg={4}>
                    <Paper elevation={2} sx={{ backgroundColor: "#15BB5B" }}>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            padding: "10px"
                        }}>
                            <AddIcCallIcon sx={{ fontSize: "50px" }} />
                            <Box>
                                <Typography variant='h5' sx={{ my: 2, fontWeight: "bold" }}>
                                    Call Us Now
                                </Typography>
                                <Typography variant='body'>
                                    01638628382,0298938
                                </Typography>
                            </Box>
                        </Box>
                    </Paper>
                </Grid>

            </Grid>

        </Container>
    );
};

export default InfoCard;