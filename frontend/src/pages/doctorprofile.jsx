import { Link } from "react-router-dom";

function DoctorProfile() {
  const slots = [
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "3:00 PM",
    "4:00 PM",
    "6:00 PM",
  ];

  return (
    <div className="doctor-profile-page">

      <Link to="/doctors" className="back-home">
        ← Back to Doctors
      </Link>

      <div className="profile-container">

        {/* Doctor Information */}
        <div className="profile-card">

          <div className="profile-icon">
            👨‍⚕️
          </div>

          <div className="profile-info">

            <span className="profile-tag">
              AVAILABLE
            </span>

            <h1>Dr. Rahul Patil</h1>

            <h3>Cardiologist</h3>

            <p>
              ⭐ 4.8 Rating
            </p>

            <p>
              🩺 8 Years Experience
            </p>

            <p>
              ❤️ Specializes in heart and cardiovascular care.
            </p>

          </div>

        </div>

        {/* Appointment */}
        <div className="booking-card">

          <h2>Book an Appointment</h2>

          <p className="booking-subtitle">
            Select your preferred date and available time slot.
          </p>

          <label>Select Date</label>

          <input type="date" />

          <h3>Available Time Slots</h3>

          <div className="slots-grid">

            {slots.map((slot, index) => (
              <button key={index} className="slot-btn">
                {slot}
              </button>
            ))}

          </div>

          <button className="confirm-btn">
            Confirm Appointment
          </button>

        </div>

      </div>

    </div>
  );
}

export default DoctorProfile;