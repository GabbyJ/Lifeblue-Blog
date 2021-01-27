function App() {
  return (
    <div className="container">
      <header>
        <h1>Company Blog</h1>
      </header>
      <main className="row">
        <section className="left-column">
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Jan, 24, 2021</h5>
            <img src="https://via.placeholder.com/350" alt="blog placeholder"/>
            <p>Some text...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="card">
            <h2>TITLE HEADING</h2>
            <h5>Title description, Jan, 24, 2021</h5>
            <img src="https://via.placeholder.com/350" alt="blog placeholder"/>
            <p>Some text...</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </section>
        <aside className="right-column">
          <h2>Archive</h2>
          <div className="card">
            <h3>Popular Posts</h3>
            <img src="https://via.placeholder.com/150" alt="blog placeholder"/>
            <img src="https://via.placeholder.com/150" alt="blog placeholder"/>
            <img src="https://via.placeholder.com/150" alt="blog placeholder"/>
          </div>
          <div className="card">
            <form>
              <label for="subscribe">Subscribe to Newsletter</label><br/>
              <input type="email" id="subscribe" name="subscribe"/>
              <input type="submit" value="Submit"/>
            </form>
          </div>
        </aside>
      </main>
      <footer>©2021 Company Name</footer>
    </div>
  );
}

export default App;
