const db = require('../../database/db.js');
const path = require('path');
const { remote } = require('electron');

window.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('cadastroForm');

    form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const tipo = document.getElementById('tipo').value;

    const sql = 'INSERT INTO usuarios (nome, email, senha, tipo) VALUES (?, ?, ?, ?)';
    db.run(sql, [nome, email, senha, tipo], function (err) {
    if (err) {
        alert('Erro ao cadastrar: ' + err.message);
    } else {
        alert('Usuário cadastrado com sucesso!');

        // Redireciona para home.html após 1 segundo
        setTimeout(() => {
        window.location.href = 'home.html';
        }, 1000);
    }
    });
    });
});
