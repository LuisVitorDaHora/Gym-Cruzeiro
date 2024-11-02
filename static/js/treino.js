const treinosList = document.getElementById('treinos-list');  
const addTreinoButton = document.getElementById('add-treino-button');  

// Array de exemplo com treinos
const treinosData = [  
    { id: 1, name: 'Treino AB' },  
    { id: 2, name: 'Treino CD' },  
];  

// Função para gerar a lista de treinos
function generateTreinosList() {  
    treinosList.innerHTML = '';  
    treinosData.forEach((treino) => {  
        const li = document.createElement('li');  
        li.textContent = treino.name;  

        // Botão de remover
        const deleteButton = document.createElement('button');  
        deleteButton.textContent = 'Remover';  
        deleteButton.addEventListener('click', () => {  
            // Remove o treino e atualiza a lista
            treinosData.splice(treinosData.indexOf(treino), 1);  
            generateTreinosList();  
        });  

        // Adiciona o botão de remover ao li
        li.appendChild(deleteButton);  
        treinosList.appendChild(li);  
    });  
}  

// Gera a lista de treinos inicialmente
generateTreinosList();  

// Evento para o botão de adicionar novo treino
addTreinoButton.addEventListener('click', () => {  
    window.location.href = 'criartreino (1).html';  
});


