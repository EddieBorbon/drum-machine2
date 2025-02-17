import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/drum-machine2/', // Añade el nombre de tu repositorio aquí
});