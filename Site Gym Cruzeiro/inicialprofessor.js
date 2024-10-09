// Selecionando os botões pela classe ou ID
const btnExercicio = document.getElementById('btn-exercicio');
const btnTreinos = document.getElementById('btn-treinos');
const btnAlunos = document.getElementById('btn-alunos');
const btnPerfil = document.getElementById('btn-perfil');

// Adicionando eventos de clique a cada botão

btnExercicio.addEventListener('click', function() {
    window.location.href = "exercicios.html"; // Redireciona para a página de exercícios
});

btnTreinos.addEventListener('click', function() {
    window.location.href = "treino.html"; // Redireciona para a página de treinos
});

btnAlunos.addEventListener('click', function() {
    window.location.href = "areaprofessor.html"; // Redireciona para a página de alunos
});

btnPerfil.addEventListener('click', function() {
    window.location.href = "perfilprofessor.html"; // Redireciona para a página do perfil do professor
});

