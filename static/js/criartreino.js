
// Populate exercises from exercicio.html
fetch('exercicio.html')
    .then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const exercises = doc.querySelectorAll('option');
        const select = document.getElementById('exercicios');
        
        exercises.forEach(exercise => {
            const option = document.createElement('option');
            option.value = exercise.value;
            option.text = exercise.text;
            select.appendChild(option);
        });
    });

// Handle form submission
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    // Create new workout logic here
    console.log(formData);
});


