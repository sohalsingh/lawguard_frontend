// src/components/ContractDetails.tsx

import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';

interface Lawyer {
    name: string;
    specialization: string;
    contact_details: string;
}

interface Risk {
    description: string;
    level: string;
}

interface Suggestion {
    lawyer: Lawyer;
    risk: Risk;
}

interface Contract {
    id: number;
    analysis: string;
    summary: string;
    risks: Risk[];
    suggestions: Suggestion[];
}

const ContractDetails = ({ contractId }: { contractId: number }) => {
    const [contract, setContract] = useState<Contract | null>(null);

    useEffect(() => {
        const fetchContract = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/contracts/${contractId}`);
                setContract(response.data);
            } catch (error) {
                console.error('Error fetching contract details:', error);
            }
        };

        fetchContract();
    }, [contractId]);

    if (!contract) return <p>Loading...</p>;

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contract Analysis</h2>
            <p><strong>Analysis:</strong> {contract.analysis}</p>
            <p><strong>Summary:</strong> {contract.summary}</p>

            <h3 className="text-xl font-bold mt-4">Risks</h3>
            <ul>
                {contract.risks.map((risk, index) => (
                    <li key={index}>{risk.description} - {risk.level}</li>
                ))}
            </ul>

            <h3 className="text-xl font-bold mt-4">Lawyer Suggestions</h3>
            <ul>
                {contract.suggestions.map((suggestion, index) => (
                    <li key={index}>
                        <strong>{suggestion.lawyer.name}</strong>
                        (<em>{suggestion.lawyer.specialization}</em>)
                        - {suggestion.lawyer.contact_details}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContractDetails;
