import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Submitted: ${name}`);
    setName("");
  }

  return (
    <div>
      <NavBar />
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Your Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginLeft: 8 }}
          />
        </label>
        <button type="submit" style={{ marginLeft: 8 }}>Submit</button>
      </form>
    </div>
  );
}
