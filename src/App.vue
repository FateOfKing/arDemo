<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { onMounted } from "@vue/runtime-core";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
onMounted(()=>{
  // window.AFRAME.registerComponent('markerhandler', {
  //   init: function () {
  //     this.el.sceneEl.addEventListener('markerFound', () => {
  //       // redirect to custom URL e.g. google.com
  //       window.location.href = 'https://www.baidu.com/';
  //     })
  //   }
  // });
})

const href = window.location.href;
</script>

<template>
<div>5</div>
 <a-scene embedded arjs>
   <!-- type="pattern" 
      url="https://fateofking.github.io/arDemo/ikea.patt" -->
       <!-- emitevents="true" 
      smooth="true" 
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5" -->
      <a-marker 
       preset="hiro"
     >
        <a-entity
          position="0 0 0"
          scale="0.05 0.05 0.05"
          :gltf-model="href+'scene.gltf'"
        ></a-entity>
       
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
