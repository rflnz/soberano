const mysql = require('mysql2');

// Conexão com seu banco MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',          // se tiver senha no seu XAMPP, coloque aqui
  database: 'soberano'   // nome do seu banco
});

// Conecta e verifica
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err.message);
  } else {
    console.log('Conectado ao MySQL com sucesso!');
  }
});

module.exports = db;
