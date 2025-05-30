import { Conversation } from "../types/chat";

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

export async function ChatBar() {
   const conversations = await getConvesations();

   return(
      <>
         {conversations.map((conversation: Conversation) => (
            <div key={conversation.id}>
               <h3>{conversation.name}</h3>
            </div>
         ))}
         {conversations.length === 0 && (
            <p>There are no conversations</p>
         )}
      </>
   )
}
