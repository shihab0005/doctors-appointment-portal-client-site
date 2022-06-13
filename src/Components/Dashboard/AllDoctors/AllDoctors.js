
import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditSharpIcon from '@mui/icons-material/EditSharp';
import { Link } from 'react-router-dom';

const AllDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/doctors")
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    const handleDeleteDoctor = id => {
        const proceed = window.confirm("Are You sure, you want to delete ?")
        if (proceed) {
            const url = `http://localhost:5000/doctors/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Delete doctor Successfully");
                        const remainingDoctors = doctors.filter(doctor => doctor._id !== id);
                        setDoctors(remainingDoctors)

                    }
                })
        }
    }
    return (
        <div>
            <h1>Total Doctor : {doctors.length}</h1>


            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Doctor Name</TableCell>
                            <TableCell align="right">Specialized</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">Image</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {doctors.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.Doctor_Id}
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    {row.Doctor_name}
                                </TableCell>
                                <TableCell align="right">{row.Doctor_specialized}</TableCell>
                                <TableCell align="right">{row.Doctor_phone}</TableCell>
                                <TableCell align="right">{row.Doctor_email}</TableCell>
                                <TableCell align="right">{row.Doctor_image}</TableCell>
                                <TableCell align="right">
                                    <Link to={`/doctors/update/${row._id}`}>
                                        <Button ><EditSharpIcon /></Button>
                                    </Link>
                                </TableCell>
                                <TableCell align="right"><Button onClick={() => handleDeleteDoctor(row._id)}><DeleteIcon /></Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default AllDoctors;