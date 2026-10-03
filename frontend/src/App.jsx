import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";

function Home() {
  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
          Medi<span>Care+</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/doctors">Doctors</Link>
          <a href="#services">Services</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <div className="nav-search">
            🔍
            <input type="text" placeholder="Search..." />
          </div>

          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">

          <div className="hero-badge">
            🏥 Trusted Healthcare Platform
          </div>

          <h1>
            Find the Right Doctor,
            <br />
            <span>Book Your Care.</span>
          </h1>

          <p>
            Find trusted doctors, check available appointments,
            and manage your healthcare easily from one place.
          </p>

          {/* Main Search */}
          <div className="main-search">
            <span>🔍</span>
            <input
              type="text"
              placeholder="Search doctor, treatment or specialization..."
            />
            <button>Search</button>
          </div>

          <div className="hero-buttons">
            <Link to="/login">
              <button className="primary-btn">
                Book an Appointment →
              </button>
            </Link>

            <a href="#services">
              <button className="secondary-btn">
                Explore Services
              </button>
            </a>
          </div>

        </div>

        <div className="hero-visual">
          <div className="doctor-card">
            <div className="doctor-avatar">👨‍⚕️</div>
            <h3>Quality Healthcare</h3>
            <p>Care you can trust</p>

            <div className="doctor-status">
              <span>●</span> Doctors Available
            </div>
          </div>

          <div className="floating-card appointment-card">
            📅
            <div>
              <strong>Easy Booking</strong>
              <small>Book in a few clicks</small>
            </div>
          </div>

          <div className="floating-card secure-card">
            🔒
            <div>
              <strong>Secure</strong>
              <small>Your data is protected</small>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="section" id="services">
        <div className="section-heading">
          <span>OUR SERVICES</span>
          <h2>Healthcare at Your Fingertips</h2>
          <p>Find the care you need quickly and easily.</p>
        </div>

        <div className="specialization-grid">

          <div className="specialization-card">
            <div>❤️</div>
            <h3>Cardiology</h3>
            <p>Heart & cardiovascular care</p>
          </div>

          <div className="specialization-card">
            <div>🧠</div>
            <h3>Neurology</h3>
            <p>Brain & nervous system care</p>
          </div>

          <div className="specialization-card">
            <div>🦷</div>
            <h3>Dentistry</h3>
            <p>Dental & oral healthcare</p>
          </div>

          <div className="specialization-card">
            <div>👁️</div>
            <h3>Eye Care</h3>
            <p>Vision & eye treatment</p>
          </div>

          <div className="specialization-card">
            <div>🦴</div>
            <h3>Orthopedics</h3>
            <p>Bones & joint care</p>
          </div>

          <div className="specialization-card">
            <div>🩺</div>
            <h3>General Physician</h3>
            <p>General health consultation</p>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="section how-section" id="about">

        <div className="section-heading">
          <span>HOW IT WORKS</span>
          <h2>Book Your Appointment Easily</h2>
          <p>Three simple steps to get started.</p>
        </div>

        <div className="steps">

          <div className="step">
            <div className="step-number">01</div>
            <h3>Find a Doctor</h3>
            <p>
              Search doctors by name or specialization.
            </p>
          </div>

          <div className="step">
            <div className="step-number">02</div>
            <h3>Choose a Slot</h3>
            <p>
              Select an available date and time.
            </p>
          </div>

          <div className="step">
            <div className="step-number">03</div>
            <h3>Book Appointment</h3>
            <p>
              Confirm your appointment and track its status.
            </p>
          </div>

        </div>
      </section>

      {/* Features */}
      <section className="features-section">

        <div className="feature-text">
          <span>WHY MEDICARE+</span>
          <h2>Healthcare Made Simple</h2>

          <p>
            Our platform makes doctor appointment management
            simple, organized and convenient for patients,
            doctors and administrators.
          </p>

          <div className="feature-list">
            <div>✓ Easy appointment booking</div>
            <div>✓ Doctor availability management</div>
            <div>✓ Appointment status tracking</div>
            <div>✓ Secure user management</div>
          </div>
        </div>

        <div className="feature-box">
          <div className="big-icon">🏥</div>
          <h3>Complete Healthcare Management</h3>
          <p>
            Patients, doctors and administrators can manage
            their healthcare activities from one platform.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">
          Medi<span>Care+</span>
        </div>

        <p>
          Healthcare Appointment & Patient Management System
        </p>

        <p className="copyright">
          © 2026 MediCare+. All rights reserved.
        </p>
      </footer>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;