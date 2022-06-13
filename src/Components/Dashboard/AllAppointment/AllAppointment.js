import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useAuth from '../../../Hooks/useAuth';
import { Button } from '@mui/material';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const AllAppointment = ({ date }) => {

    const { user } = useAuth();
    const [allAppointments, setAllAppointments] = useState([]);

    const url = `http://localhost:5000/appointments?email=${user?.email}&date=${date}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAllAppointments(data))
    }, [date]);

    const handleDeleteAppointment = id => {
        const proceed=window.confirm("Are you Sure, you want to cancel Your Appointment ?");
        if(proceed){
            const url = `http://localhost:5000/appointments/${id}`;
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    alert("Appointment Cancel Successfully")
                }
                const remainingAppointment = allAppointments.filter(allAppointment => allAppointment._id !== id);
                setAllAppointments(remainingAppointment);
            })
        }
    }

    return (
        <div>
            <h1>Your Total Appointment : {allAppointments.length} </h1>

            <TableContainer sx={{ maxWidth: 650 }} component={Paper}>
                <Table aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Name</StyledTableCell>
                            <StyledTableCell align="right">Time</StyledTableCell>
                            <StyledTableCell align="right">Phone</StyledTableCell>
                            <StyledTableCell align="right">Actions</StyledTableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allAppointments.map((row) => (
                            <StyledTableRow key={row.name}>
                                <StyledTableCell component="th" scope="row">
                                    {row.patientName}
                                </StyledTableCell>
                                <StyledTableCell align="right">{row.time}</StyledTableCell>
                                <StyledTableCell align="right">{row.phone}</StyledTableCell>
                                <StyledTableCell align="right"><Button onClick={() => handleDeleteAppointment(row._id)}>
                                    <DeleteSharpIcon />
                                </Button></StyledTableCell>

                            </StyledTableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default AllAppointment;