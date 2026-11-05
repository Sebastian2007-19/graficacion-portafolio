import * as THREE from 'three';

// ESCENA
const scene = new THREE.Scene();
scene.background = new THREE.Color(0xe0e0e0);

// CÁMARA 
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4;

// WEBGL (conectado a tu canvas del HTML)
const canvas = document.querySelector('canvas#webgl-canvas');
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// OBJETOS MESH (Cambiamos el cubo por un Dodecaedro)
const geometry = new THREE.DodecahedronGeometry(1.5, 0);
const material = new THREE.MeshStandardMaterial({
  color: 0x9933ff, // Color morado
  roughness: 0.2,
  metalness: 0.9,
  wireframe: false  // Ponlo en true si prefieres ver solo las líneas
});
const figura = new THREE.Mesh(geometry, material);
scene.add(figura);

// ILUMINACIÓN
const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5, 5, 5);
scene.add(directionalLight);

// ANIMACIÓN
function animate() {
  requestAnimationFrame(animate);

  // Animación de rotación continua
  figura.rotation.x += 0.01;
  figura.rotation.y += 0.01;

  renderer.render(scene, camera);
}

animate();

// RESPONSIVIDAD 
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
