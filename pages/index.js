import NavBar from "../components/NavBar";
import Counter from "../components/Counter";
import MessageToggle from "../components/MessageToggle";

export default function Home() {
  return (
    <div>
      <NavBar />
      <h1>Welcome to my React App</h1>
      <p>This is the home page.</p>

      <h2>Counter Example</h2>
      <Counter />

      <h2>Conditional Message Example</h2>
      <MessageToggle />
    </div>
  );
}
