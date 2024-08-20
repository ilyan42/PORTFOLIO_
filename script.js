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


// Fonction pour afficher une description et cacher les autres
	function showDescription(descriptionId) {
		// Masquer la section des projets
		document.getElementById('ecole42').style.display = 'none';

		// Masquer toutes les descriptions avant d'en afficher une
		document.querySelectorAll('.description').forEach(function(desc) {
			desc.classList.remove('show');
			desc.style.display = 'none';
		});

		// Afficher la description demandée
		var description = document.getElementById(descriptionId);
		var button = document.querySelector('.back-button');
		if (description) {
			description.style.display = 'block'; // Assurer que la section est visible
			setTimeout(function() {
				description.classList.add('show'); // Ajouter la classe pour afficher avec transition
			}, 10); // Légère pause pour permettre à la section d'être affichée avant de commencer la transition

			button.style.display = 'block'; // Afficher le bouton de retour
		}
	}

	// Fonction pour cacher les descriptions et réafficher les projets
	function hideDescription() {

		var video = document.getElementById('video_in_description');
		if (video) {
			video.pause(); // Mettre la vidéo en pause avant de masquer la description
		}

		document.querySelectorAll('.description').forEach(function(description) {
			if (description.classList.contains('show')) {
				description.classList.remove('show'); // Retirer la classe pour cacher avec transition
				setTimeout(function() {
					description.style.display = 'none'; // Assurer que la section est bien cachée
				}, 1000); // Correspond à la durée de la transition
			}
		});

		// Réafficher la section des projets
		setTimeout(function() {
			var ecole42 = document.getElementById('ecole42');
			ecole42.style.display = 'block';
			ecole42.style.opacity = 0;
			setTimeout(function() {
				ecole42.style.transition = 'opacity 1s ease-in-out';
				ecole42.style.opacity = 1;
			}, 50);
		}, 1000); // Délai correspondant à la durée de la transition de fade-out
	}

	// Ajout des gestionnaires d'événements pour chaque projet
	document.getElementById('projet_minishell').addEventListener('click', function(event) {
		showDescription('description_minishell');
	});

	document.getElementById('projet_cub3d').addEventListener('click', function(event) {
		showDescription('description_cub3d');
	});

	document.getElementById('projet_Solong').addEventListener('click', function(event) {
		showDescription('description_Solong');
	});

	document.getElementById('projet_pushswap').addEventListener('click', function(event) {
		showDescription('description_pushswap');
	});

	document.getElementById('projet_philo').addEventListener('click', function(event) {
		showDescription('description_philo');
	});

	document.getElementById('projet_minitalk').addEventListener('click', function(event) {
		showDescription('description_minitalk');
	});

	// Gestion du bouton de retour
	document.querySelectorAll('.back-button').forEach(function(button) {
		button.addEventListener('click', function(event) {
			event.preventDefault();
			hideDescription();
		});
	});

	
	
});

function adjustScrollBehavior() {
	var container = document.getElementById('ecole42-container');

	// Vérifie si le contenu dépasse la hauteur visible
	if (container.scrollHeight > container.clientHeight) {
		// Si le contenu dépasse, permet le défilement
		container.style.overflow = 'auto';
	} else {
		// Sinon, cache les barres de défilement
		container.style.overflow = 'hidden';
	}
}

// Appel de la fonction lors du chargement de la page
window.onload = adjustScrollBehavior;

// Appel de la fonction lors du redimensionnement de la fenêtre
window.onresize = adjustScrollBehavior;
