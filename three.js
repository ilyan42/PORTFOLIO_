// (function() {
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
//     const renderer = new THREE.WebGLRenderer();
//     renderer.setSize(1400, 700); // Hauteur du conteneur three.js
//     renderer.setClearColor(0x363535); // Couleur de fond gris clair
//     document.getElementById('threejs-container').appendChild(renderer.domElement);

//     // Lumières
//     const light = new THREE.DirectionalLight(0xffffff, 1.5);
//     light.position.set(1, 1, 1).normalize();
//     scene.add(light);

//     // Charger le modèle GLTF
//     const loader = new THREE.GLTFLoader();
//     loader.load('image/ordi.glb', function (gltf) {
//         const model = gltf.scene;
//         scene.add(model);

// 		if (window.innerWidth > 1200) 
// 		{
// 			model.position.set(0, 2, 0);
// 			camera.position.set(5, 5, 8);
// 			model.scale.set(1, 1.4, 1.2);
// 		}
// 		else
// 		{
// 			renderer.setSize(3000, 1300);
// 			model.position.set(-3, 0, -10);
// 			camera.position.set(5, 8, 8);
// 			model.scale.set(0.2, 0.9, 0.3);
// 		}

//         function animateThree() {
//             requestAnimationFrame(animateThree);
//             model.rotation.y += 0.008;
//             renderer.render(scene, camera);
//         }
//         animateThree();
//     }, undefined, function (error) {
//         console.error(error);
//     });

//     window.addEventListener('resize', () => {
//         const width = window.innerWidth;
//         const height = 700; // Hauteur du conteneur three.js
//         renderer.setSize(width, height);
//         camera.aspect = width / height;
//         camera.updateProjectionMatrix();
//     });
// })();

(function() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(0x363535); // Couleur de fond gris clair

    // Récupérer le conteneur et ajuster le renderer à sa taille
    const container = document.getElementById('threejs-container');
    container.appendChild(renderer.domElement);

    function resizeRenderer() {
        const width = container.clientWidth;
        const height = container.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
    }

    // Initialiser la taille du renderer à la taille du conteneur
    resizeRenderer();

    // Lumières
    const light = new THREE.DirectionalLight(0xffffff, 1.5);
    light.position.set(1, 1, 1).normalize();
    scene.add(light);

    // Charger le modèle GLTF
    const loader = new THREE.GLTFLoader();
    loader.load('image/ordi.glb', function (gltf) {
        const model = gltf.scene;
        scene.add(model);

        // Ajustements de position et d'échelle du modèle en fonction de la taille de l'écran
        if (window.innerWidth > 1200) {
            model.position.set(0, 2, 0);
            camera.position.set(5, 5, 8);
            model.scale.set(1, 1.4, 1.2);
        } else {
            model.position.set(-3, 0, -10);
            camera.position.set(5, 8, 8);
            model.scale.set(0.2, 0.9, 0.3);
        }

        function animateThree() {
            requestAnimationFrame(animateThree);
            model.rotation.y += 0.008;
            renderer.render(scene, camera);
        }
        animateThree();
    }, undefined, function (error) {
        console.error(error);
    });

    // Mettre à jour le renderer lors du redimensionnement de la fenêtre
    window.addEventListener('resize', () => {
        resizeRenderer();
    });
})();