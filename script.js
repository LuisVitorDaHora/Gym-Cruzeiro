// Lista de objetos dinâmica


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
                description: "Sente-se com um haltere em uma mão, apoie o cotovelo na parte interna da coxa e levante o haltere até o ombro. Isola o bíceps de forma intensa",
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
                title: "Exercícios 5",
                subtitle: "Rosca Scott (Banco Scott)",
                description: "Sentado em um banco Scott, segure uma barra ou halteres e faça a flexão de cotovelo, isolando os biceps ao apoiar os braços no banco inclinado.",
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
                description: "Deitado em um banco, segure uma barra ou halteres acima da cabeça e desça os pesos até a testa, mantendo os cotovelos fixos, depois estenda os braços de volta.",
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
                subtitle: "Tríceps Testa  (Skull Crusher)",
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


]



// Função para carregar o conteúdo das seções do menu
function loadSection(section) {
    let content = '';

    switch (section) {
        case 'home':
            content = `
            <div class="center">
                <h1>Bem-vindo à Gym Cruzeiro</h1>
                <a class="link-button" href="login.html">Sou Aluno</a>
                <a class="link-button" href="cadastro.html">Cadastre-se</a>
                <br />
                <img style="width:1300px;" src="https://www.fecomercio.com.br/upload/img/2017/04/18/58f60e8c80d6b-noticia_hotel_com_academia_atrai_mais_h_spedes_corporativos.jpg" />
            </div>`;
            document.getElementById('main-content').innerHTML = content;
            break;
            

        case 'treinos':
            content = `
                <div>
                    <div>
                        <h1>Treinos</h1>
                        <p>Explore a lista de itens abaixo e clique para ver os detalhes.</p>
                    </div>
                    <label for="filter">Filtrar por Grupo Muscular:</label>
                    <select id="filter">
                        <option value="all">Todos</option>
                        <option value="Bíceps">Bíceps</option>
                        <option value="Tríceps">Tríceps</option>
                        <option value="Ombro">Ombro</option>
                    </select>
                </div>
                <div id="exercise-container">
                    <!-- Os treinos serão renderizados aqui -->
                </div>`;

            document.getElementById('main-content').innerHTML = content;

            function renderExercises() {
                let exerciseContent = '';
                trainings.forEach(training => {
                    exerciseContent += `
                        <h2 id="${training.name}">${training.name}</h2>
                        <div class="exercise-group">
                            ${training.exercises.map(exercise => `
                                <div class="card">
                                    <img src="${exercise.image}" alt="${exercise.subtitle}">
                                    <h3>${exercise.title}</h3>
                                    <p>${exercise.subtitle}</p>
                                    <button class="view-details" data-id="${exercise.id}">Ver Detalhes</button>
                                </div>
                            `).join('')}
                        </div>`;
                });

                document.getElementById('exercise-container').innerHTML = exerciseContent;

                document.querySelectorAll('.view-details').forEach(button => {
                    button.addEventListener('click', function() {
                        const exerciseId = this.getAttribute('data-id');
                        const selectedExercise = findExerciseById(exerciseId);
                        if (selectedExercise) {
                            loadExerciseDetails(selectedExercise);
                        }
                    });
                });
            }

            function findExerciseById(id) {
                for (const training of trainings) {
                    const exercise = training.exercises.find(ex => ex.id === parseInt(id));
                    if (exercise) return exercise;
                }
                return null;
            }

            function loadExerciseDetails(exercise) {
                const detailsContent = `
                    <h1>${exercise.title}</h1>
                    <img src="${exercise.image}" alt="${exercise.subtitle}">
                    <p>${exercise.description}</p>
                    <button id="back-to-list">Voltar à lista</button>
                `;
                document.getElementById('main-content').innerHTML = detailsContent;

                document.getElementById('back-to-list').addEventListener('click', function() {
                    loadSection('treinos');
                });
            }

            renderExercises();

            document.getElementById('filter').addEventListener('change', function () {
                const selectedValue = this.value;

                if (selectedValue === 'all') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    const targetSection = document.getElementById(selectedValue);
                    if (targetSection) {
                        targetSection.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
            break;

        case 'about':
            content = `
                <h1>Sobre</h1>
                <p>Gym Cruzeiro: A Jornada de Sucesso <br> <br>
                Em 2020, João e Maria, um casal apaixonado por fitness, decidiram abrir uma academia para transformar a vida das pessoas e criar uma comunidade saudável. 
                Com muito esforço e planejamento, fundaram o Gym Cruzeiro em um prédio central, oferecendo um ambiente moderno e acolhedor.
                A academia se destacou ao oferecer uma ampla gama de atividades e uma filosofia de tratamento personalizado, criando uma verdadeira comunidade entre os membros. 
                A demanda cresceu, levando à expansão das instalações e à introdução de tecnologia avançada como treinos online.
                O Gym Cruzeiro se tornou uma referência na cidade e além, recebendo prêmios e reconhecimento, mas sempre mantendo o foco em sua missão de promover um estilo de vida saudável e ativo.</p>`;
            document.getElementById('main-content').innerHTML = content;
            break;

        case 'contact':
            content = `
                <div class="contact-container">
                    <div class="contact-image">
                        <img src="img/img-contato.png" alt="Imagem da academia">
                    </div>
                    <div class="contact-info">
                        <div class="info-box">
                            <i class="fas fa-clock"></i>
                            <h2>Horário de funcionamento</h2>
                            <p>Seg a Sex: 5h - 23h</p>
                            <p>Sáb: 8h - 17h</p>
                            <p>Dom/Feriados: 8h - 14h</p>
                        </div>
                        <div class="info-box">
                            <i class="fas fa-map-marker-alt"></i>
                            <h2>Endereço</h2>
                            <p>Avenida Marechal Tito, 5946 - Itaim Paulista, São Paulo - SP</p>
                            <p>08115000</p>
                            <a href="https://www.google.com/maps?q=5946+Avenida+Marechal+Tito">Ver rota</a>
                        </div>
                        <div class="info-box">
                            <i class="fas fa-phone-alt"></i>
                            <h2>Telefone</h2>
                            <p>(11) 08115000</p>
                        </div>
                    </div>
                </div>`;
            document.getElementById('main-content').innerHTML = content;
            break;

        case 'login':
            fetch('login.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;
                })
                .catch(error => console.log('Erro ao carregar a página', error));
            break;

        case 'cadastro':
            fetch('cadastro.html')
                .then(response => response.text())
                .then(html => {
                    document.getElementById('main-content').innerHTML = html;

                    document.getElementById('contactForm').addEventListener('submit', function (event) {
                        event.preventDefault();

                        const fullName = document.getElementById('fullName').value;
                        const email = document.getElementById('email').value;
                        const cpf = document.getElementById('cpf').value;
                        const dob = document.getElementById('dob').value;
                        const weight = document.getElementById('weight').value;
                        const height = document.getElementById('height').value;
                        const goal = document.getElementById('goal').value;
                        const password = document.getElementById('password').value;
                        const confirmPassword = document.getElementById('confirmPassword').value;

                        if (password !== confirmPassword) {
                            alert('As senhas não coincidem!');
                            return;
                        }

                        console.log({
                            fullName,
                            email,
                            cpf,
                            dob,
                            weight,
                            height,
                            goal,
                            password,
                        });

                        alert('Cadastro realizado com sucesso!');
                    });
                })
                .catch(error => console.log('Erro ao carregar a página de cadastro', error));
            break;
    }
}

window.onload = function () {
    loadSection('home');  // para carregar a seção home primeiro
};

function loadItemList() {
    const itemList = document.getElementById('item-list');

    trainings.forEach(training => {
        const trainninghtml = `
            <div>
                <h1>${training.name}</h1>
                <div class="card-container" id="exercises${training.name}"></div>
            </div><br /><br />`;

        itemList.innerHTML += trainninghtml;

        const exercises = document.getElementById(`exercises${training.name}`);

        training.exercises.forEach(exercise => {
            const card = `
            <div class="card">
                <img src="${exercise.image}" alt="${exercise.title} Image">
                <h3>${exercise.title}</h3>
                <p>${exercise.subtitle}</p>
                <a href="#" onclick="showDetails('${training.name}','${exercise.id}')">Ver Detalhes</a>
            </div>`;

            exercises.innerHTML += card;
        });
    });
}

function showDetails(training, exerciseId) {
    const item = trainings
        .find(item => item.name == training)
        .exercises
        .find(item => item.id == exerciseId);

    const content = `
        <section id="item-details">
            <h1>Treino: ${training}</h1>
            <h2>${item.title}</h2>
            <h2>Nome do Exercício: ${item.subtitle}</h2>
            <img src="${item.image}" alt="${item.title} Image">
            <p>${item.description}</p>
            <button class="back" onclick="loadSection('treinos')">Voltar</button>
        </section>
    `;
    document.getElementById('main-content').innerHTML = content;
}