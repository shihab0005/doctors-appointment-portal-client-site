import React, { useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Navbar from '../../Home/Navbar/Navbar';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Booking from '../Booking/Booking';

const Appointments = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Navbar />
            <AppointmentBanner date={date} setDate={setDate} />
            <Booking date={date} />
            <Footer />

        </div>
    );
};

export default Appointments;