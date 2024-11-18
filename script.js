document.addEventListener("DOMContentLoaded", function() {
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
                    adjustScrollBehavior(); // Recalcule le défilement après l'animation
                }
            }
        });
    });



    // Ajouter un bouton "Retour en haut" après défilement
    const backToTopButton = document.createElement('button');
    backToTopButton.innerText = '⬆️';
    backToTopButton.id = 'back-to-top';
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '0vh';
    backToTopButton.style.right = '10%';
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
    // function showDescription(descriptionId) {
    //     // Masquer la section des projets
    //     document.getElementById('ecole42').style.display = 'none';

    //     // Masquer toutes les descriptions avant d'en afficher une
    //     document.querySelectorAll('.description').forEach(function(desc) {
    //         desc.classList.remove('show');
    //         desc.style.display = 'none';
    //     });

    //     // Afficher la description demandée
    //     var description = document.getElementById(descriptionId);
    //     var button = document.querySelector('.back-button');
    //     if (description) {
    //         description.style.display = 'block'; // Assurer que la section est visible
    //         setTimeout(function() {
    //             description.classList.add('show'); // Ajouter la classe pour afficher avec transition
    //         }, 10); // Légère pause pour permettre à la section d'être affichée avant de commencer la transition

    //         button.style.display = 'block'; // Afficher le bouton de retour
    //     }
    // }

    // // Fonction pour cacher les descriptions et réafficher les projets
    // function hideDescription() {
    //     var video = document.getElementById('video_in_description');
    //     if (video) {
    //         video.pause(); // Mettre la vidéo en pause avant de masquer la description
    //     }

    //     document.querySelectorAll('.description').forEach(function(description) {
    //         if (description.classList.contains('show')) {
    //             description.classList.remove('show'); // Retirer la classe pour cacher avec transition
    //             setTimeout(function() {
    //                 description.style.display = 'none'; // Assurer que la section est bien cachée
    //             }, 1000); // Correspond à la durée de la transition
    //         }
    //     });

    //     // Réafficher la section des projets
    //     setTimeout(function() {
    //         var ecole42 = document.getElementById('ecole42');
    //         ecole42.style.display = 'block';
    //         ecole42.style.opacity = 0;
    //         setTimeout(function() {
    //             ecole42.style.transition = 'opacity 1s ease-in-out';
    //             ecole42.style.opacity = 1;
    //         }, 50);
    //     }, 1000); // Délai correspondant à la durée de la transition de fade-out
    // }

    // document.getElementById('projet_minishell').addEventListener('click', function(event) {
    //     showDescription('description_minishell');
    // });

    // document.getElementById('projet_cub3d').addEventListener('click', function(event) {
    //     showDescription('description_cub3d');
    // });

    // document.getElementById('projet_Solong').addEventListener('click', function(event) {
    //     showDescription('description_Solong');
    // });

    // document.getElementById('projet_pushswap').addEventListener('click', function(event) {
    //     showDescription('description_pushswap');
    // });

    // document.getElementById('projet_philo').addEventListener('click', function(event) {
    //     showDescription('description_philo');
    // });

    // document.getElementById('projet_minitalk').addEventListener('click', function(event) {
    //     showDescription('description_minitalk');
    // });

    // document.querySelectorAll('.back-button').forEach(function(button) {
    //     button.addEventListener('click', function(event) {
    //         event.preventDefault();
    //         hideDescription();
    //     });
    // });

    // Fonction pour ajuster le comportement de défilement
    // function adjustScrollBehavior() {
    //     var container = document.getElementById('ecole42-container');

    //     // Vérifie si le contenu dépasse la hauteur visible
    //     if (container.scrollHeight > container.clientHeight) {
    //         // Si le contenu dépasse, permet le défilement
    //         container.style.overflow = 'auto';
    //     } else {
    //         // Sinon, cache les barres de défilement
    //         container.style.overflow = 'hidden';
    //     }
    // }

    // // Appel de la fonction lors du chargement de la page
    // window.onload = adjustScrollBehavior;

    // // Appel de la fonction lors du redimensionnement de la fenêtre
    // window.onresize = adjustScrollBehavior;

    document.addEventListener('mousemove', function(e) {
        const light = document.getElementById('cursor-light');
        light.style.left = `${e.clientX}px`;
        light.style.top = `${e.clientY}px`;
    });

	function closePanel() {
		const panel = document.getElementById('panel');
		panel.classList.remove('show');
	}
	
	// Ouvre le panel lorsque tu cliques sur le bouton
	document.getElementById('toggleButton').addEventListener('click', function() {
		const panel = document.getElementById('panel');
		panel.classList.add('show');
	});

	document.getElementById('closeButtonPanel').addEventListener('click', function() {
		const panel = document.getElementById('panel');
		panel.classList.remove('show');
	});
	
	// Ferme le panel lorsque tu cliques sur n'importe quel lien
	const navvLinks = document.querySelectorAll('.nav-centerV2 a');
	navvLinks.forEach(link => {
		link.addEventListener('click', closePanel);
	});


    const langButton = document.getElementById('lang-button');
    const langText = document.getElementById('lang-text');
    const langList = document.getElementById('lang-list');
    const langItems = document.querySelectorAll('.lang-item');
    
    // Cacher ou afficher la liste des langues au clic sur le bouton
    langButton.addEventListener('click', function() {
        if (langList.style.display === 'block') {
            langList.style.display = 'none';  // Masquer la liste
        } else {
            langList.style.display = 'block'; // Afficher la liste
        }
    });
    
    // Langues définies
    const fr = {
        'home': 'Accueil',
        'about': 'À propos',
        'projects': 'Projets',
        'contact': 'Contact',
        'toggleButton': 'Menu',
        'closeButtonPanel': 'Fermer',
        'lang': 'Langue',
        'lang-menu': ['Français', 'Anglais', 'Español'],
        'Code par ilyan': 'Code Par Ilyan',
        'Mon experience': 'Mon expérience',
        'Etudiant a 42 lyon': 'Étudiant à 42 Lyon',
        "En tant qu'étudiant à l'école 42, je me consacre à l'apprentissage continu en informatique. Je développe mes compétences en programmation et en résolution de problèmes techniques au sein de cette école innovante.": "En tant qu'étudiant à l'école 42, je me consacre à l'apprentissage continu en informatique. Je développe mes compétences en programmation et en résolution de problèmes techniques au sein de cette école innovante. ",
        'développeur de jeux vidéo': 'Développeur de jeux vidéo',
    };
    
    const en = {
        'home': 'Home',
        'about': 'About',
        'projects': 'Projects',
        'contact': 'Contact',
        'toggleButton': 'Menu',
        'closeButtonPanel': 'Close',
        'lang': 'Language',
        'lang-menu': ['French', 'English', 'Spanish'],
        'Code par ilyan': 'Code By Ilyan',
        'Mon experience': 'My experience',
        'Etudiant a 42 lyon': 'Student at 42 Lyon',
        "En tant qu'étudiant à l'école 42, je me consacre à l'apprentissage continu en informatique. Je développe mes compétences en programmation et en résolution de problèmes techniques au sein de cette école innovante.": "As a student at 42 school, I am dedicated to continuous learning in computer science. I am developing my programming skills and technical problem-solving within this innovative school.",
        'développeur de jeux vidéo': 'Video game developer',
    };
    
    const es = {
        'home': 'Inicio',
        'about': 'Acerca de',
        'projects': 'Proyectos',
        'contact': 'Contacto',
        'toggleButton': 'Menú',
        'closeButtonPanel': 'Cerrar',
        'lang': 'Idioma',
        'lang-menu': ['Francés', 'Inglés', 'Español'],
        'Code par ilyan': 'Código Por Ilyan',
        'Mon experience': 'Mi experiencia',
        'Etudiant a 42 lyon': 'Estudiante en 42 Lyon',
        "En tant qu'étudiant à l'école 42, je me consacre à l'apprentissage continu en informatique. Je développe mes compétences en programmation et en résolution de problèmes techniques au sein de cette école innovante.": "Como estudiante en la escuela 42, estoy dedicado al aprendizaje continuo en ciencias de la computación. Estoy desarrollando mis habilidades de programación y resolución de problemas técnicos dentro de esta escuela innovadora.",
        'développeur de jeux vidéo': 'Desarrollador de videojuegos',
    };
    
    // Fonction pour mettre à jour les éléments avec data-translate
    function changeLanguage(language) {
        let translations;
        if (language === 'fr') {
            translations = fr;
        } else if (language === 'en') {
            translations = en;
        } else if (language === 'es') {
            translations = es;
        }
    
        // Mettre à jour tous les éléments avec l'attribut data-translate
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            
            // Si une traduction est trouvée, ne changer que le texte et préserver les autres éléments
            if (translations[key]) {
                // On peut tester si l'élément contient du texte seulement, ou d'autres éléments comme une image
                element.innerText = translations[key];
            }
        });
    }
    
    // Gestion des événements pour changer la langue
    langItems.forEach(item => {
        item.addEventListener('click', function() {
            let language;
            if (item.innerText === 'Français') {
                language = 'fr';
            } else if (item.innerText === 'Anglais') {
                language = 'en';
            } else if (item.innerText === 'Español') {
                language = 'es';
            }
            langText.innerText = item.innerText; // Met à jour le texte du bouton
            langList.style.display = 'none'; // Cache la liste
            changeLanguage(language); // Applique la langue sélectionnée
        });
    });






});
