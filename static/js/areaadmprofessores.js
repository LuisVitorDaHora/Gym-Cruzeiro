// Função para popular a tabela com dados do banco de dados
function populateTable(data) {
    // Seleciona o corpo da tabela onde os dados serão inseridos
    const tableBody = document.querySelector('#professoresTable tbody');
    tableBody.innerHTML = ''; // Limpa a tabela antes de popular para evitar duplicação

    // Itera sobre cada professor nos dados fornecidos
    data.forEach(professor => {
        // Cria uma nova linha na tabela
        const row = tableBody.insertRow();
        
        // Insere células na linha com as informações do professor
        row.insertCell(0).textContent = professor.id;  // ID
        row.insertCell(1).innerHTML = `<a href="perfilprofsadm.html?id=${professor.id}">${professor.nome}</a>`;  // Nome como link
        row.insertCell(2).textContent = professor.especialidade;  // Especialidade
        row.insertCell(3).textContent = professor.dataContratacao;  // Data de Contratação
        
        // Insere o status do professor
        const statusCell = row.insertCell(4);
        if (professor.status === "Inativo") {
            statusCell.textContent = "Professor Inativo";  // Exibe "Professor Inativo" no status
            statusCell.style.color = "red";  // Define a cor vermelha para destacar
        } else {
            statusCell.textContent = professor.status;
        }

        // Adiciona botão de exclusão
        const actionCell = row.insertCell(5);
        actionCell.innerHTML = `<button class="btn-excluir" onclick="excluirProfessor(${professor.id})">Excluir</button>`;
    });
}

// Função para excluir um professor pelo ID
function excluirProfessor(id) {
    const indice = professores.findIndex(professor => professor.id === id);
    if (indice !== -1) {
        const confirmacao = confirm(`Tem certeza que deseja excluir o professor ${professores[indice].nome}?`);
        if (confirmacao) {
            professores.splice(indice, 1); // Remove o professor do array
            populateTable(professores); // Atualiza a lista na página
            alert('Professor excluído com sucesso.');
        }
    } else {
        alert('Professor não encontrado.');
    }
}

// Dados simulados (substitua pela busca real do banco de dados)
const professores = [
    { id: 1, nome: "Carlos Oliveira", especialidade: "Musculação", dataContratacao: "2020-01-15", status: "Ativo" },
    { id: 2, nome: "Roberto Almeida", especialidade: "Musculação", dataContratacao: "2021-02-10", status: "Ativo" },
    { id: 3, nome: "Fernanda Lima", especialidade: "HIIT", dataContratacao: "2019-04-12", status: "Ativo" },
    { id: 4, nome: "Larissa Silva", especialidade: "Musculação", dataContratacao: "2023-10-01", status: "Ativo" },
];

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', () => populateTable(professores));
