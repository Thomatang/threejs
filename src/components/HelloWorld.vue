<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>

  <div class="canvas-container">
    <canvas id="c"> </canvas>
    <p>
      The doc for this exercise is
      <a
        href="https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene"
        >here</a
      >
    </p>
  </div>
</template>

<script setup>
import { defineProps, reactive } from "vue";
import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
animate();

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });
</script>

<style scoped>
a {
  color: #42b983;
}
</style>