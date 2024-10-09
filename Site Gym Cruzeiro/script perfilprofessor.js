const form = document.querySelector('form');  // Seleciona o formulário

// Adiciona um evento para quando o formulário for enviado
form.addEventListener('submit', (e) => {  
  e.preventDefault();  // Impede o envio padrão do formulário
  const name = document.getElementById('name').value;  // Obtém o valor do campo de nome
  const cpf = document.getElementById('cpf').value;  // Obtém o valor do campo de CPF
  const birthdate = document.getElementById('birthdate').value;  // Obtém o valor do campo de data de nascimento
  const email = document.getElementById('email').value;  // Obtém o valor do campo de e-mail
  const phone = document.getElementById('phone').value;  // Obtém o valor do campo de telefone
  const specialty = document.getElementById('specialty').value;  // Obtém o valor do campo de especialidade
  const hiredate = document.getElementById('hiredate').value;  // Obtém o valor do campo de data de contratação
  // Envia os dados para o servidor ou manipula o envio do formulário aqui  
  console.log('Formulário enviado:', name, cpf, birthdate, email, phone, specialty, hiredate);  // Exibe os dados no console
});


