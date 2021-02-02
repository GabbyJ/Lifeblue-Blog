import React from 'react';
import {NavLink} from "react-router-dom";
import {cards} from "../../lists.js";


export function Card(props){
    return(
        
        <div  class="blog-post" id={props.id}>
            <div  class="blog-img">
                <img src={props.image} alt={props.alt}/>
            </div>
            <div  class="blog-info">
                <div  class="blog-date">
                    <span>{props.day}</span>
                    <span>{props.date}</span>
                </div>
                <h1  class="blog-title">{props.title}</h1>
                <p class="blog-summary">
                {props.text}
                </p>
                <NavLink to={props.link} className="read-more">Read More</NavLink>  
            </div>
        </div>
    );
}

export function mapCards(oneCard){
    return <Card
    key = {oneCard.id}
    image = {oneCard.image}
    alt = {oneCard.alt}
    title = {oneCard.title}
    day = {oneCard.day}
    date = {oneCard.date}
    text = {oneCard.text}
    link = {oneCard.link}
    />
}

export default function BlogPost() {
    return (
        <div className="card">
            {cards.map(mapCards)}
        </div>
    )
}