document.addEventListener('DOMContentLoaded', function () {
    // Redireciona para a tela treinoaluno.html ao clicar no botão TREINOS
    document.getElementById('treinos').addEventListener('click', function () {
        window.location.href = 'treinoaluno.html';
    });

    // Redireciona para a tela resumo.html ao clicar no botão RESUMO DO PROGRESSO
    document.getElementById('resumo').addEventListener('click', function () {
        window.location.href = 'resumo.html';
    });

    // Redireciona para a tela perfilaluno.html ao clicar no link MEU PERFIL
    document.getElementById('meu-perfil').addEventListener('click', function () {
        window.location.href = 'perfilaluno.html';
    });

    // Redireciona para a tela areaaluno.html ao clicar no link HISTÓRICO
    document.getElementById('historico').addEventListener('click', function () {
        window.location.href = 'areaaluno.html';
    });
});
