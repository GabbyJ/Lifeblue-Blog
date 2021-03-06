import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';


export default function Aside() {
    return (
        <aside>
            <h2>Archive</h2>
            <details>
                <summary><span className="article-month">2021</span> <span className="dots">........................</span> (3)</summary>
                <details>
                    <summary><span className="article-month">January</span> (3)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 3 title that's really long because why not and I like stuff like this</p>
                    <p>Blog post 3 title</p>
                </details>
            </details>
            <details>
                <summary><span className="article-month">2020</span> <span className="dots">........................</span> (17)</summary>
                <details>
                    <summary><span className="article-month">December</span> (6)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title that's really long because why not and I like stuff like this</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                </details>
                <details>
                    <summary><span className="article-month">November</span> (4)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                </details>
                <details>
                    <summary><span className="article-month">October</span> (7)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                    <p>Blog post 7 title</p>
                </details>
            </details>
            <details>
                <summary><span className="article-month">2019</span> <span className="dots">........................</span> (22)</summary>
                <details>
                    <summary><span className="article-month">December</span> (6)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title that's really long because why no and I like stuff like this</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                </details>
                <details>
                    <summary><span className="article-month">November</span> (4)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                </details>
                <details>
                    <summary><span className="article-month">October</span> (7)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                    <p>Blog post 7 title</p>
                </details>
            </details>
            <details>
                <summary><span className="article-month">2018</span> <span className="dots">........................</span> (14)</summary>
                <details>
                    <summary><span className="article-month">December</span> (6)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title that's really long because why no and I like stuff like this</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                </details>
                <details>
                    <summary><span className="article-month">November</span> (4)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                </details>
                <details>
                    <summary><span className="article-month">October</span> (7)</summary>
                    <p>Blog post 1 title</p>
                    <p>Blog post 2 title</p>
                    <p>Blog post 3 title</p>
                    <p>Blog post 4 title</p>
                    <p>Blog post 5 title</p>
                    <p>Blog post 6 title</p>
                    <p>Blog post 7 title</p>
                </details>
            </details>
            <form class="form">
                <label for="subscribe1">Subscribe to Our Newsletter</label><br/>
                <input type="email" id="subscribe1" name="subscribe" placeholder="jane_doe@example.com"/>
                <input type="submit" value="Submit"/>
            </form>
            <div className="socials"> 
                <FaFacebookF className="social"/><FaTwitter className="social"/><FaInstagram className="social"/><FaMediumM className="social"/>
            </div> 
      </aside>
    )
}
