import { Options } from "$fresh/plugins/twind.ts";

export default {
  selfURL: import.meta.url,
  theme: {
    extend: {
      screens: { print: { raw: "print" } },
    },
  },
} as Options;
