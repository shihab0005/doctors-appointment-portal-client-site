import React from 'react';
import Home from './Components/Home/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Appointments from './Components/Appointments/Appointments/Appointments';
import Login from './Components/Login/Login/Login';
import Register from './Components/Login/Register/Register';
import AuthProvider from './Context/AuthProvider/AuthProvider';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import UpdateDoctors from './Components/Dashboard/UpdateDoctors/UpdateDoctors';
const App = () => {
  return (
    <AuthProvider>

      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute path="/appointments">
            <Appointments />
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/doctors/update/:id">
            <UpdateDoctors />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;