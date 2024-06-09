import { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';

const ContractUpload = () => {
    const [file, setFile] = useState<File | null>(null);
    const [uploading, setUploading] = useState(false);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!file) return;
        setUploading(true);

        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await axios.post('http://localhost:3000/contracts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            window.location.href = `/contracts/${response.data.id}`;
        } catch (error) {
            console.error('Error uploading file:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Upload Contract</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="file" className="block text-sm font-medium text-gray-700">Contract PDF</label>
                    <input type="file" id="file" onChange={handleFileChange} className="mt-1 block w-full"/>
                </div>
                <div>
                    <button type="submit" disabled={uploading} className="bg-blue-500 text-white py-2 px-4 rounded">
                        {uploading ? 'Uploading...' : 'Upload'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ContractUpload;
