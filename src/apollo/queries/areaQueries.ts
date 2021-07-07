import { gql } from '@apollo/client';

export const GET_AREAS = gql`
  query GetAreas {
    areas(order_by: { id: asc }) {
      id
      name
    }
  }
`;

// export const GET_AREAS_LOCAL = gql`
//   query GetAreas {
//     areas(order_by: { id: asc }) @client {
//       id
//       name
//     }
//   }
// `;

export const GET_AREAS_BY_ID = gql`
  query GetAreasById($id: Int_comparison_exp = {}) {
    areas(where: { id: $id }) {
      id
      name
    }
  }
`;

export const GET_AREAS_JOIN_PREFECTURES = gql`
  query GetAreasJoinPrefectures {
    areas(order_by: { id: asc }) {
      id
      name
      prefectures(order_by: { id: asc }) {
        area_id
        created_at
        id
        name
      }
    }
  }
`;
