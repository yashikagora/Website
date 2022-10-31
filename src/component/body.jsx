import React from "react";
import Detail from "../pages/detail";
import Projects from "../pages/projects";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

const Body=()=>{
    return (
        <div className="app-main">        
            <Routes>
            <Route extact path="/" element={<Detail/>}/>
              <Route extact path="/projects" element={<Projects/>}/>
            </Routes>
    </div>
    );
}

export default Body;