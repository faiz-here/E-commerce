import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
    server: {
      host: true, // allows access from the local network
      port: 5173, // or any other port you prefer
    }
  
  
})

