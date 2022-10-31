import React from "react";
import Web from "../img/web.jpg";

const Home=()=>{
    return(
        <>
        <div className="home-main"></div>
            <div className="home-summary">
                <h1 className="home-heading">Yashika Gora</h1>
                <p className="home-para">
                Hardworking and a diligent individual who has creative mind and is an aspiring web 
developer. I am well versed with HTML, CSS, JS, React.js , OOPS concepts and Core Java. 
I also have created project using HTML CSS JS and React.js. I am an energetic person with 
extensive communication skills who is eager to learn something new everyday and apply my 
knowledge in real life projects.
                </p>
            </div>
            <div className="home-img">
            <img src={Web} alt="WEB DEVELOPER" className="home-img-web"/>
            </div>
        </>
    );
}

export default Home;