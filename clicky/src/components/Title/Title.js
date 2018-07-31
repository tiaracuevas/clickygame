import React from "react";
import "./Title.css";

const Title = (props) => (
<div className="header">
    <div>
        <h2>Clicky Game</h2>
    </div>
    <div>
        <h2>{props.message}</h2>
    </div>
    <div>
        <h2>Score: {props.score}</h2>
    </div>
</div>)
       

export default Title;