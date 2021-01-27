import BlogPost from "./BlogPost";
import Aside from "./Aside";
import PopularPosts from "./PopularPosts";
import Footer from "./Footer";
import Header from "./Header";
import PopularCarousel from "./PopularCarousel";

function App() {
  return (
    <div class="container"> 
    
      <Header/>
      <section class="featured"><img src="https://via.placeholder.com/3000x800.png?text=Featured Blog" alt=""/> </section>
      <Aside/>
      <div className="blogs">
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
          <BlogPost/>
        </div>
       <PopularPosts/>
        
         
        
        <Footer/> 
         
    </div>
  );
}

export default App;
