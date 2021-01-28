import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Trips from "./Trips";
import Footer from "./Footer";
import Header from "./Header";
import { FaEnvelopeOpenText } from 'react-icons/fa';
import BlogPage from "./BlogPage";
import BlogArticle from "./BlogArticle"
import { FaFacebookSquare, FaFacebookF, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';

function App() {
  return (
    <Router>
    <div class="container"> 
    
      <Header/>
      
      <Switch>
          
          <Route exact path="/blog" component={BlogPage}/>
          <Route exact path="/blog-article" component={BlogArticle}/>
          <Route exact path="/trips" component={Trips}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
          <Route exact path="/" component={Home}/>
          
        </Switch>
      
        <form class="bottom-form">
                <FaEnvelopeOpenText className="form-icon"/>
                <label for="subscribe">Subscribe to Our Newsletter</label><br/>
                <input type="email" id="subscribe" name="subscribe" placeholder="jane_doe@example.com"/>
                <input type="submit" value="Submit"/>
                <div className="socials"> 
            <FaFacebookF className="social"/><FaTwitter className="social"/><FaInstagram className="social"/><FaMediumM className="social"/>
            </div> 
            </form>
            
        <Footer/> 
         
    </div>
    
    </Router>
  );
}

export default App;
