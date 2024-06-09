import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password } = req.body;

  // Basic check, replace with your actual authentication logic
  if (email === 'test@example.com' && password === 'password') {
    // Set a cookie for authentication
    const authToken = 'your-token';
    res.setHeader(
      'Set-Cookie',
      serialize('authToken', authToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      })
    );

    res.status(200).json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
}
