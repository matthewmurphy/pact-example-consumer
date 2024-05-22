import tsconfigPaths from 'vite-tsconfig-paths';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    include: ['tests/pact/consumer/*.pact.test.ts'],
  },
  plugins: [tsconfigPaths()],
});