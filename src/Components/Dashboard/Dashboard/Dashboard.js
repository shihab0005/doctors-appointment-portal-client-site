import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';

import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FilterAppointment from '../FilterAppointment/FilterAppointment';
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import AllDoctors from '../AllDoctors/AllDoctors';
import NewDoctors from '../NewDoctors/NewDoctors';
import { Button } from '@mui/material';


const drawerWidth = 190;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();


    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List>
                <ListItem button>
                    <Link to={url}>Appointments</Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <Link to={`${url}/newDoctor`}>Add New Doctors</Link>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <Link to={`${url}/allDoctors`}>Doctors</Link>
                </ListItem>
            </List>
            <Divider />


        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h5" noWrap component="div">
                        Doctors Portal Dashboard
                    </Typography>
                    <Link style={{ textDecoration: 'none' }} to="/">

                        <Button sx={{ color: "#fff", fontWeight: 600, m: 3 }}>Home</Button>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to="/appointments">

                        <Button sx={{ color: "#fff", fontWeight: 600, m: 3 }}>GEt Appointment</Button>
                    </Link>

                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <FilterAppointment />
                    </Route>
                    <Route path={`${path}/newDoctor`}>
                        <NewDoctors />
                    </Route>
                    <Route path={`${path}/allDoctors`}>
                        <AllDoctors />
                    </Route>
                </Switch>

            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
