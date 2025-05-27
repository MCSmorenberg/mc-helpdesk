'use client'
import Image from "next/image";

import { main } from "./api/groq/main";

export default function Home() {
  return (
    <main>
      <h2>Dashboard</h2>
      <button onClick={() => main()}>Say something..</button>
    </main>
  );
}
