
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">

      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="hero-content">
          <p className="eyebrow">WELCOME TO THE FUTURE</p>

          <h1>
            Discover
            <br />
            <span>Something Extraordinary.</span>
          </h1>

          <p className="hero-description">
            Experience the perfect combination of innovation,
            beautiful design and powerful performance.
            Find the smartphone that matches your lifestyle.
          </p>

          <div className="hero-buttons">
            <Link to="/mobiles" className="primary-button">
              Explore Collection ↗
            </Link>

            <Link to="/mobiles" className="secondary-button">
              Discover More
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <h3>05+</h3>
              <p>Popular Brands</p>
            </div>
            <div>
              <h3>50+</h3>
              <p>Smartphones</p>
            </div>
            <div>
              <h3>100%</h3>
              <p>Easy Browsing</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-circle"></div>

          <img
            src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=90"
            alt="Premium smartphone"
            className="hero-phone-image"
          />

          <div className="floating-label">
            <span>THE NEW EXPERIENCE</span>
            <strong>Innovation meets elegance.</strong>
          </div>
        </div>
      </section>

      {/* BRAND SECTION */}
      <section className="brands-section">
        <p>EXPLORE THE BRANDS YOU LOVE</p>

        <div className="brands-list">
          <span>APPLE</span>
          <span>SAMSUNG</span>
          <span>ONEPLUS</span>
          <span>VIVO</span>
          <span>XIAOMI</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="intro-section">
        <div>
          <p className="eyebrow">A WORLD OF POSSIBILITIES</p>

          <h2>
            Technology that
            <br />
            moves with you.
          </h2>
        </div>

        <div className="intro-content">
          <p>
            Smartphones are more than just devices.
            They help us connect, create, capture memories
            and explore new possibilities. Discover a
            collection designed for your everyday needs.
          </p>

          <Link to="/mobiles">Explore all smartphones ↗</Link>
        </div>
      </section>

      {/* FEATURED COLLECTION */}
      <section className="collection-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">OUR COLLECTION</p>
            <h2>Find your perfect match.</h2>
          </div>

          <Link to="/mobiles">View All ↗</Link>
        </div>

        <div className="collection-grid">

          <Link to="/mobiles" className="collection-card">
            <div className="collection-image">
              <img
                src="https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=700&q=85"
                alt="Premium smartphone collection"
              />
            </div>
            <div className="collection-info">
              <span>01 / PREMIUM</span>
              <h3>Flagship Phones</h3>
              <p>Powerful technology and premium design.</p>
              <b>Explore Collection ↗</b>
            </div>
          </Link>

          <Link to="/mobiles" className="collection-card">
            <div className="collection-image collection-green">
              <img
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=700&q=85"
                alt="Modern smartphone"
              />
            </div>
            <div className="collection-info">
              <span>02 / INNOVATION</span>
              <h3>Smart Technology</h3>
              <p>Discover features made for your lifestyle.</p>
              <b>Explore Collection ↗</b>
            </div>
          </Link>

          <Link to="/mobiles" className="collection-card">
            <div className="collection-image collection-gold">
              <img
                src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=700&q=85"
                alt="Elegant mobile phone"
              />
            </div>
            <div className="collection-info">
              <span>03 / PERFORMANCE</span>
              <h3>Everyday Essentials</h3>
              <p>Find the right phone for every moment.</p>
              <b>Explore Collection ↗</b>
            </div>
          </Link>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="why-section">
        <div className="why-heading">
          <p className="eyebrow">WHY MOBILE STORE?</p>
          <h2>A better smartphone shopping experience.</h2>
          <p>
            Everything you need to explore and discover
            your next smartphone, all in one place.
          </p>
        </div>

        <div className="benefits-grid">
          <div className="benefit-card">
            <span>01</span>
            <div className="benefit-icon">✦</div>
            <h3>Premium Collection</h3>
            <p>
              Explore smartphones from popular
              brands and discover new models.
            </p>
          </div>

          <div className="benefit-card">
            <span>02</span>
            <div className="benefit-icon">◇</div>
            <h3>Easy Comparison</h3>
            <p>
              Browse phone details, features
              and prices with ease.
            </p>
          </div>

          <div className="benefit-card">
            <span>03</span>
            <div className="benefit-icon">♡</div>
            <h3>Your Favourites</h3>
            <p>
              Save your favourite smartphones
              and find them whenever you need.
            </p>
          </div>

          <div className="benefit-card">
            <span>04</span>
            <div className="benefit-icon">⌕</div>
            <h3>Discover More</h3>
            <p>
              Explore detailed smartphone
              information in one place.
            </p>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY SECTION */}
      <section className="technology-section">
        <div className="technology-image">
          <img
            src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1000&q=90"
            alt="Modern mobile technology"
          />
        </div>

        <div className="technology-content">
          <p className="eyebrow">DESIGNED FOR YOUR WORLD</p>

          <h2>
            More than a phone.
            <br />
            It's your everyday companion.
          </h2>

          <p>
            Capture beautiful memories, stay connected,
            enjoy entertainment and get more done.
            Discover smartphones that make every
            experience better.
          </p>

          <Link to="/mobiles" className="text-link">
            Discover your next smartphone ↗
          </Link>
        </div>
      </section>

      {/* SHOPPING BENEFITS */}
      <section className="shopping-section">
        <div className="shopping-heading">
          <p className="eyebrow">MADE FOR YOU</p>
          <h2>Your shopping journey, simplified.</h2>
        </div>

        <div className="shopping-grid">
          <div>
            <span>01</span>
            <h3>Browse</h3>
            <p>Explore a variety of smartphones.</p>
          </div>

          <div>
            <span>02</span>
            <h3>Compare</h3>
            <p>Check features and prices.</p>
          </div>

          <div>
            <span>03</span>
            <h3>Choose</h3>
            <p>Find the smartphone you love.</p>
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section className="final-banner">
        <p className="eyebrow">YOUR NEXT TECHNOLOGY EXPERIENCE</p>

        <h2>
          Find the phone
          <br />
          that feels right.
        </h2>

        <p>
          Explore the collection. Discover the possibilities.
        </p>

        <Link to="/mobiles" className="primary-button">
          Shop Smartphones ↗
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="home-footer">
        <div>
          <h2>MOBILE<span>STORE.</span></h2>
          <p>Technology. Innovation. Elegance.</p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/mobiles">Mobiles</Link>
          <Link to="/favorites">Favorites</Link>
        </div>

        <p className="copyright">
          © 2026 Mobile Store. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

export default Home;
