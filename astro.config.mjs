// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Utslippsfaktorer",
      defaultLocale: "root",
      locales: {
        root: {
          label: "Norsk",
          lang: "no",
        },
      },
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
      ],
    }),
  ],
});
