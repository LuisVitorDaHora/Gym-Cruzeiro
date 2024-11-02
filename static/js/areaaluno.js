function populateProfile(data) {
    // Seleciona o contêiner onde os dados serão inseridos
    const perfilLinhas = document.querySelector('.perfil-linhas');
    
    // Limpa qualquer conteúdo existente
    perfilLinhas.innerHTML = '';

    // Itera sobre cada estudante nos dados fornecidos
    data.forEach(student => {
        // Cria uma nova linha na seção
        const linha = document.createElement('div');
        linha.classList.add('perfil-linha');

        // Insere células na linha com as informações do estudante
        linha.innerHTML = `
            <div class="coluna">${student.nome}</div>
            <div class="coluna">${student.treino}</div>
            <div class="coluna">${student.objetivo}</div>
            <div class="coluna">${student.periodo}</div>
            <div class="coluna">${student.novaAvaliacao}</div>
        `;

        // Adiciona a linha ao contêiner
        perfilLinhas.appendChild(linha);
    });
}

// Função para obter dados reais (substitua pela busca real do banco de dados)
async function fetchProfileData(email) {
    const response = await fetch(`/api/perfil_aluno?email=${email}`);
    if (response.ok) {
        const data = await response.json();
        populateProfile(data);
    } else {
        console.error('Erro ao buscar dados do perfil.');
    }
}

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', () => {
    const email = "{{ email }}"; // Passando o e-mail do aluno do Flask
    fetchProfileData(email);
});
