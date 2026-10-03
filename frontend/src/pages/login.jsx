import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="auth-page">
      <div className="auth-box">
        <h1>Welcome Back 👋</h1>
        <p>Login to your MediCare+ account</p>

        <input type="email" placeholder="Email Address" />

        <input type="password" placeholder="Password" />

        <button>Login</button>

        <p className="auth-link">
          Don't have an account?{" "}
          <Link to="/register">Register</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;