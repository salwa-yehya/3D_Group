import * as THREE from 'three';
import './style.css'

////scene
const scene = new THREE.Scene();

////Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 20
scene.add( camera );

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

////background
const texture = new THREE.TextureLoader().load( './assets/stars.avif' );
scene.background = texture;


///planeGeometry texture
const planetexture = new THREE.TextureLoader().load( './assets/color.jpg' );

// Create BoxGeometry
const planeGeometry = new THREE.PlaneGeometry(7, 7 , 7 , 7);
const planeMaterial = new THREE.MeshBasicMaterial({ 
    color: 0xff0000 ,
    side: THREE.DoubleSide,
    // wireframe :true,
    map:planetexture, 
});
const planeMesh = new THREE.Mesh(planeGeometry, planeMaterial);
scene.add(planeMesh);


///sphereGeometry texture
const spheretexture = new THREE.TextureLoader().load( './assets/earth.jpeg' );


// Create SphereGeometry
const sphereGeometry = new THREE.SphereGeometry(4, 32, 16);
const sphereMaterial = new THREE.MeshBasicMaterial({
    //  color: 0x00ff00 ,
    //  wireframe :true,
    map :spheretexture,
    });
const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphereMesh.position.x = 9;
scene.add(sphereMesh);


///sphereGeometry texture
const Torustexture = new THREE.TextureLoader().load( './assets/donut.jpeg' );

// Create TorusGeometry
const TorusGeometry = new THREE.TorusGeometry(3, 1.4, 13, 49);
const TorusMaterial = new THREE.MeshBasicMaterial({ 
    // color: 0x0000ff ,
    // wireframe :true,
    map : Torustexture,
});
const TorusMesh = new THREE.Mesh(TorusGeometry, TorusMaterial);
TorusMesh.position.x = -9
scene.add(TorusMesh);



// Render the scene
function animate() {
    requestAnimationFrame(animate);
	TorusMesh.rotation.y += 0.01;
	sphereMesh.rotation.y += 0.01;
	planeMesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();