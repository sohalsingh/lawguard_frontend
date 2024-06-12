import type { NextApiRequest, NextApiResponse } from 'next';
import { dbQuery } from '../../../utils/db';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const secret = 'your_jwt_secret';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { username, password } = req.body;
        
        try {
            const result = await dbQuery('SELECT * FROM users WHERE username = $1', [username]);
            const user = result.rows[0];

            if (user && await bcrypt.compare(password, user.password)) {
                const token = jwt.sign({ username }, secret, { expiresIn: '1h' });
                res.status(200).json({ token });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Internal server error' });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}
