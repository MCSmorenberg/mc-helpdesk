import { Conversations } from "@/src/components/chat/Conversations";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Conversations />
      {children}
    </section>
  );
}
