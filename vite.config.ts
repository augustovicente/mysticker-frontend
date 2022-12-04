import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import svgrPlugin from 'vite-plugin-svgr';

export default defineConfig((config) => ({
    plugins: [
        react(),
        viteTsconfigPaths(),
        svgrPlugin(),
    ],
    server: {
        port: 3000
    },
    build: {
        outDir: 'build',
        minify: 'esbuild',
    },
    esbuild: {
        minifyIdentifiers: true,
        minifySyntax: true,
        minifyWhitespace: true
    }
}));
