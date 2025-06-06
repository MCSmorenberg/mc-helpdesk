export default function ConversationComponent(props: any) {

  return (
    <div className="card">
      <h2>{props.conversation.name}</h2>
      <p>{props.conversation.prompt}</p>
      <p>{props.conversation.messages[0].content}</p>
    </div>
  );
}
