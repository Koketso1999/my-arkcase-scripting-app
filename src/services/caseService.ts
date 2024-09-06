// src/services/caseService.ts
import axios from 'axios';

export const getActiveCases = async (token: string): Promise<any[]> => {
    const response = await axios.get(`${serverUrl}/api/cases/active`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const getActiveComplaints = async (token: string): Promise<any[]> => {
    const response = await axios.get(`${serverUrl}/api/complaints/active`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
