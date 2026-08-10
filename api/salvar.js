// api/salvar.js
const { Pool } = require('pg');

// Configure a conexão com o Neon
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_iJNzq3eOb2Bx@ep-sparkling-unit-ax23jffk-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require', // COLE SUA STRING AQUI
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  const { nome, acertos, total, percentual } = req.body;

  try {
    const query = `
      INSERT INTO alunos (nome, acertos, total_perguntas, percentual) 
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;
    const values = [nome, acertos, total, percentual];
    
    await pool.query(query, values);
    
    res.status(200).json({ message: 'Sucesso! Nota salva no banco.' });
  } catch (error) {
    console.error('Erro no banco:', error);
    res.status(500).json({ message: 'Erro ao salvar no banco' });
  }
}