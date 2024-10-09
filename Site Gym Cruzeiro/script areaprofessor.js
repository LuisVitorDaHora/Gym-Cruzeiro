
// Função exemplo para buscar dados do banco de dados e popular a tabela  
function populateTable(data) {  
    // Seleciona o corpo da tabela onde os dados serão inseridos  
    const tableBody = document.querySelector('#alunosTable tbody');  
    
    // Itera sobre cada estudante nos dados fornecidos  
    data.forEach(student => {  
        // Cria uma nova linha na tabela  
        const row = tableBody.insertRow();  
        
        // Insere células na linha com as informações do estudante  
        row.insertCell(0).textContent = student.nome;  
        row.insertCell(1).textContent = student.treino;  
        row.insertCell(2).textContent = student.objetivo;  
        row.insertCell(3).textContent = student.periodo;  
        row.insertCell(4).textContent = student.novaAvaliacao;  
    });  
}  
  
// Dados simulados (substitua pela busca real do banco de dados)  
const sampleData = [  
    { nome: "Elisangela", treino: "AB", objetivo: "EMAGRECER", periodo: "01/03/2023 - 01/06/2023", novaAvaliacao: "02/06/2023" },  
    // Adicione mais objetos de estudantes conforme necessário  
];  
  
// Chama a função quando a página é carregada  
document.addEventListener('DOMContentLoaded', () => populateTable(sampleData));  

