import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    setMessage(data.message);

    if (res.ok) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>User Login</h2>

        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>

        {message && <p className="message">{message}</p>}

        <p className="signup-link">
          Don’t have an account?{" "}
          <span onClick={() => navigate("/signup")}>Sign up</span>
        </p>
      </div>
    </div>
  );
}
