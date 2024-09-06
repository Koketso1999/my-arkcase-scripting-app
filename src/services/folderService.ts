// src/services/folderService.ts
import axios from 'axios';

export const checkAndCreateFolder = async (caseId: string, token: string): Promise<void> => {
    const headers = { Authorization: `Bearer ${token}` };

    try {
        // Check if folder exists
        const response = await axios.get(`${serverUrl}/api/cases/${caseId}/calendar-folder`, { headers });

        if (response.status === 404) {
            // If folder doesn't exist, create it
            await axios.post(`${serverUrl}/api/cases/${caseId}/create-calendar-folder`, {}, { headers });
            console.log(`Folder created for case ${caseId}`);
        } else {
            console.log(`Folder already exists for case ${caseId}`);
        }
    } catch (error) {
        console.error(`Error managing folder for case ${caseId}:`, error);
    }
};
