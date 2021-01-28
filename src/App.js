import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Trips from "./Components/Pages/Trips";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { FaEnvelopeOpenText } from 'react-icons/fa';
import BlogPage from "./Components/Pages/BlogPage";
import BlogArticle from "./Components/Blog-Parts/BlogArticle"
import { FaFacebookF, FaTwitter, FaInstagram, FaMediumM } from 'react-icons/fa';

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
        <label for="subscribe2">Subscribe to Our Newsletter</label><br/>
        <input type="email" id="subscribe2" name="subscribe" placeholder="jane_doe@example.com"/>
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
