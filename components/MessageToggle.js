import { useState } from "react";

export default function MessageToggle() {
  const [show, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow((s) => !s)}>Toggle Message</button>
      {show ? (
        <p>Hello! This message is visible.</p>
      ) : (
        <p>The message is hidden now.</p>
      )}
    </div>
  );
}
