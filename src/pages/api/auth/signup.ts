import type { NextApiRequest, NextApiResponse } from 'next';
import { dbQuery } from '../../../utils/db';
import bcrypt from 'bcrypt';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;

        try {
            const hashedPassword = await bcrypt.hash(password, 10);
            const result = await dbQuery('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id', [username, hashedPassword]);

            if (result?.rows[0].id) {
                res.status(201).json({ message: 'User created' });
            } else {
                res.status(500).json({ message: 'Error creating user' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
function query(arg0: string, arg1: any[]) {
  throw new Error('Function not implemented.');
}

