document.addEventListener("DOMContentLoaded", () => {
    // Animation d'apparition du contenu au chargement de la page
    const mainContent = document.querySelector('main');
    mainContent.style.opacity = 0;
    mainContent.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        mainContent.style.opacity = 1;
    }, 500);

    // Animation sur les liens du menu
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
            link.style.transition = 'transform 0.2s ease-in-out';
        });

        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });

        // Défilement en douceur pour les liens du menu
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Ajouter un bouton "Retour en haut" après défilement
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '⬆️';
    backToTopButton.id = 'back-to-top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.padding = '10px 15px';
    backToTopButton.style.backgroundColor = '#333';
    backToTopButton.style.color = '#fff';
    backToTopButton.style.border = 'none';
    backToTopButton.style.borderRadius = '5px';
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.display = 'none';
    document.body.appendChild(backToTopButton);


    // Afficher le bouton "Retour en haut" lorsque l'utilisateur fait défiler la page
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

	

    // Animation des titres lors du survol
    const titles = document.querySelectorAll('h1, h2');
    titles.forEach(title => {
        title.addEventListener('mouseover', () => {
            title.style.color = 'green';
            title.style.transition = 'color 0.3s ease-in-out';
        });

        title.addEventListener('mouseout', () => {
            title.style.color = '';
        });
    });

    // Effet de tapotement sur l'accueil

    // Animation de shake
    const styleElement = document.createElement('style');
    styleElement.innerHTML = `
        @keyframes shake {
            0% { transform: translate(1px, 1px) rotate(0deg); }
            10% { transform: translate(-1px, -2px) rotate(-1deg); }
            20% { transform: translate(-3px, 0px) rotate(1deg); }
            30% { transform: translate(3px, 2px) rotate(0deg); }
            40% { transform: translate(1px, -1px) rotate(1deg); }
            50% { transform: translate(-1px, 2px) rotate(-1deg); }
            60% { transform: translate(-3px, 1px) rotate(0deg); }
            70% { transform: translate(3px, 1px) rotate(-1deg); }
            80% { transform: translate(-1px, -1px) rotate(1deg); }
            90% { transform: translate(1px, 2px) rotate(0deg); }
            100% { transform: translate(1px, -2px) rotate(-1deg); }
        }
    `;
    document.head.appendChild(styleElement);
});
