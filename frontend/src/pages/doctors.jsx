import { Link } from "react-router-dom";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Rahul Patil",
      specialization: "Cardiologist",
      experience: "8 Years Experience",
      icon: "👨‍⚕️",
    },
    {
      name: "Dr. Priya Sharma",
      specialization: "Dentist",
      experience: "6 Years Experience",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Amit Kulkarni",
      specialization: "Neurologist",
      experience: "10 Years Experience",
      icon: "👨‍⚕️",
    },
    {
      name: "Dr. Sneha Joshi",
      specialization: "General Physician",
      experience: "7 Years Experience",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Neha Deshmukh",
      specialization: "Ophthalmologist",
      experience: "5 Years Experience",
      icon: "👩‍⚕️",
    },
    {
      name: "Dr. Akash More",
      specialization: "Orthopedic",
      experience: "9 Years Experience",
      icon: "👨‍⚕️",
    },
  ];

  return (
    <div className="doctors-page">

      <div className="doctors-header">

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>

        <span>OUR DOCTORS</span>

        <h1>Find the Right Doctor</h1>

        <p>
          Search and choose a doctor according to your healthcare needs.
        </p>

      </div>

      <div className="doctor-search">

        <span>🔍</span>

        <input
          type="text"
          placeholder="Search doctor or specialization..."
        />

        <button>Search</button>

      </div>

      <div className="doctors-grid">

        {doctors.map((doctor, index) => (

          <div className="doctor-profile-card" key={index}>

            <div className="doctor-profile-icon">
              {doctor.icon}
            </div>

            <h2>{doctor.name}</h2>

            <div className="specialization">
              {doctor.specialization}
            </div>

            <p>⭐ 4.8 Rating</p>

            <p className="experience">
              {doctor.experience}
            </p>

            <Link to="/login">
              <button className="book-btn">
                View Profile & Book
              </button>
            </Link>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Doctors;