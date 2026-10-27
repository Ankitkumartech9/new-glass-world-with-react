import { useState } from "react";
import "./App.css";

const services = [
  {
    icon: "▧",
    title: "Architectural Glass",
    text: "Beautiful, high-performance glass solutions designed around your space.",
  },
  {
    icon: "⌗",
    title: "Curtain Wall Systems",
    text: "Striking facades that bring more light, efficiency, and character.",
  },
  {
    icon: "◇",
    title: "Windows & Doors",
    text: "Thoughtfully crafted openings, expertly installed to last.",
  },
];

const projects = [
  {
    name: "The Summit Residence",
    type: "Residential · New York",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Northline Offices",
    type: "Commercial · Chicago",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Cityview Tower",
    type: "Commercial · Boston",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Lakeside House",
    type: "Residential · Lake Tahoe",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "The Glasshouse",
    type: "Hospitality · Portland",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=85",
  },
  {
    name: "Harbor Pavilion",
    type: "Cultural · Seattle",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=900&q=85",
  },
];

const testimonials = [
  {
    quote:
      "They took a challenging design and made it feel effortless. The attention to detail is something we notice every single day.",
    name: "Olivia Bennett",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    quote:
      "A fantastic partner from the first drawing to the final walkthrough. The finished facade completely transformed the building.",
    name: "Marcus Chen",
    role: "Project Architect",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&h=100&q=80",
  },
  {
    quote:
      "Professional, thoughtful, and genuinely great at what they do. We couldn't be happier with the result.",
    name: "Sofia Ramirez",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&h=100&q=80",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M4 10h11M10 5l5 5-5 5" />
    </svg>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="topline">
        <div className="container topline-inner">
          <span>Thoughtful glass. Lasting impact.</span>
          <a href="tel:+12125550148">Call us: (212) 555-0148</a>
        </div>
      </div>

      <header className="site-header">
        <div className="container nav-inner">
          <a className="brand" href="#home" aria-label="Glass Experts home" onClick={closeMenu}>
            <span className="brand-mark" aria-hidden="true">
              G<span>E</span>
            </span>
            <span className="brand-name">
              GLASS<span>EXPERTS</span>
              <small>DESIGN · CRAFT · INSTALL</small>
            </span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>
          <nav className={menuOpen ? "main-nav is-open" : "main-nav"} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Our work</a>
            <a href="#company" onClick={closeMenu}>About us</a>
            <a href="#contact" onClick={closeMenu}>Contact</a>
            <a className="nav-cta" href="#contact" onClick={closeMenu}>
              Get a free quote <ArrowIcon />
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-shade" />
          <div className="container hero-content">
            <p className="eyebrow eyebrow-light"><span /> BUILT AROUND YOUR VISION</p>
            <h1>Glass that<br />opens up <em>possibility.</em></h1>
            <p className="hero-copy">
              We bring architecture to life with exceptional glass, expert
              craftsmanship, and a partner you can count on.
            </p>
            <div className="hero-actions">
              <a className="button button-blue" href="#projects">Explore our work <ArrowIcon /></a>
              <a className="text-link light-link" href="#services">Discover what we do <span>↓</span></a>
            </div>
          </div>
          <div className="hero-note">
            <span className="hero-note-line" />
            <span>Light changes everything.</span>
          </div>
          <a className="scroll-cue" href="#services" aria-label="Scroll to services"><span /></a>
        </section>

        <section className="services section-pad" id="services">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow"><span /> WHAT WE DO</p>
              <h2>Our <em>Services</em></h2>
              <p>From the first sketch to the finishing touch, we make the complex feel simple.</p>
            </div>
            <div className="service-grid">
              {services.map((service, index) => (
                <a className={`service-card${index === 1 ? " featured" : ""}`} href="#contact" key={service.title}>
                  <span className="service-icon">{service.icon}</span>
                  <span className="service-number">0{index + 1}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <span className="card-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="why-section">
          <div className="container why-inner">
            <div className="why-intro">
              <p className="eyebrow eyebrow-light"><span /> THE DIFFERENCE IS CLEAR</p>
              <h2>Why work<br />with <em>us?</em></h2>
              <p>Good glass is just the beginning. Great people make all the difference.</p>
              <a className="text-link light-link" href="#company">Get to know us <ArrowIcon /></a>
            </div>
            <div className="why-grid">
              <article className="why-item">
                <span className="why-icon">✳</span>
                <div><h3>Made for your project</h3><p>Every solution is tailored to your vision, not pulled off a shelf.</p></div>
              </article>
              <article className="why-item">
                <span className="why-icon">⌂</span>
                <div><h3>Craft you can trust</h3><p>Skilled hands, considered details, and quality that stands the test of time.</p></div>
              </article>
              <article className="why-item">
                <span className="why-icon">◷</span>
                <div><h3>On time, together</h3><p>Clear communication and a team that respects your schedule.</p></div>
              </article>
              <article className="why-item">
                <span className="why-icon">↗</span>
                <div><h3>Better by design</h3><p>Beautiful, energy-conscious products that work as hard as they look.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section className="projects section-pad" id="projects">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <p className="eyebrow"><span /> A FEW FAVORITES</p>
                <h2>Our <em>Projects</em></h2>
                <p>Every project tells a story. Here are a few we're proud to be part of.</p>
              </div>
              <a className="button button-outline" href="#contact">Start a project <ArrowIcon /></a>
            </div>
            <div className="project-grid">
              {projects.map((project, index) => (
                <a className="project-card" href="#contact" key={project.name}>
                  <img src={project.image} alt={project.name} loading="lazy" />
                  <span className="project-overlay" />
                  <span className="project-index">0{index + 1}</span>
                  <span className="project-info"><span>{project.type}</span><strong>{project.name}</strong></span>
                  <span className="project-arrow"><ArrowIcon /></span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="company-section" id="company">
          <div className="container company-inner">
            <div className="company-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1200&q=85"
                alt="Modern glass-fronted architecture in warm evening light"
                loading="lazy"
              />
              <div className="image-caption"><span>01 / 04</span><span>Made to let the light in</span></div>
            </div>
            <div className="company-copy">
              <p className="eyebrow"><span /> A LITTLE ABOUT US</p>
              <h2>Good work.<br /><em>Good people.</em><br />Great glass.</h2>
              <p>
                We’re an independent team of glass specialists who believe the
                best spaces start with the right people around the table.
                For more than 18 years, we’ve helped architects, builders,
                and homeowners turn ambitious ideas into places people love.
              </p>
              <a className="button button-blue" href="#contact">Our story <ArrowIcon /></a>
              <div className="stats-row">
                <div><strong>18<span>+</span></strong><small>Years of craft</small></div>
                <div><strong>240<span>+</span></strong><small>Projects complete</small></div>
                <div><strong>98<span>%</span></strong><small>Happy partners</small></div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials section-pad">
          <div className="container">
            <div className="section-heading centered">
              <p className="eyebrow"><span /> WORD GETS AROUND</p>
              <h2>Kind words from<br /><em>good company.</em></h2>
            </div>
            <div className="testimonial-grid">
              {testimonials.map((testimonial) => (
                <article className="testimonial-card" key={testimonial.name}>
                  <span className="quote-mark">“</span>
                  <p className="quote-text">{testimonial.quote}</p>
                  <div className="review-stars" aria-label="5 out of 5 stars">★★★★★</div>
                  <div className="reviewer">
                    <img src={testimonial.image} alt="" loading="lazy" />
                    <span><strong>{testimonial.name}</strong><small>{testimonial.role}</small></span>
                  </div>
                </article>
              ))}
            </div>
            <p className="review-source">Rated <strong>4.9 out of 5</strong> by the people we work with <span>★★★★★</span></p>
          </div>
        </section>

        <section className="cta-section">
          <div className="container cta-inner">
            <div className="cta-copy">
              <p className="eyebrow"><span /> LET'S MAKE SOMETHING LAST</p>
              <h2>Your vision.<br />Our expertise.<br /><em>One remarkable result.</em></h2>
              <p>Have a project in mind? We’d love to hear what you’re dreaming up.</p>
              <a className="button button-blue" href="#contact">Tell us about it <ArrowIcon /></a>
            </div>
            <div className="cta-image">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85"
                alt="Contemporary glass office tower"
                loading="lazy"
              />
              <span className="cta-image-label">Thoughtfully built. Beautifully finished.</span>
            </div>
          </div>
        </section>

        <section className="contact-strip" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow"><span /> HAVE A PROJECT IN MIND?</p>
              <h2>We’d love to hear<br />what you’re <em>dreaming up.</em></h2>
            </div>
            <div className="contact-action">
              <p>Tell us a little about your project and our team will be in touch.</p>
              <a className="button button-blue" href="mailto:hello@glassexperts.com">Let’s talk <ArrowIcon /></a>
              <a className="contact-email" href="mailto:hello@glassexperts.com">hello@glassexperts.com</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-main">
          <div className="footer-brand">
            <a className="brand brand-footer" href="#home">
              <span className="brand-mark" aria-hidden="true">G<span>E</span></span>
              <span className="brand-name">GLASS<span>EXPERTS</span><small>DESIGN · CRAFT · INSTALL</small></span>
            </a>
            <p>Making space for better ideas,<br />one pane at a time.</p>
          </div>
          <div className="footer-column"><strong>Explore</strong><a href="#services">Services</a><a href="#projects">Our work</a><a href="#company">About us</a></div>
          <div className="footer-column"><strong>Get in touch</strong><a href="tel:+12125550148">(212) 555-0148</a><a href="mailto:hello@glassexperts.com">Email our team</a><span>New York · Working everywhere</span></div>
          <div className="footer-note"><span>GOOD THINGS<br />ARE CLEAR.</span><span className="footer-note-mark">GE</span></div>
        </div>
        <div className="container footer-bottom">
          <span>© 2025 Glass Experts. Made with care.</span>
          <div><a href="#contact">Privacy</a><a href="#contact">Instagram ↗</a><a href="#home">Back to top ↑</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
