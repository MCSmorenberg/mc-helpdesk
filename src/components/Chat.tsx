import { useState } from 'react';
import { getGroqChatCompletion } from '../app/api/groq/main';

const Chat = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isThinking, setIsThinking] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) {
        return alert("Please enter your question!");
    }

    setIsThinking(true);
    try {
      const response = await getGroqChatCompletion(question);
      setAnswer(response.choices[0]?.message?.content || "Couldn't get a response.");
    } catch (error) {
      console.error("Error:", error);
      setAnswer("Failed to get a response.");
    } finally {
      setIsThinking(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask your question here"
        />
        <button type="submit" disabled={isThinking}>Ask</button>
      </form>
      {isThinking ? (
        <p>Thinking...</p>
    //   ) : answer && (
      ) : true && (
        <div>
          <h3>Response:</h3>
          <p>Lots of text and stuff...</p>
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

export default Chat;
