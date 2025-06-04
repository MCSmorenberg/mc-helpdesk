import Image from "next/image";
import Chat from "../../../components/chat/Chat";
import { Conversations } from "@/src/components/chat/Conversations";

export default function Dashboard() {
  return (
    <main>
      <h2>Chat Dashboard</h2>
      <Conversations />
      <Chat />
    </main>
  );
}
