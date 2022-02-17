import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode })=>{
  console.log('command',command);
  
 return{ 
   plugins: [vue()],
   base: command === 'serve'? '/' :'/arDemo/'
}
})
