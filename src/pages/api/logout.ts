import { NextApiRequest, NextApiResponse } from 'next';
import { serialize } from 'cookie';

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  // Delete the authToken cookie by setting its value to an empty string and setting maxAge to 0
  res.setHeader(
    'Set-Cookie',
    serialize('authToken', '', {
      maxAge: 0,
      path: '/',
    })
  );

  res.status(200).json({ message: 'Logout successful' });
}
