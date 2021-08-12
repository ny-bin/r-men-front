import type { ReactiveVar } from '@apollo/client';
import { InMemoryCache, makeVar } from '@apollo/client';
import { offsetLimitPagination } from '@apollo/client/utilities';
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
        // shops: offsetLimitPagination(['where']),
        shops: {
          ...offsetLimitPagination(['where', 'limit', 'offset']),
          read(existing: any, { args }) {
            if (args?.offset !== undefined && args?.limit) {
              return (
                existing &&
                existing.slice(args.offset, args.limit + args.offset)
              );
            } else {
              return existing;
            }
          },
          // keyArgs: [],
          // merge(existing, incoming, { args }) {
          //   // console.log(args);
          //   const merged = existing ? existing.slice(0) : [];
          //   for (let i = 0; i < incoming.length; ++i) {
          //     merged[args.offset + i] = incoming[i];
          //   }
          //   return merged;
          // },
        },
      },
    },
  },
});

export const loginUserVar: ReactiveVar<LoginUser> = makeVar<LoginUser>(null);
