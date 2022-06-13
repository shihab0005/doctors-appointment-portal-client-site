import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import MuiButton from '../../../StyledComponent/MuiButton/MuiButton';
import useAuth from '../../../Hooks/useAuth';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',

    boxShadow: 24,
    p: 4,
};

export default function AppointmentModal({ date, open, handleClose, name, time, setBookingSuccess }) {
    const { user } = useAuth();

    const initialInfo = { patientName: user?.displayName, email: user?.email, phone: "", address: "" }
    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setBookingInfo(newInfo);
    }

    const handleSubmit = (e) => {
        const bookAppointment = {
            ...bookingInfo,
            time,
            serviceName: name,
            date: date.toLocaleDateString(),
        }
        // console.log(bookAppointment);
        fetch("http://localhost:5000/appointments", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(bookAppointment)
        }).then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setBookingSuccess(true);
                    handleClose();
                }
            })


        e.preventDefault();

    }

    return (
        <div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography variant="h5" sx={{ textAlign: "center", color: "#195FF4", fontWeight: 600, mb: 2 }} >
                        {name}
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            disabled
                            fullWidth
                            value={time}
                            size="small"
                            margin="dense"

                        />
                        <TextField
                            fullWidth
                            defaultValue={user?.displayName}
                            name="patientName"
                            placeholder='Patient Name'
                            onBlur={handleOnBlur}
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            placeholder='Phone Number'
                            onBlur={handleOnBlur}
                            name="phone"
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            placeholder='Address'
                            onBlur={handleOnBlur}
                            name="address"
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            fullWidth
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user?.email}
                            size="small"
                            margin="dense"
                        />
                        <TextField
                            disabled
                            fullWidth
                            value={new Date(date).toLocaleDateString()}
                            size="small"
                            margin="dense"
                        />
                        <MuiButton type='submit' sx={{ mt: 2 }}>Submit</MuiButton>
                    </form>
                </Box>
            </Modal>
        </div>
    );
}
