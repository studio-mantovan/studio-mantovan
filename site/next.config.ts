import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async redirects() {
    return [
      // Vecchi URL del sito Hostinger Website Builder (eliminato) — Google li ha ancora
      // indicizzati senza il prefisso /blog/. Slug confermati dai dati originali del sito.
      {
        source: "/la-fisioterapia-che-cura-solo-il-dolore-non-e-fisioterapia",
        destination: "/blog/la-fisioterapia-che-cura-solo-il-dolore-non-e-fisioterapia/",
        permanent: true,
      },
      {
        source: "/le-cose-che-nessuno-ti-ha-mai-detto-sul-dolore-cronico",
        destination: "/blog/le-cose-che-nessuno-ti-ha-mai-detto-sul-dolore-cronico/",
        permanent: true,
      },
      {
        source: "/sciatalgia-perche-il-fisioterapista-e-il-tuo-primo-alleato-e-non-la-risonanza",
        destination: "/blog/sciatalgia-perche-il-fisioterapista-e-il-tuo-primo-alleato-e-non-la-risonanza/",
        permanent: true,
      },
      {
        source: "/come-federico-ha-smesso-di-bloccarsi-con-la-schiena",
        destination: "/blog/come-federico-ha-smesso-di-bloccarsi-con-la-schiena/",
        permanent: true,
      },
      {
        source: "/colpo-di-frusta-dopo-un-incidente-stradale-cosa-fare-davvero-e-cosa-evitare",
        destination: "/blog/colpo-di-frusta-dopo-un-incidente-stradale-cosa-fare-davvero-e-cosa-evitare/",
        permanent: true,
      },
      // Articolo del vecchio sito non recuperato — reindirizza almeno all'indice del blog
      // invece di lasciare un 404 puro, finché non viene ritrovato e ripubblicato.
      {
        source: "/la-vera-cura-per-le-tendinopatie-non-sono-le-solite-terapie-passivema-lesercizio",
        destination: "/blog",
        permanent: false,
      },
      // Vecchie pagine del sito Hostinger (menu principale)
      {
        source: "/chi-sono-fisioterapista",
        destination: "/chi-sono",
        permanent: true,
      },
      {
        source: "/mal-di-schiena",
        destination: "/patologie/lombalgia",
        permanent: true,
      },
      {
        source: "/blog-fisioterapia",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
