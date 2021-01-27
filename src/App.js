import BlogPost from "./BlogPost";
import Aside from "./Aside";
import PopularPosts from "./PopularPosts";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <div class="container"> 
    
      <Header/>
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
        
        
        <Footer/> 
         
    </div>
  );
}

export default App;
