export interface Message {
    conversation_id: string;
    created_at: string;
    updated_at: string;
    id: string;
    role: Role;
    content: string | null;
    name?: string;
}

export type Role = 'assistant' | 'user';

export interface Conversation {
    id: string;
    created_at: string;
    updated_at: string;
    name: string;
    prompt: string;
    temperature: number;
    model_id: string;
    message_count: number;
    messages: Message[];
  }
