import React from "react";
import './contact.css'
import Phone from '../../assets/telephone.png'
import Gmail from '../../assets/gmail.png'
import Insta from '../../assets/insta.png'
import ContactImg from '../../assets/contactImg.png'
const Contact =()=>{
    return(
        <div className="contactContainer">
            <div className="contactUpper">
                <div className="contactUpperLeft">
                    <img src={ContactImg} alt="" />
                </div>
                <div className="contactUpperRight">
                    <h2>Get in Touch</h2>
                    <div className="entername">
                        Name  <input type="text" placeholder="" className="searchInput"/>
                        <hr />
                    </div>
                    <div className="mail-phone">
                        <div className="inputMail">
                        Email     <input type="text" placeholder="" className="searchInput"/>
                        <hr />
                        </div>
                        <div className="inputPhone">
                        Phone number     <input type="text" placeholder="" className="searchInput"/>
                        <hr />
                        </div>
                    </div>
                    <div className="messege">
                        Messege    <input type="text" placeholder="" className="searchInput" />
                        <hr />
                    </div>
                    <div className="contactbtn">
                        <button>Submit Now</button>
                    </div>
                </div>
            </div>
            <hr className="contactBottomHr" />
            <div className="contactLower">
                    <div id="phone" className="phone">
                            <div className="phoneImg">
                                <img src={Phone} alt="" />
                            </div>
                            <div className="phoneImg">
                                <p>+917011112666</p>
                                 
                            </div>
                    </div>
                    <div className="email">
                            <div className="phoneImg">
                                <img src={Gmail} alt="" />
                            </div>
                            <div className="emailImg">
                                <p>info@Ricoz.in</p>
                                
                            </div>
                        </div>
                    <div className="insta">
                            <div className="phoneImg">
                                <img src={Insta} alt="" /> 
                            </div>
                            <div className="emailImg">
                                <p> Ricoz.in</p>
                               
                            </div>
                   </div>
            </div>
        </div>
    )
}

export default Contact;