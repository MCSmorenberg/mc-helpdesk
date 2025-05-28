import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.css";

import NavBar from "../components/NavBar";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MC Helpdesk",
  description: "Next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={rubik.className}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
