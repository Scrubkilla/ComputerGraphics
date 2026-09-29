import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/Addons.js';

const scene = new THREE.Scene();
scene.background = new THREE.Color(0X000000);

const camera = new THREE.PerspectiveCamera(
    75, window.innerWidth / window.innerHeight, 0.1,1000);
camera.position.z = 5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 5);
scene.add(ambientLight);
const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
directionalLight.position.set(2, 3, 5   );
scene.add(directionalLight);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0xE8431C,
    wireframe: true
});

const cube = new THREE.Mesh(geometry, material);
scene.add(cube)

const geometry2 = new THREE.SphereGeometry(1, 32, 32);
const material2 = new THREE.MeshStandardMaterial({
    color: 0x800080,
    wireframe: true
})
const sphere = new THREE.Mesh(geometry2, material2);
scene.add(sphere)

cube.position.x = -1.5;
sphere.position.y = 1.5;

renderer.render(scene, camera);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    controls.update();

    renderer.render(scene, camera);

}
animate();
