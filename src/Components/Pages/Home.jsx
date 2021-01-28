import React from 'react';
import BlogPost from "../Blog-Parts/BlogPost";
import PopularPosts from "../Popular-Section/PopularPosts";
import Aside from "../Aside";

export default function Home() {
    return (
        <div className="container">
            <section class="featured">
                <img src="https://via.placeholder.com/3000x800.png?text=Featured Blog Image" alt="Featured placeholder"/> 
                <p>Blog Title Goes Here for the Featured Post</p>
            </section>
            <Aside/>
            <div className="blogs">
                <h2 className="popular">Recent Posts</h2>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                    <BlogPost/>
                <div className="popular-section">
                    <h2 className="popular">Popular Posts</h2>
                    <PopularPosts/>
                </div>
            </div>
        </div>
    )
}
