import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleAdminLogin = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    setMessage(data.message);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h2>Admin Login</h2>

      <form onSubmit={handleAdminLogin}>
        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br /><br />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br /><br />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}
