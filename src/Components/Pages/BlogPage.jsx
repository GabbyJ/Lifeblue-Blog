import React from 'react';
import BlogPost from "../Blog-Parts/BlogPost";
import Aside from "../Aside";

export default function BlogPage() {
    return (
        <div className="container blogPage">
        <div className="blogs">
            <BlogPost/>
        </div>
        <Aside/>
        </div>
    )
}
