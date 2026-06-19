import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Password entered:", password);

    if (password.trim() === "admin123") {
      localStorage.setItem("isAdmin", "true");
      navigate("/admin"); // redirect
    } else {
      alert("Wrong password");
    }
  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>
      <h2>Admin Login</h2>

      <input
        type="password"
        value={password}
        placeholder="Enter admin password"
        onChange={(e) => setPassword(e.target.value)}
        style={{ padding: "10px", width: "200px" }}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
