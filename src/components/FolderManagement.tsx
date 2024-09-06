// src/components/FolderManagement.tsx
import React, { useEffect } from 'react';
import { checkAndCreateFolder } from '../services/folderService';

const FolderManagement: React.FC<{ cases: any[], token: string }> = ({ cases, token }) => {
    useEffect(() => {
        const manageFolders = async () => {
            for (const caseItem of cases) {
                await checkAndCreateFolder(caseItem.id, token);
            }
        };
        manageFolders();
    }, [cases, token]);

    return <div>Folder management in progress...</div>;
};

export default FolderManagement;
