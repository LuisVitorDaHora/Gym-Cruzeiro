// Função para popular a tabela com dados dos alunos
function populateTable(data) {
    // Seleciona o corpo da tabela onde os dados serão inseridos
    const tableBody = document.querySelector('#alunosTable tbody');
    
    // Limpa o corpo da tabela antes de popular para evitar duplicações
    tableBody.innerHTML = '';

    // Itera sobre cada aluno nos dados fornecidos
    data.forEach(student => {
        // Cria uma nova linha na tabela
        const row = tableBody.insertRow();
        
        // Insere células na linha com as informações do aluno
        row.insertCell(0).textContent = student.id;  // ID
        
        // Adiciona o nome do aluno como um link
        const nameCell = row.insertCell(1);  // Célula para o nome
        const nameLink = document.createElement('a');  // Cria um link
        nameLink.textContent = student.nome;  // Define o texto do link
        nameLink.href = `perfilalunosadm.html?id=${student.id}`;  // Define o destino do link
        nameLink.style.cursor = 'pointer';  // Altera o cursor para indicar que é clicável
        nameCell.appendChild(nameLink);  // Adiciona o link à célula

        // Adiciona outras informações do aluno
        row.insertCell(2).textContent = student.dataInscricao; // Data de Inscrição
        row.insertCell(3).textContent = student.status;         // Status  
        row.insertCell(4).textContent = student.professorResponsavel; // Professor Responsável
    });
}

// Dados simulados (substitua pela busca real do banco de dados)
const sampleData = [
    { id: 1, nome: "Caio Guedes", dataInscricao: "2024-08-01", status: "Ativo", professorResponsavel: "Carlos Oliveira" },
    { id: 2, nome: "Thaissa Rodrigues", dataInscricao: "2022-01-30", status: "Ativo", professorResponsavel: "Roberto Almeida" },
    { id: 3, nome: "Lucas Sgalla", dataInscricao: "2023-09-09", status: "Ativo", professorResponsavel: "Fernanda Lima" },
    { id: 4, nome: "Luis Da Hora", dataInscricao: "2024-05-10", status: "Ativo", professorResponsavel: "Larissa Silva" },
    { id: 5, nome: "Elisangela Silva", dataInscricao: "2023-10-10", status: "Ativo", professorResponsavel: "Carlos Oliveira" },
    // Adicione mais objetos conforme necessário
];

// Chama a função quando a página é carregada
document.addEventListener('DOMContentLoaded', () => populateTable(sampleData));
