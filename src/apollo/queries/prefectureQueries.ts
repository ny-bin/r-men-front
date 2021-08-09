import { gql } from '@apollo/client';

export const GET_PREFECTURES = gql`
  query GetPrefectures {
    prefectures(order_by: { area_id: asc }) {
      id
      name
      area {
        id
        name
      }
    }
  }
`;

export const GET_PREFECTURES_ID_FIRST5 = gql`
  query GetPrefecturesIdFirst5 {
    prefectures(limit: 5, order_by: { area_id: asc }) {
      id
    }
  }
`;

// export const GET_PREFECTURES_LOCAL = gql`
//   query GetPrefectures {
//     prefectures(order_by: { area_id: asc }) @client {
//       id
//       name
//       area {
//         id
//         name
//       }
//     }
//   }
// `;

export const GET_PREFECTURES_BY_ID = gql`
  query GetPrefecturesById($id: Int_comparison_exp = {}) {
    prefectures(where: { id: $id }) {
      id
      name
      area {
        id
        name
      }
    }
  }
`;

export const GET_PREFECTURES_BY_AREAID = gql`
  query GetPrefecturesByAreaId($area_id: Int_comparison_exp = {}) {
    prefectures(where: { area_id: $area_id }) {
      id
      name
      area_id
    }
  }
`;
