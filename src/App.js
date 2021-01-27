import BlogPost from "./BlogPost";
import Aside from "./Aside";
import Footer from "./Footer";
import Header from "./Header";

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
       
        

             
        
    
        <div class="popular">Popular with tabs</div> 
        <div class="div10">Blog Post 1</div> 
        <div class="div11">Blog Post 2</div> 
        <div class="div12">Blog Post 3</div>
        
         
        
        <Footer/> 
         
    </div>
  );
}

export default App;
