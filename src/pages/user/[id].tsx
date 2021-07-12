import { useQuery, ApolloQueryResult } from '@apollo/client';
import { GetStaticProps } from 'next';
import React, { VFC } from 'react';
import { addApolloState, initializeApollo } from '../../apollo/apolloClient';
import {
  GetUserByIdQuery,
  GetUserByIdQueryResult,
  GetUsersQuery,
  useGetUserByIdQuery,
  Users,
} from '../../apollo/graphql';
import { GET_USER_BY_ID, GET_USERS } from '../../apollo/queries/userQueries';
import { useRouter } from 'next/router';

const User: VFC = () => {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data, fetchMore, networkStatus } = useQuery(
    GET_USER_BY_ID,
    {
      variables: { id: id },
      // Setting this value to true will make the component rerender when
      // the "networkStatus" changes, so we are able to know if it is fetching
      // more data
      notifyOnNetworkStatusChange: false,
    }
  );

  // const { data, error } = useQuery(GET_USER_BY_ID, {
  //   variables: { id: id ?? '' },
  //   // Setting this value to true will make the component rerender when
  //   // the "networkStatus" changes, so we are able to know if it is fetching
  //   // more data
  //   notifyOnNetworkStatusChange: true,
  // });
  // const { data, error } = useGetUserByIdQuery({ id: id });
  console.log(data);
  return <div> test</div>;
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();
  const { data } = await apolloClient.query<GetUsersQuery>({
    query: GET_USERS,
  });
  const paths = data.users.map((user) => {
    return { params: { id: user.id } };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const apolloClient = initializeApollo();

  const { data } = await apolloClient.query<GetUserByIdQuery>({
    query: GET_USER_BY_ID,
    variables: { id: params?.id ?? '' },
  });

  return addApolloState(apolloClient, {
    props: { user: data },
    revalidate: 60 * 60,
  });
};

export default User;
