import { Container, Grid, List, ListItem, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
    return (
        <Container sx={{ mt: 5, background: "#064167", color: "#fff" }}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Typography variant="h5" color="#03BC8A">Offers</Typography>
                    <List>
                        <ListItem>Emergency Doctor </ListItem>
                        <ListItem> Dental Care</ListItem>
                        <ListItem>Regualr Check up</ListItem>
                        <ListItem>Emergency Check up</ListItem>


                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Typography variant="h5" color="#03BC8A">Services</Typography>
                    <List>
                        <ListItem>Emergency Doctor</ListItem>
                        <ListItem>Regular Doctor Check Up</ListItem>
                        <ListItem>Medicine Free</ListItem>
                        <ListItem>Ambulance</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Typography variant="h5" color="#03BC8A">Oral Health</Typography>
                    <List>
                        <ListItem>Emergency Doctor</ListItem>
                        <ListItem>Regular Doctor Check Up</ListItem>
                        <ListItem>Medicine Free</ListItem>
                        <ListItem>Ambulance</ListItem>
                    </List>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={3}>
                    <Typography variant="h5" color="#03BC8A">Our Address</Typography>
                    <List>
                        <ListItem>Mirpur ,Dhaka-1229</ListItem>
                        <ListItem>0159933444,049849944</ListItem>
                        <ListItem><FacebookIcon sx={{ fontSize: 40 }} /> <InstagramIcon sx={{ fontSize: 40 }} /><YouTubeIcon sx={{ fontSize: 40 }} /><LinkedInIcon sx={{ fontSize: 40 }} /></ListItem>

                    </List>
                </Grid>

            </Grid>

        </Container>
    );
};

export default Footer;