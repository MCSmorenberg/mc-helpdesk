import {Conversation} from "@/src/types/chat"
import {notFound} from "next/navigation";

export const dynamicParams = true // Default is true

export async function generateStaticParams() {
    const res = await fetch('http://localhost:4000/data');
    const conversations = await res.json();

    return conversations.map((conversation: any) => ({
        id: conversation.id
    }))
}

async function getConversation(id: any) {
    const res = await fetch('http://localhost:4000/data/' + id, {
        next: {
            revalidate: 60,
        }
    });
    if (!res.ok) {
        notFound()
    }
    return res.json();
}


export default async function ConversationComponent( { params }: any) {
    // console.log('params', params.id)
    const conversation = await getConversation(params.id);
  return (
    <main>
        <p>{conversation.name}</p>
    </main>
  );
}
