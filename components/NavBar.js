import Link from "next/link";

export default function NavBar() {
  return (
    <nav style={{ padding: "10px", background: "#ddd" }}>
      <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
