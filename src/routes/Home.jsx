import React from "react";
import './Home.css'
import Newskill from "../components/newSkills/newskill";
import Navbar from '../components/navbar/navbar'
import Getstart from '../components/getstart/getstart'
import Plateform from '../components/plateform/plateform'
import Choose from '../components/choose/Chose'
import RealStories from '../components/realStories/story'
import Workflow from '../components/workflow/workflow'
import Contact from '../components/contact/contact'
import Footer from '../components/footer/footer'
const Home=()=>{
    return(
        <>
        <Navbar/>
        <Getstart/>
        <Plateform/>
        <Choose/>
        <Newskill/>
        <RealStories/>
        <Workflow/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home;
