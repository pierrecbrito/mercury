export interface AuthReponse {
    access_token: string;
    token_type: "bearer";
}

export interface RegisterResponse {
    message: string;
}

export interface MeResponse {
    username: string;
    email: string;
    created_at: string;
}