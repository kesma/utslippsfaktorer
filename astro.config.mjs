// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Utslippsfaktorer",
      social: {
        github: "https://github.com/kesma/utslippsfaktorer",
      },
      sidebar: [
        {
          label: "Intro",
          items: [
            {
              label: "Hva er en utslippsfaktor?",
              slug: "intro/utslippsfaktorer",
            },
          ],
        },
        {
          label: "Energi",
          items: [{ label: "Elektrisitet", slug: "energi/elektrisitet" }],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
