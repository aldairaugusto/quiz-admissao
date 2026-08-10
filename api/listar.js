// api/listar.js
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://usuario:senha@ep-cool-river-123456.us-east-2.aws.neon.tech/neondb?sslmode=require', // MESMA STRING AQUI
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM alunos ORDER BY id DESC');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Erro ao listar:', error);
    res.status(500).json({ message: 'Erro ao buscar alunos' });
  }
}