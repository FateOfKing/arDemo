<script  lang="ts">
  import { defineComponent } from 'vue'
  // 按需索取的方式引入UI库（非必须）
  import { AScene } from 'aframe'

  export default defineComponent({
    name: 'a-scene',
    props: {
      'el-input': AScene,
      modelValue: [String, Number,Boolean],
    },
    emits: ['update:modelValue'],
    
  })
 


</script>

<template>
  <a-scene embedded arjs>
      <!-- <a-marker preset='hiro'>
        <a-box position='0 0.5 0' material='color: red;opacity: 0.5'></a-box>
    </a-marker>
    <a-entity camera></a-entity> -->
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
