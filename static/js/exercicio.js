
const trainings = [
    {
        name: "Bíceps",
        exercises: [
            {
                id: 1,
                title: "Exercício 1",
                subtitle: "Rosca Direta (Barra)",
                description: "Fique em pé com uma barra nas mãos, braços estendidos. Flexione os cotovelos para levantar a barra em direção ao peito, mantendo os cotovelos fixos.",
                image: "img/BÍCEPS/rosca direta.png"
            },
            {
                id: 2,
                title: "Exercício 2",
                subtitle: "Rosca Alternada (Halteres)",
                description: "Com os halteres nas mãos, levante um de cada vez em um movimento alternado, flexionando o cotovelo e trazendo o haltere em direção ao ombro.",
                image: "img/BÍCEPS/rosca alternada.jpeg"
            },
            {
                id: 3,
                title: "Exercício 3",
                subtitle: "Rosca Concentrada",
                description: "Sente-se com um haltere em uma mão, apoie o cotovelo na parte interna da coxa e levante o haltere até o ombro. Isola o bíceps de forma intensa.",
                image: "img/BÍCEPS/rosca concentrada.jpg"
            },
            {
                id: 4,
                title: "Exercício 4",
                subtitle: "Rosca Martelo (Halteres)",
                description: "Segure halteres com as palmas das mãos voltadas uma para a outra (pegada neutra) e flexione os cotovelos, trazendo os pesos para o peito.",
                image: "img/BÍCEPS/rosca martelo.webp"
            },
            {
                id: 5,
                title: "Exercício 5",
                subtitle: "Rosca Scott (Banco Scott)",
                description: "Sentado em um banco Scott, segure uma barra ou halteres e faça a flexão de cotovelo, isolando os bíceps ao apoiar os braços no banco inclinado.",
                image: "img/BÍCEPS/rosca scott.jpg"
            }
        ]
    },
    {
        name: "Tríceps",
        exercises: [
            {
                id: 1,
                title: "Exercício 1",
                subtitle: "Tríceps Pulley (Corda ou Barra)",
                description: "Usando um aparelho de cabo alto (pulley), segure uma corda ou barra e puxe para baixo até os cotovelos estarem totalmente estendidos.",
                image: "img/TRÍCEPS/Tríceps Pulley (Corda ou Barra).jpeg"
            },
            {
                id: 2,
                title: "Exercício 2",
                subtitle: "Tríceps Francês (Halteres ou Barra)",
                description: "Deitado em um banco, segure uma barra ou halteres acima da cabeça e desça os pesos até a testa, mantendo os cotovelos fixos. Depois, estenda os braços de volta.",
                image: "img/TRÍCEPS/triceps frances - testa.jpeg"
            },
            {
                id: 3,
                title: "Exercício 3",
                subtitle: "Mergulho (Paralelas ou Banco)",
                description: "Usando barras paralelas ou um banco, abaixe o corpo até que os cotovelos formem um ângulo de 90 graus, depois estenda os braços para subir.",
                image: "img/TRÍCEPS/Mergulho (Paralelas ou Banco).jpeg"
            },
            {
                id: 4,
                title: "Exercício 4",
                subtitle: "Tríceps Kickback (Extensão com Halteres)",
                description: "Com um haltere em uma mão, incline o corpo para frente, mantenha o braço paralelo ao tronco e estenda o cotovelo para trás.",
                image: "img/TRÍCEPS/Tríceps Kickback (Extensão com Halteres).jpeg"
            },
            {
                id: 5,
                title: "Exercício 5",
                subtitle: "Tríceps Testa (Skull Crusher)",
                description: "Deitado em um banco, segure uma barra EZ acima do peito e abaixe-a em direção à testa, mantendo os cotovelos estáveis. Em seguida, estenda os braços novamente.",
                image: "img/TRÍCEPS/Tríceps Testa (Skull Crusher).webp"
            }
        ]
    },
    {
        name: "Ombro",
        exercises: [
            {
                id: 1,
                title: "Exercício 1",
                subtitle: "Desenvolvimento com Halteres (Shoulder Press)",
                description: "Sentado ou em pé, segure halteres ao nível dos ombros e empurre-os para cima até que os braços fiquem totalmente estendidos. Abaixe de volta até a altura dos ombros.",
                image: "img/OMBRO/Desenvolvimento com Halteres (Shoulder Press).webp"
            },
            {
                id: 2,
                title: "Exercício 2",
                subtitle: "Desenvolvimento Militar (Barra)",
                description: "Segure uma barra com as mãos na altura dos ombros e empurre-a acima da cabeça até os braços ficarem estendidos. Pode ser feito sentado ou em pé.",
                image: "img/OMBRO/Desenvolvimento Militar (Barra).jpeg"
            },
            {
                id: 3,
                title: "Exercício 3",
                subtitle: "Elevação Lateral (Halteres)",
                description: "Segure halteres ao lado do corpo, levante os braços para os lados até a altura dos ombros e abaixe lentamente.",
                image: "img/OMBRO/Elevação Lateral (Halteres).webp"
            },
            {
                id: 4,
                title: "Exercício 4",
                subtitle: "Elevação Frontal (Halteres ou Barra)",
                description: "Segure halteres ou uma barra à frente do corpo e levante-os até a altura dos ombros, mantendo os braços estendidos.",
                image: "img/OMBRO/Elevação Frontal (Halteres ou Barra).webp"
            },
            {
                id: 5,
                title: "Exercício 5",
                subtitle: "Elevação Posterior no Banco Inclinado (Reverse Fly)",
                description: "Deite-se em um banco inclinado com o peito apoiado e segure halteres. Levante os halteres para os lados, mantendo os cotovelos ligeiramente dobrados.",
                image: "img/OMBRO/Elevação Posterior no Banco Inclinado (Reverse Fly).jpeg"
            }
        ]
    }
];

