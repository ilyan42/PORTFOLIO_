const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x4f4f4f); // Couleur de fond gris clair
document.getElementById('threejs-container').appendChild(renderer.domElement);

// Lumière
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);

// Charger le modèle GLTF
const loader = new THREE.GLTFLoader();
loader.load('image/ordi.glb', function (gltf) {
	const model = gltf.scene;
	scene.add(model);

	// Positionner le modèle et la caméra
	model.position.set(0, 0, 0);
	camera.position.set(3.7, 3, 5);
	model.scale.set(0.7, 0.7, 0.7);

	function animate() {
		requestAnimationFrame(animate);
		model.rotation.y += 0.008; // Rotation automatique
		renderer.render(scene, camera);
	}
	animate();
}, undefined, function (error) {
	console.error(error);
});

// Adapter le rendu à la taille de la fenêtre
window.addEventListener('resize', () => {
	const width = window.innerWidth;
	const height = window.innerHeight;
	renderer.setSize(width, height);
	camera.aspect = width / height;
	camera.updateProjectionMatrix();
});

document.getElementById('showVideoBtn').addEventListener('click', function() {
    var videoContainer = document.getElementById('videoContainer');
    var video = document.getElementById('myVideo');

    // Affiche le conteneur vidéo
    videoContainer.style.display = 'flex';  // Affiche le conteneur en mode flex

    // Démarre la vidéo automatiquement
	videoContainer.classList.add('fullscreen');
    video.play();

    // Optionnel: Ajouter un gestionnaire d'événements pour fermer la vidéo lorsqu'elle est terminée
    video.addEventListener('ended', function() {
        videoContainer.style.display = 'none'; // Cache le conteneur vidéo à la fin
    });

    // Optionnel: Fermer la vidéo en cliquant en dehors de la vidéo
    videoContainer.addEventListener('click', function(event) {
        if (event.target === videoContainer) {
            video.pause(); // Met la vidéo en pause
            videoContainer.style.display = 'none'; // Cache le conteneur vidéo
        }
    });
});

document.getElementById('closeVideoBtn').addEventListener('click', function() {
	var videoContainer = document.getElementById('videoContainer');
	var video = document.getElementById('myVideo');
	video.pause();  // Met la vidéo en pause
	video.currentTime = 0;  // Rembobine la vidéo
	videoContainer.style.display = 'none';  // Cache le conteneur vidéo
});
