import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users(order_by: { created_at: desc }) {
      id
      name
      created_at
    }
  }
`;

export const GET_USERIDS = gql`
  query GetUserIds {
    users(order_by: { created_at: desc }) {
      id
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query GetUserById($id: String = "") {
    users_by_pk(id: $id) {
      id
      name
    }
  }
`;

export const GET_USER_DETAIL_BY_ID = gql`
  query GetUserDetailById($id: String = "") {
    users_by_pk(id: $id) {
      id
      img_url
      name
      self_pr
      shop_comments(where: { user_id: { _eq: $id } }, limit: 5) {
        updated_at
        content
        shop {
          name
        }
      }
      likes(where: { user_id: { _eq: $id } }) {
        shop {
          name
        }
      }
    }
  }
`;

// export const GET_USER_DETAIL_BY_ID = gql`
//   query GetUserById($id: String!) {
//     users_by_pk(id: $id) {
//       id
//       name
//       created_at
//       prefecture_id
//       img_url
//     }
//   }
// `;

export const CREATE_USER = gql`
  mutation CreateUser($name: String!) {
    insert_users_one(object: { name: $name }) {
      id
      name
      created_at
    }
  }
`;
export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    delete_users_by_pk(id: $id) {
      id
      name
      created_at
    }
  }
`;
export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $name: String!) {
    update_users_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      created_at
    }
  }
`;