// Variável global para armazenar o botão de salvar
let saveButton;

// Função para exibir os cards de exercícios
function renderExercises() {
    const exerciseContainer = document.getElementById('exercise-container');
    exerciseContainer.innerHTML = '';

    trainings.forEach(training => {
        training.exercises.forEach(exercise => {
            const card = document.createElement('div');
            card.classList.add('card');

            card.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.subtitle}">
                <h3>${exercise.title}</h3>
                <p>${exercise.subtitle}</p>
                <input type="checkbox" class="select-exercise" data-id="${exercise.id}" data-group="${training.name}"> Selecionar
                <button class="view-details" data-id="${exercise.id}" data-group="${training.name}">Ver Detalhes</button>
                <button class="delete-exercise" data-id="${exercise.id}" data-group="${training.name}">Excluir</button>
            `;

            exerciseContainer.appendChild(card);

            // Adiciona evento para o botão de excluir
            card.querySelector('.delete-exercise').addEventListener('click', function() {
                deleteExercise(training.name, exercise.id);
            });
        });
    });

    // Adiciona o botão "Salvar Seleção" se não existir
    if (!document.getElementById('save-button')) {
        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container'); // Cria um contêiner para o botão
        saveButton = document.createElement('button');
        saveButton.textContent = 'Salvar Seleção';
        saveButton.id = 'save-button';
        saveButton.classList.add('save-selection-button');
        saveButton.addEventListener('click', saveSelection);
        buttonContainer.appendChild(saveButton); // Adiciona o botão ao contêiner
        exerciseContainer.appendChild(buttonContainer); // Adiciona o contêiner ao exercício
    }

    // Adiciona o evento aos botões "Ver Detalhes"
    document.querySelectorAll('.view-details').forEach(button => {
        button.addEventListener('click', function () {
            const exerciseId = this.getAttribute('data-id');
            const groupName = this.getAttribute('data-group');
            showDetails(groupName, exerciseId);
        });
    });
}

// Função para deletar um exercício
function deleteExercise(trainingName, exerciseId) {
    const training = trainings.find(t => t.name === trainingName);
    if (training) {
        training.exercises = training.exercises.filter(e => e.id != exerciseId); // Remove o exercício da lista
        renderExercises(); // Re-renderiza os exercícios
        alert('Exercício excluído com sucesso!'); // Mensagem de confirmação
    }
}

// Função para exibir detalhes do exercício
function showDetails(trainingName, exerciseId) {
    const selectedTraining = trainings.find(t => t.name === trainingName);
    const exercise = selectedTraining.exercises.find(e => e.id == exerciseId);

    const content = `
        <h1>${exercise.title}</h1>
        <img src="${exercise.image}" alt="${exercise.subtitle}">
        <p>${exercise.description}</p>
        <button onclick="renderExercises()">Voltar</button>
    `;

    document.getElementById('exercise-container').innerHTML = content;

    // Esconde o botão de salvar quando os detalhes são exibidos
    const saveButton = document.getElementById('save-button');
    if (saveButton) {
        saveButton.style.display = 'none';
    }
}

// Função para salvar a seleção de exercícios
function saveSelection() {
    const selectedExercises = [];
    document.querySelectorAll('.select-exercise:checked').forEach(checkbox => {
        const exerciseId = checkbox.getAttribute('data-id');
        const groupName = checkbox.getAttribute('data-group');
        selectedExercises.push({ id: exerciseId, group: groupName });
    });

    console.log("Exercícios selecionados:", selectedExercises);
    alert("Seleção salva!");
}

// Redirecionar para a página de criação de exercícios
document.getElementById('add-new-exercise').addEventListener('click', function () {
    window.location.href = 'criarexercicio.html';
});

// Função de redirecionamento para o botão "VOLTAR"
function voltarPagina() {
    window.location.href = 'inicialprofessor.html'; // ajuste o caminho conforme necessário
}

// Inicializa os exercícios e o botão de salvar ao carregar a página
window.onload = function () {
    renderExercises();

    // Adiciona o botão de salvar seleção uma única vez
    const buttonContainer = document.getElementById('button-container'); // O contêiner onde você quer adicionar o botão
    if (!buttonContainer) {
        console.error('Contêiner para botões não encontrado.');
        return;
    }
    saveButton = document.createElement('button');
    saveButton.textContent = 'Salvar Seleção';
    saveButton.classList.add('save-selection-button');
    saveButton.addEventListener('click', saveSelection);
    buttonContainer.appendChild(saveButton); // Adiciona ao contêiner

    // Configura o evento de clique para o botão de voltar
    const btnVoltar = document.querySelector('.btn-voltar');
    if (btnVoltar) {
        btnVoltar.addEventListener('click', voltarPagina);
    }
};