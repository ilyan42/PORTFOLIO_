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

    // Ajouter l'événement de clic pour remonter en haut de la page
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

	// Affichage de la description Minishell
// Affichage de la description Minishell
	document.getElementById('projet_minishell').addEventListener('click', function(event) {
		event.preventDefault();
		
		// Masquer la section des projets
		document.getElementById('ecole42').style.display = 'none';
		
		// Afficher la section de description avec transition
		var description = document.getElementById('description_minishell');
		var button = document.getElementById('backButton');
		if (description) {
			description.classList.add('show'); // Ajouter la classe pour afficher avec glissement
			button.style.display = 'block';
		}
	});

	// Retour à la liste des projets
	document.getElementById('backButton').addEventListener('click', function(event) {
		event.preventDefault();

		// Masquer la section de description avec transition
		var description = document.getElementById('description_minishell');
		var button = document.getElementById('backButton');
		if (description) {
			description.classList.remove('show'); // Retirer la classe pour cacher avec transition
			button.style.display = 'none';
		}

		// Attendre la fin de la transition avant d'afficher la section des projets
		setTimeout(function() {
			document.getElementById('ecole42').style.display = 'block';
		},1500); // Délai correspondant à la durée de la transition
	});

	// Affichage de la description cub3d

	document.getElementById('projet_cub3d').addEventListener('click', function(event) {
		event.preventDefault();
		
		// Masquer la section des projets
		document.getElementById('ecole42').style.display = 'none';
		
		// Afficher la section de description avec transition
		var description = document.getElementById('description_cub3d');
		var button = document.getElementById('backButton');
		if (description) {
			description.classList.add('show'); // Ajouter la classe pour afficher avec glissement
			button.style.display = 'block';
		}
	});

	// Retour à la liste des projets

	document.getElementById('backButton').addEventListener('click', function(event) {
		event.preventDefault();
	
		// Masquer la section de description avec transition
		var description = document.getElementById('description_cub3d');
		var button = document.getElementById('backButton');
		
		if (description) {
			description.classList.remove('show'); // Retirer la classe pour cacher avec transition
			button.style.display = 'none';
		}
	
		// Attendre la fin de la transition avant de réafficher la section des projets avec un fade-in
		setTimeout(function() {
			var ecole42 = document.getElementById('ecole42');
			
			// Assurer que l'élément est visible et commencer avec une opacité de 0
			ecole42.style.display = 'block';
			ecole42.style.opacity = 0;
	
			// Appliquer une transition pour un effet de fade-in
			setTimeout(function() {
				ecole42.style.transition = 'opacity 1.5s ease-in-out';
				ecole42.style.opacity = 1;
			}, 50); // Légère pause pour permettre à l'affichage de se stabiliser avant de commencer le fade-in
		}, 1500); // Délai correspondant à la durée de la transition de fade-out
	});
	

});

