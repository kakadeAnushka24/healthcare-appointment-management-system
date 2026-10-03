import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import "./App.css";

function Home() {
  return (
    <div className="app">

      <nav className="navbar">
        <div className="logo">
          Medi<span>Care+</span>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <Link to="/login">
            <button className="login-btn">Login</button>
          </Link>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>
            Your Health,
            <br />
            <span>Our Priority.</span>
          </h1>

          <p>
            Book appointments with trusted doctors easily
            and manage your healthcare anytime, anywhere.
          </p>

          <Link to="/login">
            <button className="hero-btn">
              Book an Appointment
            </button>
          </Link>
        </div>

        <div className="hero-card">
          <div className="doctor-icon">👨‍⚕️</div>
          <h2>Quality Healthcare</h2>
          <p>
            Connect with doctors and get the care you need.
          </p>
        </div>
      </section>

      <section className="section" id="services">
        <h2>Our Services</h2>
        <p>Simple and convenient healthcare services.</p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">📅</div>
            <h3>Easy Appointment</h3>
            <p>Book your doctor appointment quickly.</p>
          </div>

          <div className="card">
            <div className="card-icon">👨‍⚕️</div>
            <h3>Find Doctors</h3>
            <p>Search doctors based on specialization.</p>
          </div>

          <div className="card">
            <div className="card-icon">📋</div>
            <h3>Manage Appointments</h3>
            <p>View and manage your appointments.</p>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <h2>How It Works</h2>
        <p>Book your appointment in three simple steps.</p>

        <div className="cards">
          <div className="card">
            <div className="card-icon">1️⃣</div>
            <h3>Choose a Doctor</h3>
            <p>Select a doctor according to your needs.</p>
          </div>

          <div className="card">
            <div className="card-icon">2️⃣</div>
            <h3>Select a Slot</h3>
            <p>Choose an available date and time.</p>
          </div>

          <div className="card">
            <div className="card-icon">3️⃣</div>
            <h3>Book Appointment</h3>
            <p>Confirm your appointment.</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2026 MediCare+ | Healthcare Appointment System</p>
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