module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'r-men-img': '',
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
