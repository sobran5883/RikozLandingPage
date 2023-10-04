import React from 'react'
import './getstart.css'
import Img1 from '../../assets/homeImg1.png'
import Img2 from '../../assets/homeImg2.png'

const Getstart=()=>{
    return(
        <div className="getstartContainer">
            <div className="getstartLeft">
                <div className="getrightHeading">
                <h1>Discover Top Tech Professionals in Minutes.</h1>
                </div>
                <div className="getrightPara">
                <p>Streamline Your Business Needs with Ricoz's All-in-One Tech Service Hub.</p>
                </div>
                <div className="getrightButton">
                <button className='startbtn'>Get Started</button>
                </div>
            </div>
            <div className="getstartRight">
                <img className="getRightImg1" src={Img1} alt="Img" />
                <img className="getRightImg2" src={Img2} alt="Img" />
            </div>
        </div>
    )
}

export default Getstart;