import type { ReactiveVar } from '@apollo/client';
import { InMemoryCache, makeVar } from '@apollo/client';
import type { GetUserByIdQuery, Users } from '../apollo/graphql';

export type LoginUser =
  | ({ __typename?: 'users' | undefined } & Pick<Users, 'id' | 'name'>)
  | null;

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        //ユーザー情報をローカルに保持しておく
        loginUser: {
          read() {
            return loginUserVar();
          },
        },
      },
    },
  },
});

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null);
