document.getElementById('image').addEventListener('change', previewImage);

function previewImage(event) {
    const imagePreview = document.getElementById('image-preview');
    const file = event.target.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function() {
            imagePreview.src = reader.result;
            imagePreview.style.display = 'block'; 
        }
        reader.readAsDataURL(file);
    } else {
        imagePreview.src = '';
        imagePreview.style.display = 'none'; 
    }
}