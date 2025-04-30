import { coverageConfigDefaults, defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        coverage: {
            reporter: ['json-summary', 'text', 'lcov', 'html'],
            exclude: [...coverageConfigDefaults.exclude, 'src/utils/test/***'],
            include: ['src/**'],
        },
        setupFiles: ['./vite-setup-file.ts'],
        env: {},
    },
});
