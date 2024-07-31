export default {
  useNextSeoProps() {
    return {
      titleTemplate: 'Ascendio - %s',
    };
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Ascendio" />

      <meta
        property="og:description"
        content="Designed to simplify the initial setup of your turborepo project. Ideal for indie developers or people looking to create a micro SaaS using most amazing packages such as Nextjs, Vite, shadcn-ui, Jest, Storybook and more."
      />
    </>
  ),
  project: {
    link: 'https://ascendio.dev',
  },
  logo: <img width={150} src="/ascendio.png" />,
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
  },
  feedback: {
    content: null,
  },
  editLink: {
    component: null,
  },
};
