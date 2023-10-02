// Desplazamiento suave al hacer clic en enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Ajusta el desplazamiento para no ocultar el encabezado
                behavior: 'smooth'
            });
        }
    });
});

// Validación de formulario básica (puedes personalizarla según tus necesidades)
document.querySelector('form').addEventListener('submit', function (e) {
    const nombre = document.querySelector('#nombre').value;
    const email = document.querySelector('#email').value;

    if (!nombre || !email) {
        e.preventDefault(); // Evita el envío del formulario
        alert('Por favor, complete todos los campos.');
    }
});
