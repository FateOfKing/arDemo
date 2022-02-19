<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs

import { onMounted } from "@vue/runtime-core";

// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
onMounted(()=>{
  window.AFRAME.registerComponent('markerhandler', {
    init: function () {
      this.el.sceneEl.addEventListener('markerFound', () => {
        // redirect to custom URL e.g. google.com
        window.location.href = 'https://www.baidu.com/';
      })
    }
  });
})

const href = window.location.href;
</script>

<template>
<div>5</div>
 
        <a-scene embedded arjs emitevents="true">
        <a-marker preset='hiro'>
        <a-box position='0 0.5 0' material='color: red;opacity: 0.5'></a-box>
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
