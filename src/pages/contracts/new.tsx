import React from 'react';
import ContractUpload from '../../components/ContractUpload';

const NewContract = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">Upload a New Contract</h1>
            <ContractUpload />
        </div>
    );
};

export default NewContract;
