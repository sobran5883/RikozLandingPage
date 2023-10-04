import React from 'react';
import './workflow.css'
import Post1 from '../../assets/post.png'
import Post2 from '../../assets/calander.png'
import Post3 from '../../assets/graph.png'
import Post4 from '../../assets/handshake.png'
import Ellipse from '../../assets/Ellipse.png'

const Workflow=()=>{
    return(
        <div className="workflowContainer">
            <div className="workflowHeading">
                <h3>Enhance Your Workflow with Integrated Tools</h3>
            </div>
            <div className="workflowBottom">
                <div className="workflowLeft">
                    <div id='workflowLogo' className="workflowLeftUpper">
                        <img src={Post1} alt="" />
                        <h4>Messaging Platform</h4>
                        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
                    </div>
                    <div id='workflowLogo' className="workflowLeftLower">
                        <img src={Post3} alt="" />
                        <h4>Messaging Platform</h4>
                        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
                    </div>
                </div>
                <div className="workflowMiddle">
                    <img src={Ellipse} alt="" />
                </div>
                <div id='workflowLogo' className="workflowRight">
                    <div className="workflowRightUpper">
                        <img src={Post4} alt="" />
                        <h4>Messaging Platform</h4>
                        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
                    </div>
                    <div id='workflowLogo' className="workflowRightLower">
                        <img src={Post2} alt="" />
                        <h4>Messaging Platform</h4>
                        <p>Stay connected and collaborate seamlessly with clients and team members.</p>
                    </div>
                </div>
            </div>
            <div className="exploreBtn">
                <button>Explor Tools</button>
            </div>
        </div>
    )
}
export default Workflow;