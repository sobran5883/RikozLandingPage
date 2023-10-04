import React from "react";
import './story.css'
import Stars from '../../assets/stars.png'
import photo1 from '../../assets/story.png'
import photo2 from '../../assets/story1.png'
import photo3 from '../../assets/story2.png'
const Story=()=>{
    return(
        <div className="storyContainer">
            <div className="storyHeading">
                <h4>Real Stories from Real Professionals</h4>
            </div>
            <div className="stories">
                <div className="story">
                    <div className="profile">
                        <div className="photo">
                           <img src={photo1} alt="" />
                        </div>
                        <div className="details">
                           <div className="name">
                            <h4>John Doe</h4>
                           </div>
                           <div className="education">
                            <h5>Graduated</h5>
                           </div>
                        </div>
                    </div>
                    <div className="profileHeading">
                        <h3>"I recommend this to All"</h3>
                    </div>
                    <div className="profilePara">
                        <p>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
                    </div>
                    <div className="rating">
                        <img src={Stars} alt="" />
                    </div>
                </div>
                <div className="story">
                    <div className="profile">
                        <div className="photo">
                           <img src={photo2} alt="" />
                        </div>
                        <div className="details">
                           <div className="name">
                            <h4>John Doe</h4>
                           </div>
                           <div className="education">
                            <h5>Graduated</h5>
                           </div>
                        </div>
                    </div>
                    <div className="profileHeading">
                        <h3>"I recommend this to All"</h3>
                    </div>
                    <div className="profilePara">
                        <p>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
                    </div>
                    <div className="rating">
                        <img src={Stars} alt="" />
                    </div>
                </div>
                <div className="story">
                    <div className="profile">
                        <div className="photo">
                           <img src={photo3} alt="" />
                        </div>
                        <div className="details">
                           <div className="name">
                            <h4>John Doe</h4>
                           </div>
                           <div className="education">
                            <h5>Graduated</h5>
                           </div>
                        </div>
                    </div>
                    <div className="profileHeading">
                        <h3>"I recommend this to All"</h3>
                    </div>
                    <div className="profilePara">
                        <p>Ricoz connected me with amazing clients. The quality scoring system ensures I work on exciting projects while maintaining my reputation.</p>
                    </div>
                    <div className="rating">
                        <img src={Stars} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Story;