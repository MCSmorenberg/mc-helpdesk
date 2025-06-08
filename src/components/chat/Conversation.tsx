
export default function ConversationComponent(props: any) {

  return (
    <div className="card">
      <h2>{props.conversation.name}</h2>
      <p>{props.conversation.prompt}</p>
      <div>
        {props.conversation.messages.reverse().map((message: any) => (
          <div key={message.id}>
            <p>
              <strong>{message.role}:</strong> {message.content}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
}
