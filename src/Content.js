import {useState} from "react"
const laptop = new URL('./assets/resources.svg', import.meta.url)
const screens = new URL('./assets/screens.svg', import.meta.url)

const Content = () => {

  const [searchText, setSearchText] = useState('');

  let slideIndex = 1;
  function showSlides() {
    console.log(slideIndex)
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
      slideIndex = 1
    }    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    
    setTimeout(showSlides, 10000); // Change image every 10 seconds
  }
  
  setTimeout(showSlides, 1000);

  return (
    <>
      <section className="river-nav">
        {/* <img src={laptop} alt="Laptop with a play button" aria-hidden="true" /> */}
        {/* <article>
          <h1>
            <small>Environ Contentful</small>
            React Contentful Homepage Starter
          </h1>
          <p>
            Clone, edit, and customize this starter to build your own React app.
          </p>
          <div className="buttons">
            <button className="button-large">
              <a href="https://www.contentful.com/contentful-and-javascript-tutorial">
                Read more
              </a>
            </button>

            <button className="button-large button-secondary">
              <a href="https://github.com/contentful/react-starter">GitHub</a>
            </button>
          </div>
        </article> */}
        <img className="environ-logo" src="https://d2qi8b6mbfr055.cloudfront.net/uqkH/Logo.png" alt="environment"></img>
        <input type="text" value={searchText} name="searchText" onChange={(e) => setSearchText(e.target.value)} className="search-input" placeholder="Find a product (skin type, concern, brand name, product name)"></input>
      </section>
      <section className="river">
      <ul>
        <li><a href="#home">About Environ</a></li>
        <li><a href="#news">Home Care</a></li>
        <li><a href="#contact">Where To Buy</a></li>
        <li><a href="#about">Facial Treatment</a></li>
        <li><a href="#about">Search</a></li>
        <li><a href="#about">FAQ</a></li>
        <li><a href="#about">For New Users</a></li>
        <li><a href="#about">Benefits</a></li>
      </ul>
      </section>
      <section className="river">
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            <img src="https://d2qi8b6mbfr055.cloudfront.net/rprW/20221028_EV_brabd_site_banner_PC01.webp" />
            <div className="text">Caption Text</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            <img src="https://d2qi8b6mbfr055.cloudfront.net/qKY4/top_stepup_start-low_go-slow.webp"  />
            <div className="text">Caption Two</div>
          </div>
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
            <img src="https://d2qi8b6mbfr055.cloudfront.net/cTQ7/20221028_EV_brabd_site_banner_PC02.webp" />
            <div className="text">Caption Three</div>
          </div>
        </div>
        <br />
        <div>
          <span className="dot"></span> 
          <span className="dot"></span> 
          <span className="dot"></span> 
        </div> 

      </section>
      <section className="section-subscribe">
        <h3 className="h3-subscribe">Subcribe to get upto 50% Off on Skin Care Products</h3>
        <button className="button-subscribe">Subscribe</button>
      </section>
    </>
  )
}

export default Content
