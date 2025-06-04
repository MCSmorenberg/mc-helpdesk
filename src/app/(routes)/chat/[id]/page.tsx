import {Conversation} from "@/src/types/chat"

async function getConversation(id: any) {
   const res = await fetch('http://localhost:4000/data/' + id,
      {
         next: {
            revalidate: 60,
         }
      }
   );

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
