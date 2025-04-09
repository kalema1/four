import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

const sizes = {
  width: 800,
  height: 600,
};

// scene.. create a scene
const scene = new THREE.Scene();

//object ... create a mesh which consists of a geometry and a material
const geometry = new THREE.BoxGeometry(1, 1, 1); // create a cube geometry
const material = new THREE.MeshBasicMaterial({ color: "#ff0000" }); // create a basic material with green color
const cube = new THREE.Mesh(geometry, material); // create a mesh with geometry and material
scene.add(cube); // add the mesh to the scene

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
/* (fov : Number, aspect : Number, near : Number, far : Number) 
 fov — Camera frustum vertical field of view. 
 aspect — Camera frustum aspect ratio. 
 near — Camera frustum near plane. far — Camera frustum far plane. */
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
