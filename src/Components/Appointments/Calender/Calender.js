import React from 'react';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { CalendarPicker } from '@mui/x-date-pickers/CalendarPicker';



const Calender = ({date,setDate}) => {
    
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>

            <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} />

        </LocalizationProvider>
    );
};

export default Calender;