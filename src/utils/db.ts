// db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: 'your_username',
  host: 'localhost',
  database: 'your_database',
  password: 'your_password',
  port: 5432,
});

export async function dbQuery(text: string, params: any[]) {
  const result = await pool.query(text, params);
  return result;
}
