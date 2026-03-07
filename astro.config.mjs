// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://sonic-fangames.com',
  output: 'static',
  trailingSlash: 'always',
  redirects: {
    '/battle-r-prototype-v2/': '/sonic-battle-r/',
    '/battle-r-prototype-v3/': '/sonic-battle-r/',
    '/ring-racers/': '/dr-robotniks-ring-racers/',
  },
});
