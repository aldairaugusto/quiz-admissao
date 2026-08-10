// api/listar.js
const { Pool } = require('pg');

// Configure a conexão com o Neon (COLE SUA STRING AQUI)
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_iJNzq3eOb2Bx@ep-sparkling-unit-ax23jffk-pooler.c-4.us-east-2.aws.neon.tech/neondb?sslmode=require&channel_binding=require', 
  ssl: {
    rejectUnauthorized: false // OBRIGATÓRIO na Vercel
  }
});

export default async function handler(req, res) {
  // 1. Configurar CORS (Permite o navegador se conectar)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // 2. Responder a requisição de teste (OPTIONS) que a Vercel faz
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  try {
    // 3. Tentar buscar os dados no Neon
    const result = await pool.query('SELECT * FROM alunos ORDER BY id DESC');
    
    // 4. Enviar a lista de alunos com sucesso
    res.status(200).json(result.rows);

  } catch (error) {
    // 5. SE FALHAR, mostrar o erro exato no Console da Vercel e no site
    console.error("ERRO GRAVE NO BANCO DE DADOS:", error);
    
    res.status(500).json({ 
      error: 'Falha ao buscar alunos', 
      detalhe: error.message // Isso vai aparecer no seu Console do navegador para você descobrir o motivo!
    });
  }
}