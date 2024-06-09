// src/pages/contracts/[id].tsx

import { useRouter } from 'next/router';
import ContractDetails from '../../components/ContractDetails';
import React from 'react';

const ContractPage = () => {
    const router = useRouter();
    const { id } = router.query;

    if (!id) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <ContractDetails contractId={Number(id)} />
        </div>
    );
};

export default ContractPage;
