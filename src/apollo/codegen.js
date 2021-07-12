const dotenv = require('dotenv');

dotenv.config();
module.exports = {
  schema: [
    {
      'https://r-men.hasura.app/v1/graphql': {
        headers: {
          'x-hasura-admin-secret': process.env.NEXT_PUBLIC_HASURA_KEY,
        },
      },
    },
  ],
  overwrite: true,
  documents: ['./src/apollo/queries/*.ts'],
  generates: {
    'src/apollo/graphql.tsx': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
        preResolveTypes: false,
        scalars: {
          uuid: 'string',
          timestamptz: 'string',
          bigint: 'number',
          _text: 'string[]',
        },
        namingConvention: {
          typeNames: 'pascal-case#pascalCase',
          enumValues: 'upper-case#upperCase',
        },
        apolloReactCommonImportFrom: '@apollo/client',
        apolloReactHooksImportFrom: '@apollo/client',
      },
    },
  },
};
