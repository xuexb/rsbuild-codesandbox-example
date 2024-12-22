import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from "@rsbuild/plugin-sass";

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass({
      sassLoaderOptions: {
        additionalData: [
          `@use "./_var.scss" as *;`,
        ].join(""),
      },
    }),
  ],
});
