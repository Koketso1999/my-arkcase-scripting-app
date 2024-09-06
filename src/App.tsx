// src/App.tsx
import React, { useState, useEffect } from 'react';
import { authenticate } from './services/authService';
import { getActiveCases, getActiveComplaints } from './services/caseService';
import FolderManagement from './components/FolderManagement';
// add main css file
import './App.css';

const App: React.FC = () => {
    const [cases, setCases] = useState<any[]>([]);
    const [complaints, setComplaints] = useState<any[]>([]);
    const [token, setToken] = useState<string | null>(null);

    useEffect(() => {
        const init = async () => {
            const authToken = await authenticate('your-username', 'your-password');
            if (authToken) {
                setToken(authToken);
            }
        };
        init();
    }, []);

    useEffect(() => {
        if (token) {
            const fetchData = async () => {
                const activeCases = await getActiveCases(token);
                const activeComplaints = await getActiveComplaints(token);
                setCases(activeCases);
                setComplaints(activeComplaints);
            };
            fetchData();
        }
    }, [token]);

    return (
        <div className="container">

            <div className="header">
                <h1 className="text-2xl font-bold underline">ACM + Scripting Language Dashboard </h1>
            </div>
            <h1>Active Cases</h1>
          {cases.length === 0 ? (
    <p>Waiting for API connection to list cases...</p>
) : (
    <ul>
        {cases.map((caseItem) => (
            <li key={caseItem.id}>{caseItem.title}</li>
        ))}
    </ul>
)}

            <h1>Active Complaints</h1>
         {complaints.length === 0 ? (
    <p>Waiting for API connection to list complaints...</p>
) : (
    <ul>
        {complaints.map((complaint) => (
            <li key={complaint.id}>{complaint.description}</li>
        ))}
    </ul>
)}

            {/* Folder Management */}
            {token && cases.length > 0 && <FolderManagement cases={cases} token={token} />}
        </div>
    );
};

export default App;
