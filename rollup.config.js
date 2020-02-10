import beep from '@rollup/plugin-beep';
import typescript from "@rollup/plugin-typescript";
import pkg from "./package.json";

const env = process.env.NODE_ENV;
const isDevelopment = env === "development";
const isProduction = env === "production";

const sourcemap = isProduction ? false : "hidden";

/** @return {import("rollup").RollupOptions} */
export default commandLineArgs => {
  return {
    input: "src/index.ts",
    output: [
      {
        exports: "named",
        file: pkg.main,
        format: "cjs",
        sourcemap
      },
      {
        exports: "named",
        file: pkg.module,
        format: "esm",
        sourcemap
      }
    ],
    plugins: [
      beep(),
      typescript()
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  };
};
