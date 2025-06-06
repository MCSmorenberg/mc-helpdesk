import {Conversation} from "@/src/types/chat"
import {notFound} from "next/navigation";
import ConversationComponent from "../../../../components/chat/Conversation";

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


export default async function Chat( { params }: any) {
    const conversation = await getConversation(params.id);

    return (
        <main>
            <ConversationComponent 
                conversation={conversation}
            />
        </main>
    );
}
