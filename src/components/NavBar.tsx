import Link from "next/link";

export default function NavBar() {
  return (
    <nav>
      <h1>MC Helpdesk</h1>
      <Link href="/chat">Chat</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
