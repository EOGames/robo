import React, { Component } from "react";
import card from './card.css'
import { robots_lastName, robots_name } from "./robotNames";

let email;
let num;
let l_num;
let name;
let link;

let old_num;
let old_l_num;

class Card extends Component
{
    render()
    {
        return (
            <div>
                {GetRandomName()}
                <img className="card_bg" src= {link}  alt="just a pic here"/> 
                
                    <h2 className="center">{name}</h2>
                    <p className="center">{email}</p>
                    <h4 className="center">Id:{this.props.id}</h4>
                    
                    
            </div>
        );
    }
}
export default Card;

function CreateRandomString()
{
    return 'https://robohash.org/test'+Math.trunc(Math.random()*100) + '?200x200';
}

function GetRandomName()
{
    
    
    num = Math.trunc(Math.random()*robots_name.length);

    if (num === old_num)
    {
        num = Math.trunc(Math.random()*robots_name.length);
    }
    
    l_num = Math.trunc(Math.random()*robots_lastName.length);

    if (l_num === old_l_num)
    {
        l_num = Math.trunc(Math.random()*robots_lastName.length);
    }
    name =robots_name[num] +' ' +robots_lastName[l_num];
    
    email = robots_name[num]+robots_lastName[l_num]+'@'+'useless.com';
    link = 'https://robohash.org/'+name+email
    
    old_num = num;
    old_l_num = l_num;
    //console.log(e);
    //return name;
}



