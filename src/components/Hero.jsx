import "./Hero.css";

function Hero() {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>My Project Gallery</h1>
        <p>Explore my latest frontend and full stack projects</p>
        <a href="#projects" className="btn">
          View Projects
        </a>
      </div>
    </header>
  );
}

export default Hero;
