import React from "react";
import './newskill.css'
import SkillImg from '../../assets/newskill.png'
import SkillImg1 from '../../assets/newskill1.png'
import SkillImg2 from '../../assets/newskill2.png'
import SkillImg3 from '../../assets/newskill3.png'
import SkillImg4 from '../../assets/newskill4.png'
import SkillImg5 from '../../assets/newskill5.png'
import {FaRupeeSign} from 'react-icons/fa'
const Newskill=()=>{
    return(
        <div className="newskillContainer">
            <div className="newskillHeader">
                <div className="newskillHeading">
                    <h1>Unlock New Skill with Our Courses</h1>
                    <p>Learn and Grow at Your Own Pace</p>
                </div>
                <div className="exploreMoreBtn">
                    <button>Explore More</button>
                </div>
            </div>
            <div className="skillPages">
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg1} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg2} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg3} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg4} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
                <div className="skillPage">
                    <div className="skilledImg">
                        <img src={SkillImg5} alt="" />
                    </div>
                    <div className="skillPageHeadig">
                        <h4>Web Developer Mastery</h4>
                    </div>
                    <div className="skillPrice">
                       <FaRupeeSign/>60,000
                    </div>
                    <div className="skillPara">
                           <p>Master the art of web development with our comprehensive course. Learn coding, design, and deployment.</p>
                    </div>
                    <div className="learnMoreLink">
                       <a href="/">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newskill;