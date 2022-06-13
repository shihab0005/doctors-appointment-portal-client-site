import { Grid, Paper, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import React from 'react';
import img1 from "../../../images/people-1.png"

import img3 from "../../../images/people-3.png"
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Blogs = () => {
    return (
        <Container sx={{ mb: 10 }}>
            <Typography variant="h4" sx={{ mb: 5, textAlign: "center", fontWeight: "700" }}>Our Blog News </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2, background: "#F28E0D", color: "white" }}>
                        <Typography variant="h4" >Rashid Karim</Typography>
                        <Typography variant="h6" sx={{ mb: 5 }}>26 January 2022</Typography>


                        <Typography variant='h6' sx={{ mb: 9, fontWeight: "700" }}>Check at least a doctor in a year for your teeth</Typography>
                        <Typography variant='h6' sx={{ color: "#111110" }}><ArrowCircleRightIcon /> </Typography>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-evenly", aliginItems: "center",
                            mb: 3
                        }}>
                            <img src={img1} alt="User_1" />
                            <Box>
                                <Typography variant='h5' sx={{ fontWeight: "700" }}>Dr. Courly </Typography>
                                <Typography variant='body' sx={{ fontWeight: "700" }}>17 Oct 2021</Typography>
                            </Box>

                        </Box>
                        <Typography variant="h5" sx={{ mb: 4, textAlign: "justify", fontWeight: "600" }}>Two times of brush ina day can keep you Healty</Typography>
                        <Typography> Blanditiis aut consequuntur minima praesentium at, maiores corrupti, voluptatibus accusantium eligendi recusandae obcaecati.</Typography>

                    </Paper>

                </Grid>
                <Grid item xs={12} sm={12} md={4} lg={4}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Box sx={{
                            display: "flex", justifyContent: "space-evenly", aliginItems: "center",
                            mb: 3
                        }}>
                            <img src={img3} alt="User_1" />
                            <Box>
                                <Typography variant='h5' sx={{ fontWeight: "700" }}>Dr. John Mitchel</Typography>
                                <Typography variant='body' sx={{ fontWeight: "700" }}>235 Dec 2021</Typography>
                            </Box>

                        </Box>
                        <Typography variant="h5" sx={{ mb: 4, textAlign: "justify", fontWeight: "600" }}>The tooth Cancer is Always takes challenge</Typography>
                        <Typography> Blanditiis aut consequuntur minima praesentium at, maiores corrupti, voluptatibus accusantium eligendi recusandae obcaecati.</Typography>

                    </Paper>

                </Grid>


            </Grid>

        </Container >
    );
};

export default Blogs;