const checkbox = document.getElementById('dark-mode-toggle');
const body = document.body;

checkbox.addEventListener('change', function () {
    if (this.checked) {
        body.classList.toggle('dark-mode');
    }
});
