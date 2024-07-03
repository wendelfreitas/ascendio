export default {
  useNextSeoProps() {
    return {
      titleTemplate: '%s - Ascendio',
    };
  },
  logo: <img width={150} src="/ascendio.png" />,
  darkMode: false,
  nextThemes: {
    defaultTheme: 'dark',
  },
};
