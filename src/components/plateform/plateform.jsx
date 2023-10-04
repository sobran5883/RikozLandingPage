import React from 'react';
import './plateform.css'
import {GiLaptop} from 'react-icons/gi'
import {FcSearch} from 'react-icons/fc'
import {HiShoppingBag} from 'react-icons/hi'

const Plateform=()=>{
    return(
        <div className="plateformContainer">
            <div className="plateformMainHeading">
                <h2>Explore Our Platform's Unique Features</h2>
            </div>
            <div className="plateforms">
                <div className="plateform">
                    <div className="plateformIcon">
                         <GiLaptop className='plateformIconClass'/>
                     </div>
                     <div className="plateformHeading">
                         <h3>Wide Range of Services</h3>
                     </div>
                     <div className="plateformPara">
                             <p>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p>
                     </div>
                </div>
                <div className="plateform">
                    <div className="plateformIcon">
                         <FcSearch className='plateformIconClass'/>
                     </div>
                     <div className="plateformHeading">
                         <h3>Wide Range of Services</h3>
                     </div>
                     <div className="plateformPara">
                             <p>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p>
                     </div>
                </div>
                <div className="plateform">
                    <div className="plateformIcon">
                         <HiShoppingBag color={'brown'} className='plateformIconClass'/>
                     </div>
                     <div className="plateformHeading">
                         <h3>Wide Range of Services</h3>
                     </div>
                     <div className="plateformPara">
                             <p>Find everything from web development to marketing under one roof. Our platform offers a diverse array of tech services</p>
                     </div>
                </div>
            </div>
        </div>
    )
}

export default Plateform;