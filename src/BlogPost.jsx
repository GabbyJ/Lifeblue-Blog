import React from 'react'
import {NavLink} from "react-router-dom"

export default function BlogPost() {
    return (
        <div  class="blog-post">
            <div  class="blog-img">
                <img src="https://via.placeholder.com/350" alt="blog post"/>
            </div>
            <div  class="blog-info">
                <div  class="blog-date">
                <span>Sunday</span>
                <span>January 24, 2021</span>
                </div>
                <h1  class="blog-title">Blog Post Title</h1>
                <p class="blog-summary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <NavLink to="/blog-article" className="read-more">Read More</NavLink>
                
            </div>
        </div>
    )
}
