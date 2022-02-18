<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <a-scene embedded arjs>
   <!-- type="pattern" 
      url="https://fateofking.github.io/arDemo/ikea.patt" -->
       <!-- emitevents="true" 
      smooth="true" 
      smoothCount="10"
      smoothTolerance=".01"
      smoothThreshold="5" -->
      <!-- <a-marker 
       preset="hiro"
     > -->
        <!-- <a-entity
          position="0 0 0"
          scale="0.05 0.05 0.05"
          :gltf-model="'url('+href+'scene.gltf)'"
        ></a-entity> -->
                <!-- <a-box position='0 0.5 0' material='color: green;opacity: 0.5'></a-box> -->

       
      <!-- </a-marker>
      <a-entity camera></a-entity> -->
      <a-marker preset='hiro'>
        <a-box position='0 0.5 0' material='color: red;opacity: 0.5'></a-box>
    </a-marker>
    <a-entity camera></a-entity>
    </a-scene>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
