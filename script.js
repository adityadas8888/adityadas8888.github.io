// Import Three.js
import * as THREE from 'three';

// Step 1: Create a Scene
const scene = new THREE.Scene();

// Step 2: Set Up a Camera
const camera = new THREE.PerspectiveCamera(
    75, // Field of View (FOV)
    window.innerWidth / window.innerHeight, // Aspect Ratio
    0.1, // Near Clipping Plane
    1000 // Far Clipping Plane
);
camera.position.z = 5; // Move the camera back so we can see the objects

// Step 3: Set Up a Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight); // Set renderer size
document.body.appendChild(renderer.domElement); // Append the renderer to the DOM

// Step 4: Create a Cube
const geometry = new THREE.BoxGeometry(); // A box shape
const material = new THREE.MeshStandardMaterial({ color: 0x0077ff }); // Material for the cube
const cube = new THREE.Mesh(geometry, material); // Combine geometry and material into a mesh
scene.add(cube); // Add the cube to the scene

// Step 5: Add Lighting
const ambientLight = new THREE.AmbientLight(0x404040, 2); // Soft light
scene.add(ambientLight);

const pointLight = new THREE.PointLight(0xffffff, 1); // Intense point light
pointLight.position.set(5, 5, 5);
scene.add(pointLight);

// Step 6: Animation Loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera); // Render the scene from the camera's perspective
}

// Resize handler
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});

// Start the animation loop
animate();
