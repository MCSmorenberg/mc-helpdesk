import Image from "next/image";
import Chat from "../../../components/Chat";
import { ChatBar } from "@/src/components/ChatBar";

export default function Dashboard() {
  return (
    <main>
      <h2>Dashboard</h2>
      <ChatBar />
      <Chat />
    </main>
  );
}
