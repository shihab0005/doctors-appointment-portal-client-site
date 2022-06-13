import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const NewDoctors = () => {
    const [newDoctor, setNewDoctor] = useState({});

    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;

        const addNewDoctor = { ...newDoctor }
        addNewDoctor[field] = value;
        setNewDoctor(addNewDoctor);
    }
    const handleSubmit = (e) => {

        fetch("http://localhost:5000/doctors", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newDoctor)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("New Doctor Add Successfully")
                }
            })
        e.preventDefalult();
    }
    
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWidth: 600, color: "#8F8800", textAlign: "center" }}>ADD NEW DOCTOR</Typography>

                    <form onSubmit={handleSubmit}>

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Doctor Id"
                            name="Doctor_Id"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Doctor Name"
                            name="Doctor_name"
                            type="text"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Doctor Email"
                            name="Doctor_email"
                            type="email"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Doctor Phone"
                            type="text"
                            name="Doctor_phone"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Specialized"
                            type="text"
                            name="Doctor_specialized"
                            onBlur={handleOnBlur}
                            variant="standard" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            label="Image"

                            name="Doctor_image"
                            onBlur={handleOnBlur}
                            variant="standard" />


                        <Button
                            sx={{ width: "75%", m: 1 }} type="submit"
                            variant="contained"
                        >Add New Doctor</Button>

                    </form>


                </Grid>


            </Grid>

        </Container>
    );
};

export default NewDoctors;