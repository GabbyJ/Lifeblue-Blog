import React from 'react'

export default function Aside() {
    return (
        <aside>
            <h2>Archive</h2>
            <details>
                <summary><span className="article-month">January</span> (3)</summary>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title</p>
            </details>
            <details>
                <summary><span className="article-month">December</span> (6)</summary>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title that's really long because why no and I like stuff like this</p>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title</p>
            </details>
            <details>
                <summary><span className="article-month">November</span> (4)</summary>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title</p>
                <p>Blog post 3 title</p>
            </details>
            <details>
                <summary><span className="article-month">October</span> (7)</summary>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title</p>
                <p>Blog post 1 title</p>
                <p>Blog post 2 title</p>
                <p>Blog post 3 title</p>
                <p>Blog post 3 title</p>
            </details>
            
            <form class="form">
                <label for="subscribe">Subscribe to Newsletter</label><br/>
                <input type="email" id="subscribe" name="subscribe" placeholder="jane_doe@example.com"/>
                <input type="submit" value="Submit"/>
            </form>
      </aside>
    )
}
