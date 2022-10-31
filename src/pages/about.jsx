import React from "react";
import Background from "../img/background.webp"
const About=()=> {
    return(
        <>
        <div className="skill">
        <div className="skill-details">
        <div className="skill-subdiv">
        <h1 style={{fontFamily: "cursive", fontSize: "50px" , color: "#151B54"}}>SKILLS</h1>
            <p style={{fontFamily: "serif", fontSize: "25px", marginTop: "40px"}}>
            React.js | HTML | CSS | JavaScript | Core Java | Web Developer | SQL | C | C++
            </p>
        </div>
        </div>
        <div className="skill-background" style={{backgroundImage:`url(${Background})`}}>
        </div>
        </div>
        </>
    );
}

export default About;