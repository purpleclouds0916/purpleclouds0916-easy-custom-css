import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import reactRefresh from 'reactRefresh';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), reactRefresh()],
});
