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
    const closeButtonLang = document.getElementById('closeButtonLang');

    // Fonction pour ouvrir/fermer la liste des langues
    function toggleLangList() {
        langList.classList.toggle('active'); // Bascule la classe 'active' pour ouvrir/fermer
    }
    
    // Fonction pour fermer la liste des langues
    function closeLangList() {
        langList.classList.remove('active');
    }
    
    // Ouvre ou ferme la liste des langues au clic sur le bouton
    langButton.addEventListener('click', toggleLangList);
    
    // Ferme la liste des langues lorsque l'on clique sur un item de langue
    langItems.forEach(item => {
        item.addEventListener('click', () => {
            // Vous pouvez éventuellement mettre à jour `langText` avec le texte de la langue sélectionnée
            langText.textContent = item.textContent;
            closeLangList(); // Ferme la liste après avoir sélectionné une langue
        });
    });
    
    // Ferme la liste des langues lorsqu'on clique sur le bouton "Back"
    closeButtonLang.addEventListener('click', closeLangList);

    // Fermer la liste des langues au clic sur un lien


    
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
		"En tant que passionné de jeux vidéo, je crée et développe mes propres jeux en utilisant des outils comme Unity. Je me concentre sur la réalisation de projets personnels qui me permettent d'explorer ma créativité et mes compétences techniques. " : "En tant que passionné de jeux vidéo, je crée et développe mes propres jeux en utilisant des outils comme Unity. Je me concentre sur la réalisation de projets personnels qui me permettent d'explorer ma créativité et mes compétences techniques. ",
		'Compétences Techniques' : 'Compétences Techniques',
		"Modélisation d'objets 3D sur Blender" : "Modélisation d'objets 3D sur Blender",
		"Passionné par la création d'objets 3D, je pratique régulièrement sur Blender pour perfectionner mes compétences en modélisation, texturisation et rendu. Mon expérience inclut la réalisation de modèles complexes et la maîtrise des outils avancés du logiciel." : "Passionné par la création d'objets 3D, je pratique régulièrement sur Blender pour perfectionner mes compétences en modélisation, texturisation et rendu. Mon expérience inclut la réalisation de modèles complexes et la maîtrise des outils avancés du logiciel.",
		'Création de sites Internet' : 'Création de sites Internet',
		"En apprentissage actif dans le domaine du développement web, je me forme à la création de sites internet en explorant diverses technologies et outils. Je mets en pratique mes connaissances en HTML, CSS et JavaScript pour concevoir et développer des sites web fonctionnels et esthétiques." : "En apprentissage actif dans le domaine du développement web, je me forme à la création de sites internet en explorant diverses technologies et outils. Je mets en pratique mes connaissances en HTML, CSS et JavaScript pour concevoir et développer des sites web fonctionnels et esthétiques.",
		"Dans ce platformer, vous incarnez Aria, une héroïne courageuse en quête des âmes perdues. Ces âmes, sous forme d'armes puissantes, sont dispersées à travers différents niveaux, chaque niveau abritant une arme unique. Votre mission est de toutes les rassembler pour affronter Vespera, le grand méchant qui menace le monde et introduit l'histoire du jeu." : "Dans ce platformer, vous incarnez Aria, une héroïne courageuse en quête des âmes perdues. Ces âmes, sous forme d'armes puissantes, sont dispersées à travers différents niveaux, chaque niveau abritant une arme unique. Votre mission est de toutes les rassembler pour affronter Vespera, le grand méchant qui menace le monde et introduit l'histoire du jeu.",
		"Minishell est un projet de l'école 42 où j'ai recréé un shell simple. Le but était d'apprendre à gérer l'exécution de commandes, les processus, les signaux et les variables d'environnement. Ce projet m'a permis de renforcer mes compétences en programmation système et d'acquérir une meilleure compréhension des systèmes d'exploitation." : "Minishell est un projet de l'école 42 où j'ai recréé un shell simple. Le but était d'apprendre à gérer l'exécution de commandes, les processus, les signaux et les variables d'environnement. Ce projet m'a permis de renforcer mes compétences en programmation système et d'acquérir une meilleure compréhension des systèmes d'exploitation.",
		"Cub3D est un projet de l'école 42 où j'ai recréé un moteur graphique 3D en utilisant la bibliothèque miniLibX. L'objectif était de comprendre le raycasting, de gérer les textures, le déplacement du joueur et les collisions. Ce projet m'a permis de renforcer mes compétences en programmation graphique et de mieux comprendre le fonctionnement des moteurs 3D." : "Cub3D est un projet de l'école 42 où j'ai recréé un moteur graphique 3D en utilisant la bibliothèque miniLibX. L'objectif était de comprendre le raycasting, de gérer les textures, le déplacement du joueur et les collisions. Ce projet m'a permis de renforcer mes compétences en programmation graphique et de mieux comprendre le fonctionnement des moteurs 3D.",
		"So_long est un projet de l'école 42 où j'ai recréé un jeu de type 'Sokoban' en 2D avec miniLibX. Le but était d'apprendre à gérer un moteur de jeu 2D et les événements clavier/souris. J'ai implémenté le rendu 2D, le déplacement du joueur, et la gestion des ennemis et objets, renforçant ainsi mes compétences en développement de jeux vidéo." : "So_long est un projet de l'école 42 où j'ai recréé un jeu de type 'Sokoban' en 2D avec miniLibX. Le but était d'apprendre à gérer un moteur de jeu 2D et les événements clavier/souris. J'ai implémenté le rendu 2D, le déplacement du joueur, et la gestion des ennemis et objets, renforçant ainsi mes compétences en développement de jeux vidéo.",
		"Étudiant passionné et motivé, je suis toujours prêt à collaborer et à échanger. Contactez-moi pour discuter de projets ou d'opportunités !" : "Étudiant passionné et motivé, je suis toujours prêt à collaborer et à échanger. Contactez-moi pour discuter de projets ou d'opportunités !",
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
		"En tant que passionné de jeux vidéo, je crée et développe mes propres jeux en utilisant des outils comme Unity. Je me concentre sur la réalisation de projets personnels qui me permettent d'explorer ma créativité et mes compétences techniques.": "As a video game enthusiast, I create and develop my own games using tools like Unity. I focus on personal projects that allow me to explore my creativity and technical skills.",
		'Compétences Techniques' : 'Technical Skills',
		"Modélisation d'objets 3D sur Blender" : "3D Object Modeling on Blender",
		"Passionné par la création d'objets 3D, je pratique régulièrement sur Blender pour perfectionner mes compétences en modélisation, texturisation et rendu. Mon expérience inclut la réalisation de modèles complexes et la maîtrise des outils avancés du logiciel." : "Passionate about creating 3D objects, I regularly practice on Blender to improve my skills in modeling, texturing, and rendering. My experience includes creating complex models and mastering advanced software tools.",
		'Création de sites Internet' : 'Web Development',
		"En apprentissage actif dans le domaine du développement web, je me forme à la création de sites internet en explorant diverses technologies et outils. Je mets en pratique mes connaissances en HTML, CSS et JavaScript pour concevoir et développer des sites web fonctionnels et esthétiques." : "Actively learning in the field of web development, I am training in creating websites by exploring various technologies and tools. I put my knowledge into practice in HTML, CSS, and JavaScript to design and develop functional and aesthetic websites.",
		"Dans ce platformer, vous incarnez Aria, une héroïne courageuse en quête des âmes perdues. Ces âmes, sous forme d'armes puissantes, sont dispersées à travers différents niveaux, chaque niveau abritant une arme unique. Votre mission est de toutes les rassembler pour affronter Vespera, le grand méchant qui menace le monde et introduit l'histoire du jeu." : "In this platformer, you play as Aria, a brave heroine in search of lost souls. These souls, in the form of powerful weapons, are scattered throughout different levels, each level housing a unique weapon. Your mission is to gather them all to face Vespera, the big bad who threatens the world and introduces the game's story.",
		"Minishell est un projet de l'école 42 où j'ai recréé un shell simple. Le but était d'apprendre à gérer l'exécution de commandes, les processus, les signaux et les variables d'environnement. Ce projet m'a permis de renforcer mes compétences en programmation système et d'acquérir une meilleure compréhension des systèmes d'exploitation." : "Minishell is a project from 42 school where I recreated a simple shell. The goal was to learn how to manage command execution, processes, signals, and environment variables. This project allowed me to strengthen my system programming skills and gain a better understanding of operating systems.",
		"Cub3D est un projet de l'école 42 où j'ai recréé un moteur graphique 3D en utilisant la bibliothèque miniLibX. L'objectif était de comprendre le raycasting, de gérer les textures, le déplacement du joueur et les collisions. Ce projet m'a permis de renforcer mes compétences en programmation graphique et de mieux comprendre le fonctionnement des moteurs 3D." : "Cub3D is a project from 42 school where I recreated a 3D graphics engine using the miniLibX library. The goal was to understand raycasting, manage textures, player movement, and collisions. This project allowed me to strengthen my graphics programming skills and better understand how 3D engines work.",
		"So_long est un projet de l'école 42 où j'ai recréé un jeu de type 'Sokoban' en 2D avec miniLibX. Le but était d'apprendre à gérer un moteur de jeu 2D et les événements clavier/souris. J'ai implémenté le rendu 2D, le déplacement du joueur, et la gestion des ennemis et objets, renforçant ainsi mes compétences en développement de jeux vidéo." : "So_long is a project from 42 school where I recreated a 'Sokoban' type game in 2D with miniLibX. The goal was to learn how to manage a 2D game engine and keyboard/mouse events. I implemented 2D rendering, player movement, and enemy and object management, thus strengthening my video game development skills.",
		"Étudiant passionné et motivé, je suis toujours prêt à collaborer et à échanger. Contactez-moi pour discuter de projets ou d'opportunités !" : "Passionate and motivated student, I am always ready to collaborate and exchange. Contact me to discuss projects or opportunities!",
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
		"En tant que passionné de jeux vidéo, je crée et développe mes propres jeux en utilisant des outils comme Unity. Je me concentre sur la réalisation de projets personnels qui me permettent d'explorer ma créativité et mes compétences techniques.": "Como entusiasta de los videojuegos, creo y desarrollo mis propios juegos utilizando herramientas como Unity. Me enfoco en proyectos personales que me permiten explorar mi creatividad y habilidades técnicas.",
		'Compétences Techniques' : 'Habilidades Técnicas',
		"Modélisation d'objets 3D sur Blender" : "Modelado de Objetos 3D en Blender",
		"Passionné par la création d'objets 3D, je pratique régulièrement sur Blender pour perfectionner mes compétences en modélisation, texturisation et rendu. Mon expérience inclut la réalisation de modèles complexes et la maîtrise des outils avancés du logiciel." : "Apasionado por la creación de objetos 3D, practico regularmente en Blender para mejorar mis habilidades en modelado, texturizado y renderizado. Mi experiencia incluye la creación de modelos complejos y el dominio de herramientas avanzadas del software.",
		'Création de sites Internet' : 'Desarrollo Web',
		"En apprentissage actif dans le domaine du développement web, je me forme à la création de sites internet en explorant diverses technologies et outils. Je mets en pratique mes connaissances en HTML, CSS et JavaScript pour concevoir et développer des sites web fonctionnels et esthétiques." : "Aprendiendo activamente en el campo del desarrollo web, me estoy formando en la creación de sitios web explorando diversas tecnologías y herramientas. Pongo en práctica mis conocimientos en HTML, CSS y JavaScript para diseñar y desarrollar sitios web funcionales y estéticos.",
		"Dans ce platformer, vous incarnez Aria, une héroïne courageuse en quête des âmes perdues. Ces âmes, sous forme d'armes puissantes, sont dispersées à travers différents niveaux, chaque niveau abritant une arme unique. Votre mission est de toutes les rassembler pour affronter Vespera, le grand méchant qui menace le monde et introduit l'histoire du jeu." : "En este juego de plataformas, juegas como Aria, una valiente heroína en busca de almas perdidas. Estas almas, en forma de poderosas armas, están dispersas en diferentes niveles, cada nivel albergando un arma única. Tu misión es reunirlas todas para enfrentarte a Vespera, el gran malvado que amenaza al mundo e introduce la historia del juego.",
		"Minishell est un projet de l'école 42 où j'ai recréé un shell simple. Le but était d'apprendre à gérer l'exécution de commandes, les processus, les signaux et les variables d'environnement. Ce projet m'a permis de renforcer mes compétences en programmation système et d'acquérir une meilleure compréhension des systèmes d'exploitation." : "Minishell es un proyecto de la escuela 42 donde recreé un shell simple. El objetivo era aprender a gestionar la ejecución de comandos, procesos, señales y variables de entorno. Este proyecto me permitió fortalecer mis habilidades de programación de sistemas y adquirir una mejor comprensión de los sistemas operativos.",
		"Cub3D est un projet de l'école 42 où j'ai recréé un moteur graphique 3D en utilisant la bibliothèque miniLibX. L'objectif était de comprendre le raycasting, de gérer les textures, le déplacement du joueur et les collisions. Ce projet m'a permis de renforcer mes compétences en programmation graphique et de mieux comprendre le fonctionnement des moteurs 3D." : "Cub3D es un proyecto de la escuela 42 donde recreé un motor gráfico 3D utilizando la biblioteca miniLibX. El objetivo era comprender el raycasting, gestionar texturas, movimiento de jugadores y colisiones. Este proyecto me permitió fortalecer mis habilidades de programación gráfica y comprender mejor cómo funcionan los motores 3D.",
		"So_long est un projet de l'école 42 où j'ai recréé un jeu de type 'Sokoban' en 2D avec miniLibX. Le but était d'apprendre à gérer un moteur de jeu 2D et les événements clavier/souris. J'ai implémenté le rendu 2D, le déplacement du joueur, et la gestion des ennemis et objets, renforçant ainsi mes compétences en développement de jeux vidéo." : "So_long es un proyecto de la escuela 42 donde recreé un juego de tipo 'Sokoban' en 2D con miniLibX. El objetivo era aprender a gestionar un motor de juego 2D y eventos de teclado/ratón. Implementé el renderizado 2D, el movimiento del jugador y la gestión de enemigos y objetos, fortaleciendo así mis habilidades en el desarrollo de videojuegos.",
		"Étudiant passionné et motivé, je suis toujours prêt à collaborer et à échanger. Contactez-moi pour discuter de projets ou d'opportunités !" : "Estudiante apasionado y motivado, siempre estoy listo para colaborar e intercambiar ideas. ¡Contáctame para discutir proyectos u oportunidades!",
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
	document.querySelectorAll('.lang-item').forEach(item => {
		item.addEventListener('click', function() {
			let language;
			const cleanText = item.innerText.split(' ')[0].trim();
	
			if (cleanText === 'Français') {
				language = 'fr';
			} else if (cleanText === 'Anglais') {
				language = 'en';
			} else if (cleanText === 'Español') {
				language = 'es';
			}
	
			const langText = document.getElementById('lang-text');
			const langList = document.getElementById('lang-list');
			langText.innerText = item.innerText; // Met à jour le texte du bouton avec emoji inclus
			langList.style.display = closeLangList(); // Ferme la liste des langues après avoir sélectionné une langue
			changeLanguage(language); // Applique la langue sélectionnée
		});
	});


	const leftZones = document.getElementsByClassName('left-zone');
	const rightZones = document.getElementsByClassName('right-zone');
	const premierJeux = document.getElementsByClassName('premierJeux');
	const ImagePremierJeux = document.getElementById('ImagePremierJeux');
	const LinkPremierJeux = document.getElementById('LinkPremierJeux');
	const containerUnreal = document.querySelector('.container-unreal');
    const backButton = document.getElementById('back');
	
	// Ajouter un événement au bouton
	const firstGameButton = document.getElementsByClassName('zone-button1')[0];  // Prendre le premier élément de la collection
	
	if (firstGameButton)
    {
		firstGameButton.addEventListener('click', function() {
			// Masquer la zone gauche et droite
			if (leftZones.length > 0) {
				leftZones[0].style.display = 'none';  // Masquer le premier élément de la collection
			}
			if (rightZones.length > 0) {
				rightZones[0].style.display = 'none';  // Masquer le premier élément de la collection
			}
			if (premierJeux.length > 0) {
				premierJeux[0].style.display = 'flex';  // Afficher le premier élément de la collection
			}
			if (ImagePremierJeux) {
				ImagePremierJeux.style.display = 'flex';  // Afficher l'image
			}
			if (LinkPremierJeux) {
				LinkPremierJeux.style.display = 'flex';  // Afficher le lien
			}
			if (containerUnreal) {
				containerUnreal.style.background = 'linear-gradient(135deg, #7e0000, #000000)';
			}
            if (backButton) {
                backButton.style.display = 'flex';  // Afficher le bouton de retour
            }
		});
	}

    if (backButton)
    {
        backButton.addEventListener('click', function() {
            // Afficher la zone gauche et droite
            if (leftZones.length > 0) {
                leftZones[0].style.display = 'flex';  // Afficher le premier élément de la collection
            }
            if (rightZones.length > 0) {
                rightZones[0].style.display = 'flex';  // Afficher le premier élément de la collection
            }
            if (premierJeux.length > 0) {
                premierJeux[0].style.display = 'none';  // Masquer le premier élément de la collection
            }
            if (ImagePremierJeux) {
                ImagePremierJeux.style.display = 'none';  // Masquer l'image
            }
            if (LinkPremierJeux) {
                LinkPremierJeux.style.display = 'none';  // Masquer le lien
            }
            if (containerUnreal) {
                containerUnreal.style.background = '#000000';
            }
            if (backButton) {
                backButton.style.display = 'none';  // Masquer le bouton de retour
            }
        });
    }

    // const toggleLangButton = document.getElementById('lang-button');
    // const langgList = document.querySelector('.lang-list');

    // toggleLangButton.addEventListener('click', () => {
    //     if (langgList.classList.contains('active')) {
    //         langgList.classList.remove('active'); // Cache la liste
    //         setTimeout(() => {
    //             langgList.style.display = 'none'; // Cache complètement après l'animation
    //         }, 500); // Correspond à la durée de la transition CSS
    //     } else {
    //         langgList.style.display = 'block'; // Affiche la liste
    //         setTimeout(() => {
    //             langgList.classList.add('active'); // Démarre la transition
    //         }, 10); // Petit délai pour garantir l'animation
    //     }
    // });

});
