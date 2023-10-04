import React from "react";
import './choose.css'
import Ricoz from '../../assets/whyRicoz.png'
import Img1 from '../../assets/whyImg1.png'
import Img2 from '../../assets/whyImg2.png'
import Img3 from '../../assets/whyimg3.png'
import Img4 from '../../assets/whyImg4.png'
const Choose=()=>{
    return(
        <div className="choiceContainer">
            <div className="chooseHeading">
                <h2>Why Choose Ricoz?</h2>
            </div>
            <div className="chooseBottom">
                <div className="chooseBottomLeft">
                    <img className="choosebottomLeftImg1" src={Ricoz} alt="Img" />
                </div>
                <div className="chooseBottomRight">
                    <div className="choose1">
                        <div className="chooseImg">
                        <img className="chooseImg1" src={Img1} alt="Img" />
                        </div>
                        <div className="chooseText">
                            <h4>Vast Professional Network</h4>
                            <p>Access a wide range of skilled tech professionals, all in one platform.</p>
                        </div>
                    </div>
                    <div className="choose1">
                        <div className="chooseImg">
                        <img className="chooseImg1" src={Img2} alt="Img" />
                        </div>
                        <div className="chooseText">
                            <h4>Vast Professional Network</h4>
                            <p>Access a wide range of skilled tech professionals, all in one platform.</p>
                        </div>
                    </div>
                    <div className="choose1">
                        <div className="chooseImg">
                        <img className="chooseImg1" src={Img3} alt="Img" />
                        </div>
                        <div className="chooseText">
                            <h4>Vast Professional Network</h4>
                            <p>Access a wide range of skilled tech professionals, all in one platform.</p>
                        </div>
                    </div>
                    <div className="choose1">
                        <div className="chooseImg">
                        <img className="chooseImg1" src={Img4} alt="Img" />
                        </div>
                        <div className="chooseText">
                            <h4>Vast Professional Network</h4>
                            <p>Access a wide range of skilled tech professionals, all in one platform.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Choose;