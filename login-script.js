document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previne o comportamento padrão do formulário

    // Pega os valores do formulário
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;

    // Verifica se ambos os campos estão preenchidos
    if (email && senha) {
        // Se ambos os campos estão preenchidos, redireciona para a página principal
        window.location.href = 'index.html'; // Certifique-se de que o caminho está correto
    } else {
        alert('Por favor, preencha ambos os campos!'); // Alerta caso um dos campos esteja vazio
    }
});
