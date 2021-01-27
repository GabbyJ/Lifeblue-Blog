import React from 'react';
import BlogPost from "./BlogPost";
import PopularPosts from "./PopularPosts";
import Aside from "./Aside";

export default function Home() {
    return (
        <div className="container">
            <section class="featured"><img src="https://via.placeholder.com/3000x800.png?text=Featured Blog" alt=""/> </section>
            <Aside/>
            <div className="blogs">
                <h2 className="popular">Recent Posts</h2>
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
