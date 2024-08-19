(function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(1400, 700); // Hauteur du conteneur three.js
    renderer.setClearColor(0x404040); // Couleur de fond gris clair
    document.getElementById('threejs-container').appendChild(renderer.domElement);

    // Lumières
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Charger le modèle GLTF
    const loader = new THREE.GLTFLoader();
    loader.load('image/ordi.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        model.position.set(0, 2, 0);
        camera.position.set(5, 5, 8);
        model.scale.set(1, 1.4, 1.2);

        function animateThree() {
            requestAnimationFrame(animateThree);
            model.rotation.y += 0.008;
            renderer.render(scene, camera);
        }
        animateThree();
    }, undefined, function (error) {
        console.error(error);
    });

    window.addEventListener('resize', () => {
        const width = window.innerWidth;
        const height = 700; // Hauteur du conteneur three.js
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    });

    document.getElementById('showVideoBtn').addEventListener('click', function() {
        const videoContainer = document.getElementById('videoContainer');
        const video = document.getElementById('myVideo');

        videoContainer.style.display = 'flex';
		videoContainer.classList.add('fullscreen');
        video.play();

        video.addEventListener('ended', function() {
            videoContainer.style.display = 'none';
        });

        videoContainer.addEventListener('click', function(event) {
            if (event.target === videoContainer) {
                video.pause();
                videoContainer.style.display = 'none';
            }
        });
    });

    document.getElementById('closeVideoBtn').addEventListener('click', function() {
        const videoContainer = document.getElementById('videoContainer');
        const video = document.getElementById('myVideo');
        video.pause();
        video.currentTime = 0;
        videoContainer.style.display = 'none';
    });
})();
