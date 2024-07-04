export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Ascendio',
    };
  },
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
