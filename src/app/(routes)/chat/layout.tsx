import { ConversationsList } from "@/src/components/chat/ConversationsList";

export default function ChatLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <ConversationsList />
      {children}
    </section>
  );
}
