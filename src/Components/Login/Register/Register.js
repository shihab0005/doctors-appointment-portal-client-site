import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../images/login.png'

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const location = useLocation();
    const history = useHistory()

    const { user, isLoading, authError, registerUser } = useAuth();

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        //console.log(newLoginData)
        setLoginData(newLoginData);


    }
    const handleSubmit = (e) => {
        if (loginData.password !== loginData.password2) {
            alert("Password Not Match. Please Check");
            return;
        }

        registerUser(loginData.name, loginData.email, loginData.password, location, history)

        e.preventDefalult();

    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWidth: 600, color: "#8F8800", textAlign: "center" }}>Register</Typography>

                    {!isLoading && <form onSubmit={handleSubmit}>

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Name"
                            name="name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Confirm Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <Button
                            sx={{ width: "75%", m: 1 }} type="submit"
                            variant="contained"
                        >Register</Button>
                        <NavLink style={{
                            textDecoration: "none",

                        }}
                            to="/login">
                            <Button sx={{ mx: 7 }} variant="text">Already Register ? Please Login</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress color="success" />
                    }
                    {user?.email && <Alert severity="success">Register Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}
                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} width="100%" alt="Login_Image" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Register;