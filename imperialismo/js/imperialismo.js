@param {string} id - Element id of the content to toggle.

function toggleDetails(id) {
    const content = document.getElementById(id);
    const button = content.previousElementSibling; 

  
    content.classList.toggle('active');

   
    if (content.classList.contains('active')) {
        button.textContent = 'Nascondi dettagli';
    } else {
        button.textContent = 'Mostra dettagli';
    }
}


document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});