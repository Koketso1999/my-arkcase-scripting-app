// src/services/authService.ts
import axios from 'axios';

const serverUrl = import.meta.env.VITE_SERVER_URL;

export const authenticate = async (username: string, password: string): Promise<string | null> => {
    try {
        const response = await axios.post(`${serverUrl}/auth/token`, { username, password });
        if (response.status === 200) {
            return response.data.ticket; // ACM ticket
        } else {
            throw new Error('Authentication failed');
        }
    } catch (error) {
        console.error('Authentication error:', error.message);
        return null;
    }
};
