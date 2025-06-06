import Link from "next/link"

import { Conversation } from "../../types/chat";

async function getConvesations() {
   const res = await fetch('http://localhost:4000/data',
      {
         next: {
            revalidate: 30,
         }
      }
   );

   return res.json();
}

export async function ConversationsList() {
   const conversations = await getConvesations();

   return(
      <>
         {conversations.map((conversation: Conversation) => (
            <div key={conversation.id}>
               <Link href={`/chat/${conversation.id}`}>
                  <h3>{conversation.name}</h3>
               </Link>
            </div>
         ))}
         {conversations.length === 0 && (
            <p>There are no conversations</p>
         )}
      </>
   )
}
