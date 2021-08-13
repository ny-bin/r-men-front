import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../src/pages/index.page';
import React from 'react';
import { ApolloQueryResult } from '@apollo/client';
import {
  GetAreasJoinPrefecturesQuery,
  GetCategoriesQuery,
} from 'src/apollo/graphql';

type Props = {
  categories: ApolloQueryResult<GetCategoriesQuery>;
  areas: ApolloQueryResult<GetAreasJoinPrefecturesQuery>;
};
// const props: Props = { categories = undefined, areas = undefined };

// it('Should render title text', () => {
//   render(<Home props={props} />);
//   expect(screen.getByText('Next.js!')).toBeInTheDocument();
// });
