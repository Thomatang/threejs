<template>
    <div id="three-container"></div>
</template>

<script>
import * as Three from 'three'
 
 let camera,scene,renderer,mesh


export default {
  name: 'ThreeTest',
  methods: {
    init: function() {
        let container = document.getElementById('three-container');

        camera = new Three.PerspectiveCamera(70, window.innerWidth/window.innerHeight, 0.01, 10);
        camera.position.z = 1;

        scene = new Three.Scene();

        let geometry = new Three.BoxGeometry(0.2, 0.2, 0.2);
        let material = new Three.MeshNormalMaterial();

        mesh = new Three.Mesh(geometry, material);
        scene.add(mesh);

        renderer = new Three.WebGLRenderer({antialias: true});
        renderer.setSize(window.innerWidth, window.innerHeight);
        container.appendChild(renderer.domElement);

    },
    animate: function() {
        requestAnimationFrame(this.animate);
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.02;
        renderer.render(scene, camera);
    }
  },
  mounted() {
      this.init();
      this.animate();
  }
}
</script>

<style scoped>
   #three-container {
       height: 100%;
   }
</style>