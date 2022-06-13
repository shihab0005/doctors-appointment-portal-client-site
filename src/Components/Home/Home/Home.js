import React from 'react';
import Appointment from '../Appointment/Appointment';
import Banner from '../Banner/Banner';
import Blogs from '../Blogs/Blogs';
import Contact from '../Contact/Contact';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import InfoCard from '../InfoCard/InfoCard';
import Navbar from '../Navbar/Navbar';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import UsersReview from '../UsersReview/UsersReview';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <InfoCard />
            <Services />
            <Treatment />
            <Doctors />
            <Appointment />
            <UsersReview />
            <Blogs />

            <Contact />
            <Footer />
        </div>
    );
};

export default Home;