import React, { Component } from "react";
import './robo.css';
import './roboNames.js';
import { firstNames, lastNames } from "./roboNames.js";
let name;
let f_name;
let l_name;
let email;
let link;

class Robo extends Component
{  
    render()
    {
        return(
            
            <div className="card">
                {CreateRoboInfo()}
                <img src= {link} alt="pic" />
                <h4>Name: {name}  <br></br>
                    Email:{email} <br></br>
                    Id:{this.props.id}
                    </h4>
            </div>
        );
    }
}
export default Robo;

function CreateRoboInfo()
{
    f_name = firstNames[Math.trunc(Math.random()*firstNames.length)];
    l_name = lastNames[Math.trunc(Math.random()*lastNames.length)];
    email = f_name+l_name+"@noobmail.service";

    name = f_name+' '+l_name;

    link = "https://robohash.org/"+ name+"?200x200";
}