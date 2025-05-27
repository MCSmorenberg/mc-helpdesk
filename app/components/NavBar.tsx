import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <h1>MC Helpdesk</h1>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
