import * as THREE from 'three';

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.querySelector('#bg') });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

camera.position.setZ(30);

// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);

for (let i = 0; i < particleCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

const particlesMaterial = new THREE.PointsMaterial({
    color: 0x00ff00,
    size: 0.2,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    particles.rotation.x += 0.001;
    particles.rotation.y += 0.001;

    renderer.render(scene, camera);
}

animate();
