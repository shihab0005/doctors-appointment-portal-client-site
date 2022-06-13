import { Box, Grid, Paper, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import img1 from "../../../images/people-1.png"
import img2 from "../../../images/people-2.png"
import img3 from "../../../images/people-3.png"

const UsersReview = () => {
    return (
        <Container sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ mb: 5, textAlign: "center", fontWeight: "700" }}>What's Our Patients Says </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography sx={{ mb: 4, textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt quidem voluptas fuga, magni possimus earum repellendus inventore necessitatibus eveniet, esse, expedita repellat quisquam aliquam voluptatibus odit? Aliquid, ex recusandae.</Typography>
                        <Box sx={{
                            display: "flex", justifyContent: "space-around", aliginItems: "center",
                        }}>
                            <img src={img1} alt="User_1" />
                            <Box>
                                <Typography variant='h5' sx={{ color: "#06EC87" }}>Winsom Harry </Typography>
                                <Typography variant='h6' sx={{ color: "#111110" }}>California </Typography>
                            </Box>

                        </Box>
                    </Paper>



                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography sx={{ mb: 4, textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt quidem voluptas fuga, magni possimus earum repellendus inventore necessitatibus eveniet, esse, expedita repellat quisquam aliquam voluptatibus odit? Aliquid, ex recusandae.</Typography>
                        <Box sx={{
                            display: "flex", justifyContent: "space-around", aliginItems: "center",
                        }}>
                            <img src={img2} alt="User_1" />
                            <Box>
                                <Typography variant='h5' sx={{ color: "#06EC87" }}>Winsom Harry </Typography>
                                <Typography variant='h6' sx={{ color: "#111110" }}>Florida</Typography>
                            </Box>

                        </Box>
                    </Paper>

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography sx={{ mb: 4, textAlign: "justify" }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium nesciunt quidem voluptas fuga, magni possimus earum repellendus inventore necessitatibus eveniet, esse, expedita repellat quisquam aliquam voluptatibus odit? Aliquid, ex recusandae.</Typography>
                        <Box sx={{
                            display: "flex", justifyContent: "space-around", aliginItems: "center",
                        }}>
                            <img src={img3} alt="User_1" />
                            <Box>
                                <Typography variant='h5' sx={{ color: "#06EC87" }}>Winsom Harry </Typography>
                                <Typography variant='h6' sx={{ color: "#111110" }}>Indiana</Typography>
                            </Box>

                        </Box>
                    </Paper>
                </Grid>

            </Grid>

        </Container >
    );
};

export default UsersReview;