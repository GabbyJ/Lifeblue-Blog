import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import BlogPost from "./BlogPost";
import Footer from "./Footer";
import Header from "./Header";
import { FaEnvelopeOpenText } from 'react-icons/fa';

function App() {
  return (
    <Router>
    <div class="container"> 
    
      <Header/>
      
      <Switch>
          <Route path="/blog">
            <BlogPost />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          
        </Switch>
      
        <form class="bottom-form">
                <FaEnvelopeOpenText className="form-icon"/>
                <label for="subscribe">Subscribe to Our Newsletter</label><br/>
                <input type="email" id="subscribe" name="subscribe" placeholder="jane_doe@example.com"/>
                <input type="submit" value="Submit"/>
            </form>
        
        <Footer/> 
         
    </div>
    
    </Router>
  );
}

export default App;
