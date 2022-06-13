import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateDoctors = () => {
    const [updateDoctor, setUpdateDoctor] = useState({})
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/doctors/${id}`)
            .then(res => res.json())
            .then(data => setUpdateDoctor(data))
    }, [id])

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;

        const updateNewDoctor = { ...updateDoctor };
        updateNewDoctor[field] = value;
        setUpdateDoctor(updateNewDoctor);

    }
    const handleUpdateDoctor = e => {
        fetch(`http://localhost:5000/doctors/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updateDoctor)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert("Doctors Information Update successfully");
                    setUpdateDoctor({})
                }
            })
        e.preventDefault()
    }
    return (
        <Container>
            <Grid container spacing={2} sx={{ display: 'flex', alignItems: "center" }}>
                <Grid item xs={12} md={6}>
                    <Typography variant="h4" sx={{ fontWidth: 600, color: "#8F8800", textAlign: "center" }}>Update Doctors Information</Typography>
                    <form style={{ textAlign: "center" }} onSubmit={handleUpdateDoctor}>

                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Doctor Id"
                            name="Doctor_Id"
                            type="text"
                            value={updateDoctor.Doctor_Id || ""}
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Doctor Name"
                            value={updateDoctor.Doctor_name || ""}
                            name="Doctor_name"
                            type="text"
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Doctor Email"
                            name="Doctor_email"
                            type="email"
                            value={updateDoctor.Doctor_email || ""}
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Doctor Phone"
                            type="text"
                            name="Doctor_phone"
                            value={updateDoctor.Doctor_phone || ""}
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Specialized"
                            type="text"
                            name="Doctor_specialized"
                            value={updateDoctor.Doctor_specialized || ""}
                            onChange={handleOnChange}
                            variant="outlined" />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            placeholder="Image"
                            value={updateDoctor.Doctor_image || ""}
                            name="Doctor_image"
                            onChange={handleOnChange}
                            variant="outlined" />


                        <Button
                            sx={{ width: "75%", m: 1 }} type="submit"
                            variant="contained"
                        >Update Doctors Information</Button>

                    </form>
                </Grid>


            </Grid>

        </Container>
    );
};

export default UpdateDoctors;