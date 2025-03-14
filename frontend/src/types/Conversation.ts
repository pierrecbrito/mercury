export interface Conversation {
    id: number;
    name: string;
    description: string;
    is_group: string;
    created_at: string;
}

export interface ConversationsResponse {
    name: string;
    coversations: Conversation[];
}

