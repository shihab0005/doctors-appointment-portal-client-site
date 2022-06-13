import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';


const Navbar = () => {
    const { user, logout } = useAuth();
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Doctors App
                    </Typography>

                    <Link style={{ textDecoration: 'none' }} to="/">

                        <Typography sx={{ color: "#fff", fontWeight: 600, m: 1 }}>Home</Typography>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/appointments">

                        <Typography sx={{ color: "#fff", fontWeight: 600, m: 1 }}>Appointment</Typography>
                    </Link>

                    {user?.email ? <Box>
                        <Link style={{ textDecoration: 'none' }} to="/dashboard">
                            <Button sx={{ color: "#fff", fontWeight: 600, m: 1, }}>Dashboard</Button>
                        </Link>
                        <Button sx={{ color: "#fff", fontWeight: 600, m: 1, }} onClick={logout}>Logout</Button>
                    </Box>
                        :
                        <Link style={{ textDecoration: 'none' }} to="/login">
                            <Button sx={{ color: "#fff", fontWeight: 600, m: 1, }} onClick={logout}>Login</Button>
                        </Link>
                    }

                    {user?.email && <Typography sx={{ color: "#FAF30C", fontWeight: 600, mx: 2, }}>Hello {user?.email}</Typography>}

                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navbar;