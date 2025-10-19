import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  base: '/portfolio', // <-- add this
  plugins: [react()],
});
