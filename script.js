// Create floating petals
function createPetal() {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDelay = Math.random() * 8 + 's';
    petal.style.animationDuration = (Math.random() * 3 + 8) + 's';
    
    // Random colors for petals
    const colors = ['#f4d03f', '#d4af37', '#fce4ec', '#ffebee', '#fff3e0'];
    petal.style.background = colors[Math.floor(Math.random() * colors.length)];
    
    document.getElementById('petals').appendChild(petal);
    
    setTimeout(() => {
        petal.remove();
    }, 11000);
}

// Create petals periodically
setInterval(createPetal, 2000);

// Smooth scrolling for better flow
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add some initial petals
for (let i = 0; i < 8; i++) {
    setTimeout(createPetal, i * 1000);
} 