import React from 'react'
import Contact from './Contact';
import Footer from './Footer';
import Header from './Header';
import Navbar from './Navbar'
import Services from './Services';


const Home = () => {
    return (
        <>
            <Navbar />
            <Header />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}

export default Home ;
