import { TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';

const Contact = () => {
    const rootStyle = {
        background: "#33749E",

        textAlign: "center",
        padding: "30px 0"

    }
    return (
        <Container style={rootStyle}>
            <div>
                <Container maxWidth="md">
                    <Typography variant="h6" color="#09F8E6">Contact</Typography>
                    <Typography variant="h4" sx={{ fontWeight: 500, color: "#fff" }}>Always Contact With Us</Typography>

                    <form action="">
                        <TextField
                            fullWidth
                            required
                            sx={{
                                background: "#fff",
                                borderRadius: 2,
                                marginTop: 3
                            }}
                            placeholder='Email Address'
                            variant="outlined"
                        />
                        <TextField
                            fullWidth
                            required
                            sx={{
                                background: "#fff",
                                borderRadius: 2,
                                marginTop: 3
                            }}
                            placeholder='Subject'
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-multiline-static"
                            fullWidth
                            multiline
                            sx={{
                                background: "#fff",
                                borderRadius: 2,
                                marginTop: 3,
                                marginBottom: 2
                            }}
                            rows={6}
                            placeholder="Your Message"
                        />
                        <MuiButton>Submit</MuiButton>
                    </form>
                </Container>
            </div>
        </Container>
    );
};

export default Contact;