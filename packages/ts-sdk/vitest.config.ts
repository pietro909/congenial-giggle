import { defineConfig, mergeConfig } from "vitest/config";
import base from "../../config/vitest.base";

export default defineConfig(
    mergeConfig(base, {
        test: {
            fileParallelism: false,
            setupFiles: ["./test/polyfill.js"],
        },
    }),
);
