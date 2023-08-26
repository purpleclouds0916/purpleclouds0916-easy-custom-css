import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import linaria from '@linaria/vite';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), linaria()],
});
