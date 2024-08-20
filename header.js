(function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight); // Hauteur du conteneur header
    document.getElementById('header-container').appendChild(renderer.domElement);

    // Charger la texture de l'image de fond
    const loader = new THREE.TextureLoader();
    loader.load('image/bg.png', function(texture) {
        scene.background = texture; // Définir la texture comme arrière-plan
    });

    // Lumières
    const ambientLight = new THREE.AmbientLight(0x404040, 10.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
    directionalLight.position.set(5, 10, 5).normalize();
    scene.add(directionalLight);

    // Charger le modèle GLTF
    const gltfLoader = new THREE.GLTFLoader();
    gltfLoader.load('image/setup.glb', function(gltf) {
        const model = gltf.scene;
        scene.add(model);

        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });

        // Positionner le modèle et la caméra
        model.position.set(5, 3.5, 0);
        model.rotation.y = Math.PI;
        model.scale.set(0.85, 0.85, 0.85);

        // Positionner la caméra
        camera.position.set(5, 5, 5); // Abaisser la hauteur et incliner légèrement vers l'avant
		

        function animateHeader() {
            requestAnimationFrame(animateHeader);
            renderer.render(scene, camera);
        }
        animateHeader();
    }, undefined, function(error) {
        console.error(error);
    });

    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = 200; // Hauteur du conteneur header
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });
})();
