import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import loginImg from '../../../images/login.png'

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, signInWithGoogle, isLoading, loginUser, authError } = useAuth();

    const location = useLocation();
    const history = useHistory()
    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData }
        newLoginData[field] = value;
        setLoginData(newLoginData);


    }
    const handleSubmit = (e) => {

        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefalult();

    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWidth: 600, color: "#8F8800", textAlign: "center" }}>Login</Typography>

                    {!isLoading && <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            label="Email"
                            name="email"
                            type="email"
                            onChange={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 2 }}
                            id="standard-basic"
                            label="Password"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            variant="standard" />


                        <Button
                            sx={{ width: "75%", m: 2 }} type="submit"
                            variant="contained"
                        >Login</Button>
                        <NavLink style={{
                            textDecoration: "none",


                        }}
                            to="/register">
                            <Button sx={{ mx: 15 }} variant="text">New User ? Please register</Button>
                        </NavLink>
                    </form>}
                    {
                        isLoading && <CircularProgress color="success" />
                    }
                    <Typography sx={{ mx: 27, mb: 1, color: "#366DF6" }} >--OR--</Typography>
                    <Button sx={{ mx: 20 }} variant="contained" onClick={handleGoogleSignIn}>Google Sign In</Button>

                    {user?.email && <Alert severity="success">Login Successfully</Alert>}
                    {authError && <Alert severity="error">{authError}</Alert>}

                </Grid>
                <Grid item xs={12} md={6}>
                    <img src={loginImg} width="100%" alt="Login_Image" />
                </Grid>

            </Grid>

        </Container>
    );
};

export default Login;