import React from "react";
import './footer.css'
import Logo from '../../assets/navlogo.png'
import {FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaSpotify} from 'react-icons/fa'
import {BsSearch} from 'react-icons/bs'
const Footer=()=>{
    return(
       <div className="footerWrapper">
        <div className="footerContainer">
            <div id="footerTop" className="footerLogo">
                <img src={Logo} alt="" />
            </div>
            <div id="footerMiddle">
                <div className="footerCompany">
                    <h5>Company</h5>
                    <ul>
                        <li>About Us</li>
                        <li>Services</li>
                        <li>Courses</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="footerServices">
                    <h5>Services</h5>
                    <ul>
                        <li>Web Development</li>
                        <li>Performance Marketing</li>
                        <li>Social Media Marketing</li>
                        <li>App Development</li>
                        <li>Graphic Design</li>
                        <li>UI/UX Design</li>
                    </ul>
                </div>
            </div>
            <div id="footerbottom">
                <div className="footerContacts">
                    <div className="footerMail">
                        <h5>Email Us</h5>
                        <h6>Ricoz1234@gmail.com</h6>
                    </div>
                    <div className="footerContact">
                        <h5>Contact Us</h5>
                        <h6>+91 9098885099</h6>
                    </div>
                    <div className="footerIcons">
                        <FaFacebook  font-size='20px' color="rgb(75, 107, 237)"/>
                        <FaTwitter font-size='20px' color="rgb(85, 173, 240)"/>
                        <FaLinkedin font-size='20px' color="rgb(9, 62, 208)"/>
                        <FaInstagram font-size='20px' color="rgb(210, 25, 71)" />
                        <FaSpotify font-size='20px' color="rgb(30, 242, 83)"/>
                    </div>
                </div>
                <div className="footerSubs">
                    <h5>SUBSCRIBE TO NEWSLETTER</h5>
                    <div className="footerSearch">
                        <BsSearch className='searchIcon'/>
                        <input type="text" placeholder="Enter email"/>
                    </div>
                </div>
            </div>

        </div>
        <div className="footerHr">
            <hr />
            <p className="copyright">© 2023 Ricoz. All Rights Reserved.</p>
        </div>
      </div> 
    )
}

export default Footer;