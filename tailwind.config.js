module.exports = {
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
  darkMode: false,
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'r-men-img': 'url("../../public/backgroundImage.jpg")',
      }),
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
};
