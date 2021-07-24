import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: number;
  timestamp: any;
  timestamptz: string;
  uuid: string;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "areas" */
export type Areas = {
  __typename?: 'areas';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  prefectures: Array<Prefectures>;
  /** An aggregate relationship */
  prefectures_aggregate: PrefecturesAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "areas" */
export type AreasPrefecturesArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};


/** columns and relationships of "areas" */
export type AreasPrefecturesAggregateArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};

/** aggregated selection of "areas" */
export type AreasAggregate = {
  __typename?: 'areas_aggregate';
  aggregate?: Maybe<AreasAggregateFields>;
  nodes: Array<Areas>;
};

/** aggregate fields of "areas" */
export type AreasAggregateFields = {
  __typename?: 'areas_aggregate_fields';
  avg?: Maybe<AreasAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AreasMaxFields>;
  min?: Maybe<AreasMinFields>;
  stddev?: Maybe<AreasStddevFields>;
  stddev_pop?: Maybe<AreasStddevPopFields>;
  stddev_samp?: Maybe<AreasStddevSampFields>;
  sum?: Maybe<AreasSumFields>;
  var_pop?: Maybe<AreasVarPopFields>;
  var_samp?: Maybe<AreasVarSampFields>;
  variance?: Maybe<AreasVarianceFields>;
};


/** aggregate fields of "areas" */
export type AreasAggregateFieldsCountArgs = {
  columns?: Maybe<Array<AreasSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type AreasAvgFields = {
  __typename?: 'areas_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "areas". All fields are combined with a logical 'AND'. */
export type AreasBoolExp = {
  _and?: Maybe<Array<AreasBoolExp>>;
  _not?: Maybe<AreasBoolExp>;
  _or?: Maybe<Array<AreasBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  prefectures?: Maybe<PrefecturesBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "areas" */
export enum AreasConstraint {
  /** unique or primary key constraint */
  AREAS_PKEY = 'areas_pkey'
}

/** input type for incrementing numeric columns in table "areas" */
export type AreasIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "areas" */
export type AreasInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  prefectures?: Maybe<PrefecturesArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type AreasMaxFields = {
  __typename?: 'areas_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type AreasMinFields = {
  __typename?: 'areas_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "areas" */
export type AreasMutationResponse = {
  __typename?: 'areas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Areas>;
};

/** input type for inserting object relation for remote table "areas" */
export type AreasObjRelInsertInput = {
  data: AreasInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<AreasOnConflict>;
};

/** on conflict condition type for table "areas" */
export type AreasOnConflict = {
  constraint: AreasConstraint;
  update_columns?: Array<AreasUpdateColumn>;
  where?: Maybe<AreasBoolExp>;
};

/** Ordering options when selecting data from "areas". */
export type AreasOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  prefectures_aggregate?: Maybe<PrefecturesAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: areas */
export type AreasPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "areas" */
export enum AreasSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "areas" */
export type AreasSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type AreasStddevFields = {
  __typename?: 'areas_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type AreasStddevPopFields = {
  __typename?: 'areas_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type AreasStddevSampFields = {
  __typename?: 'areas_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type AreasSumFields = {
  __typename?: 'areas_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "areas" */
export enum AreasUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type AreasVarPopFields = {
  __typename?: 'areas_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type AreasVarSampFields = {
  __typename?: 'areas_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type AreasVarianceFields = {
  __typename?: 'areas_variance_fields';
  id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "categories" */
export type Categories = {
  __typename?: 'categories';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  shop_categories: Array<ShopCategories>;
  /** An aggregate relationship */
  shop_categories_aggregate: ShopCategoriesAggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_categories: Array<UserCategories>;
  /** An aggregate relationship */
  user_categories_aggregate: UserCategoriesAggregate;
};


/** columns and relationships of "categories" */
export type CategoriesShopCategoriesArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


/** columns and relationships of "categories" */
export type CategoriesShopCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


/** columns and relationships of "categories" */
export type CategoriesUserCategoriesArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


/** columns and relationships of "categories" */
export type CategoriesUserCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};

/** aggregated selection of "categories" */
export type CategoriesAggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<CategoriesAggregateFields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type CategoriesAggregateFields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<CategoriesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<CategoriesMaxFields>;
  min?: Maybe<CategoriesMinFields>;
  stddev?: Maybe<CategoriesStddevFields>;
  stddev_pop?: Maybe<CategoriesStddevPopFields>;
  stddev_samp?: Maybe<CategoriesStddevSampFields>;
  sum?: Maybe<CategoriesSumFields>;
  var_pop?: Maybe<CategoriesVarPopFields>;
  var_samp?: Maybe<CategoriesVarSampFields>;
  variance?: Maybe<CategoriesVarianceFields>;
};


/** aggregate fields of "categories" */
export type CategoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<CategoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type CategoriesAvgFields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type CategoriesBoolExp = {
  _and?: Maybe<Array<CategoriesBoolExp>>;
  _not?: Maybe<CategoriesBoolExp>;
  _or?: Maybe<Array<CategoriesBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  shop_categories?: Maybe<ShopCategoriesBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user_categories?: Maybe<UserCategoriesBoolExp>;
};

/** unique or primary key constraints on table "categories" */
export enum CategoriesConstraint {
  /** unique or primary key constraint */
  CATEGORIES_PKEY = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type CategoriesIncInput = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type CategoriesInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shop_categories?: Maybe<ShopCategoriesArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_categories?: Maybe<UserCategoriesArrRelInsertInput>;
};

/** aggregate max on columns */
export type CategoriesMaxFields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type CategoriesMinFields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type CategoriesMutationResponse = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type CategoriesObjRelInsertInput = {
  data: CategoriesInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<CategoriesOnConflict>;
};

/** on conflict condition type for table "categories" */
export type CategoriesOnConflict = {
  constraint: CategoriesConstraint;
  update_columns?: Array<CategoriesUpdateColumn>;
  where?: Maybe<CategoriesBoolExp>;
};

/** Ordering options when selecting data from "categories". */
export type CategoriesOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  shop_categories_aggregate?: Maybe<ShopCategoriesAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_categories_aggregate?: Maybe<UserCategoriesAggregateOrderBy>;
};

/** primary key columns input for table: categories */
export type CategoriesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum CategoriesSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "categories" */
export type CategoriesSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type CategoriesStddevFields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type CategoriesStddevPopFields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type CategoriesStddevSampFields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type CategoriesSumFields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum CategoriesUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type CategoriesVarPopFields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type CategoriesVarSampFields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type CategoriesVarianceFields = {
  __typename?: 'categories_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "likes" */
export type Likes = {
  __typename?: 'likes';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  shop: Shops;
  shop_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "likes" */
export type LikesAggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<LikesAggregateFields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "likes" */
export type LikesAggregateFields = {
  __typename?: 'likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<LikesMaxFields>;
  min?: Maybe<LikesMinFields>;
};


/** aggregate fields of "likes" */
export type LikesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<LikesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type LikesAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<LikesMaxOrderBy>;
  min?: Maybe<LikesMinOrderBy>;
};

/** input type for inserting array relation for remote table "likes" */
export type LikesArrRelInsertInput = {
  data: Array<LikesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<LikesOnConflict>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type LikesBoolExp = {
  _and?: Maybe<Array<LikesBoolExp>>;
  _not?: Maybe<LikesBoolExp>;
  _or?: Maybe<Array<LikesBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  shop?: Maybe<ShopsBoolExp>;
  shop_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "likes" */
export enum LikesConstraint {
  /** unique or primary key constraint */
  LIKES_PKEY = 'likes_pkey'
}

/** input type for inserting data into table "likes" */
export type LikesInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  shop?: Maybe<ShopsObjRelInsertInput>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type LikesMaxFields = {
  __typename?: 'likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type LikesMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type LikesMinFields = {
  __typename?: 'likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type LikesMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "likes" */
export type LikesMutationResponse = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on conflict condition type for table "likes" */
export type LikesOnConflict = {
  constraint: LikesConstraint;
  update_columns?: Array<LikesUpdateColumn>;
  where?: Maybe<LikesBoolExp>;
};

/** Ordering options when selecting data from "likes". */
export type LikesOrderBy = {
  created_at?: Maybe<OrderBy>;
  shop?: Maybe<ShopsOrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: likes */
export type LikesPkColumnsInput = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "likes" */
export enum LikesSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "likes" */
export type LikesSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "likes" */
export enum LikesUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete data from the table: "areas" */
  delete_areas?: Maybe<AreasMutationResponse>;
  /** delete single row from the table: "areas" */
  delete_areas_by_pk?: Maybe<Areas>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<CategoriesMutationResponse>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<LikesMutationResponse>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "prefectures" */
  delete_prefectures?: Maybe<PrefecturesMutationResponse>;
  /** delete single row from the table: "prefectures" */
  delete_prefectures_by_pk?: Maybe<Prefectures>;
  /** delete data from the table: "shop_categories" */
  delete_shop_categories?: Maybe<ShopCategoriesMutationResponse>;
  /** delete single row from the table: "shop_categories" */
  delete_shop_categories_by_pk?: Maybe<ShopCategories>;
  /** delete data from the table: "shop_comments" */
  delete_shop_comments?: Maybe<ShopCommentsMutationResponse>;
  /** delete single row from the table: "shop_comments" */
  delete_shop_comments_by_pk?: Maybe<ShopComments>;
  /** delete data from the table: "shop_urls" */
  delete_shop_urls?: Maybe<ShopUrlsMutationResponse>;
  /** delete single row from the table: "shop_urls" */
  delete_shop_urls_by_pk?: Maybe<ShopUrls>;
  /** delete data from the table: "shops" */
  delete_shops?: Maybe<ShopsMutationResponse>;
  /** delete single row from the table: "shops" */
  delete_shops_by_pk?: Maybe<Shops>;
  /** delete data from the table: "user_categories" */
  delete_user_categories?: Maybe<UserCategoriesMutationResponse>;
  /** delete single row from the table: "user_categories" */
  delete_user_categories_by_pk?: Maybe<UserCategories>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<UsersMutationResponse>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "areas" */
  insert_areas?: Maybe<AreasMutationResponse>;
  /** insert a single row into the table: "areas" */
  insert_areas_one?: Maybe<Areas>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<CategoriesMutationResponse>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<LikesMutationResponse>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "prefectures" */
  insert_prefectures?: Maybe<PrefecturesMutationResponse>;
  /** insert a single row into the table: "prefectures" */
  insert_prefectures_one?: Maybe<Prefectures>;
  /** insert data into the table: "shop_categories" */
  insert_shop_categories?: Maybe<ShopCategoriesMutationResponse>;
  /** insert a single row into the table: "shop_categories" */
  insert_shop_categories_one?: Maybe<ShopCategories>;
  /** insert data into the table: "shop_comments" */
  insert_shop_comments?: Maybe<ShopCommentsMutationResponse>;
  /** insert a single row into the table: "shop_comments" */
  insert_shop_comments_one?: Maybe<ShopComments>;
  /** insert data into the table: "shop_urls" */
  insert_shop_urls?: Maybe<ShopUrlsMutationResponse>;
  /** insert a single row into the table: "shop_urls" */
  insert_shop_urls_one?: Maybe<ShopUrls>;
  /** insert data into the table: "shops" */
  insert_shops?: Maybe<ShopsMutationResponse>;
  /** insert a single row into the table: "shops" */
  insert_shops_one?: Maybe<Shops>;
  /** insert data into the table: "user_categories" */
  insert_user_categories?: Maybe<UserCategoriesMutationResponse>;
  /** insert a single row into the table: "user_categories" */
  insert_user_categories_one?: Maybe<UserCategories>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<UsersMutationResponse>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "areas" */
  update_areas?: Maybe<AreasMutationResponse>;
  /** update single row of the table: "areas" */
  update_areas_by_pk?: Maybe<Areas>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<CategoriesMutationResponse>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<LikesMutationResponse>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update data of the table: "prefectures" */
  update_prefectures?: Maybe<PrefecturesMutationResponse>;
  /** update single row of the table: "prefectures" */
  update_prefectures_by_pk?: Maybe<Prefectures>;
  /** update data of the table: "shop_categories" */
  update_shop_categories?: Maybe<ShopCategoriesMutationResponse>;
  /** update single row of the table: "shop_categories" */
  update_shop_categories_by_pk?: Maybe<ShopCategories>;
  /** update data of the table: "shop_comments" */
  update_shop_comments?: Maybe<ShopCommentsMutationResponse>;
  /** update single row of the table: "shop_comments" */
  update_shop_comments_by_pk?: Maybe<ShopComments>;
  /** update data of the table: "shop_urls" */
  update_shop_urls?: Maybe<ShopUrlsMutationResponse>;
  /** update single row of the table: "shop_urls" */
  update_shop_urls_by_pk?: Maybe<ShopUrls>;
  /** update data of the table: "shops" */
  update_shops?: Maybe<ShopsMutationResponse>;
  /** update single row of the table: "shops" */
  update_shops_by_pk?: Maybe<Shops>;
  /** update data of the table: "user_categories" */
  update_user_categories?: Maybe<UserCategoriesMutationResponse>;
  /** update single row of the table: "user_categories" */
  update_user_categories_by_pk?: Maybe<UserCategories>;
  /** update data of the table: "users" */
  update_users?: Maybe<UsersMutationResponse>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type MutationRootDeleteAreasArgs = {
  where: AreasBoolExp;
};


/** mutation root */
export type MutationRootDeleteAreasByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteCategoriesArgs = {
  where: CategoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteCategoriesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteLikesArgs = {
  where: LikesBoolExp;
};


/** mutation root */
export type MutationRootDeleteLikesByPkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeletePrefecturesArgs = {
  where: PrefecturesBoolExp;
};


/** mutation root */
export type MutationRootDeletePrefecturesByPkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootDeleteShopCategoriesArgs = {
  where: ShopCategoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteShopCategoriesByPkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type MutationRootDeleteShopCommentsArgs = {
  where: ShopCommentsBoolExp;
};


/** mutation root */
export type MutationRootDeleteShopCommentsByPkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type MutationRootDeleteShopUrlsArgs = {
  where: ShopUrlsBoolExp;
};


/** mutation root */
export type MutationRootDeleteShopUrlsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteShopsArgs = {
  where: ShopsBoolExp;
};


/** mutation root */
export type MutationRootDeleteShopsByPkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUserCategoriesArgs = {
  where: UserCategoriesBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserCategoriesByPkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteUsersByPkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootInsertAreasArgs = {
  objects: Array<AreasInsertInput>;
  on_conflict?: Maybe<AreasOnConflict>;
};


/** mutation root */
export type MutationRootInsertAreasOneArgs = {
  object: AreasInsertInput;
  on_conflict?: Maybe<AreasOnConflict>;
};


/** mutation root */
export type MutationRootInsertCategoriesArgs = {
  objects: Array<CategoriesInsertInput>;
  on_conflict?: Maybe<CategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertCategoriesOneArgs = {
  object: CategoriesInsertInput;
  on_conflict?: Maybe<CategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertLikesArgs = {
  objects: Array<LikesInsertInput>;
  on_conflict?: Maybe<LikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertLikesOneArgs = {
  object: LikesInsertInput;
  on_conflict?: Maybe<LikesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPrefecturesArgs = {
  objects: Array<PrefecturesInsertInput>;
  on_conflict?: Maybe<PrefecturesOnConflict>;
};


/** mutation root */
export type MutationRootInsertPrefecturesOneArgs = {
  object: PrefecturesInsertInput;
  on_conflict?: Maybe<PrefecturesOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopCategoriesArgs = {
  objects: Array<ShopCategoriesInsertInput>;
  on_conflict?: Maybe<ShopCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopCategoriesOneArgs = {
  object: ShopCategoriesInsertInput;
  on_conflict?: Maybe<ShopCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopCommentsArgs = {
  objects: Array<ShopCommentsInsertInput>;
  on_conflict?: Maybe<ShopCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopCommentsOneArgs = {
  object: ShopCommentsInsertInput;
  on_conflict?: Maybe<ShopCommentsOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopUrlsArgs = {
  objects: Array<ShopUrlsInsertInput>;
  on_conflict?: Maybe<ShopUrlsOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopUrlsOneArgs = {
  object: ShopUrlsInsertInput;
  on_conflict?: Maybe<ShopUrlsOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopsArgs = {
  objects: Array<ShopsInsertInput>;
  on_conflict?: Maybe<ShopsOnConflict>;
};


/** mutation root */
export type MutationRootInsertShopsOneArgs = {
  object: ShopsInsertInput;
  on_conflict?: Maybe<ShopsOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserCategoriesArgs = {
  objects: Array<UserCategoriesInsertInput>;
  on_conflict?: Maybe<UserCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserCategoriesOneArgs = {
  object: UserCategoriesInsertInput;
  on_conflict?: Maybe<UserCategoriesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersOneArgs = {
  object: UsersInsertInput;
  on_conflict?: Maybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAreasArgs = {
  _inc?: Maybe<AreasIncInput>;
  _set?: Maybe<AreasSetInput>;
  where: AreasBoolExp;
};


/** mutation root */
export type MutationRootUpdateAreasByPkArgs = {
  _inc?: Maybe<AreasIncInput>;
  _set?: Maybe<AreasSetInput>;
  pk_columns: AreasPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateCategoriesArgs = {
  _inc?: Maybe<CategoriesIncInput>;
  _set?: Maybe<CategoriesSetInput>;
  where: CategoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateCategoriesByPkArgs = {
  _inc?: Maybe<CategoriesIncInput>;
  _set?: Maybe<CategoriesSetInput>;
  pk_columns: CategoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateLikesArgs = {
  _set?: Maybe<LikesSetInput>;
  where: LikesBoolExp;
};


/** mutation root */
export type MutationRootUpdateLikesByPkArgs = {
  _set?: Maybe<LikesSetInput>;
  pk_columns: LikesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdatePrefecturesArgs = {
  _inc?: Maybe<PrefecturesIncInput>;
  _set?: Maybe<PrefecturesSetInput>;
  where: PrefecturesBoolExp;
};


/** mutation root */
export type MutationRootUpdatePrefecturesByPkArgs = {
  _inc?: Maybe<PrefecturesIncInput>;
  _set?: Maybe<PrefecturesSetInput>;
  pk_columns: PrefecturesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateShopCategoriesArgs = {
  _inc?: Maybe<ShopCategoriesIncInput>;
  _set?: Maybe<ShopCategoriesSetInput>;
  where: ShopCategoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateShopCategoriesByPkArgs = {
  _inc?: Maybe<ShopCategoriesIncInput>;
  _set?: Maybe<ShopCategoriesSetInput>;
  pk_columns: ShopCategoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateShopCommentsArgs = {
  _inc?: Maybe<ShopCommentsIncInput>;
  _set?: Maybe<ShopCommentsSetInput>;
  where: ShopCommentsBoolExp;
};


/** mutation root */
export type MutationRootUpdateShopCommentsByPkArgs = {
  _inc?: Maybe<ShopCommentsIncInput>;
  _set?: Maybe<ShopCommentsSetInput>;
  pk_columns: ShopCommentsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateShopUrlsArgs = {
  _set?: Maybe<ShopUrlsSetInput>;
  where: ShopUrlsBoolExp;
};


/** mutation root */
export type MutationRootUpdateShopUrlsByPkArgs = {
  _set?: Maybe<ShopUrlsSetInput>;
  pk_columns: ShopUrlsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateShopsArgs = {
  _inc?: Maybe<ShopsIncInput>;
  _set?: Maybe<ShopsSetInput>;
  where: ShopsBoolExp;
};


/** mutation root */
export type MutationRootUpdateShopsByPkArgs = {
  _inc?: Maybe<ShopsIncInput>;
  _set?: Maybe<ShopsSetInput>;
  pk_columns: ShopsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUserCategoriesArgs = {
  _inc?: Maybe<UserCategoriesIncInput>;
  _set?: Maybe<UserCategoriesSetInput>;
  where: UserCategoriesBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserCategoriesByPkArgs = {
  _inc?: Maybe<UserCategoriesIncInput>;
  _set?: Maybe<UserCategoriesSetInput>;
  pk_columns: UserCategoriesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _inc?: Maybe<UsersIncInput>;
  _set?: Maybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateUsersByPkArgs = {
  _inc?: Maybe<UsersIncInput>;
  _set?: Maybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  ASC = 'asc',
  /** in ascending order, nulls first */
  ASC_NULLS_FIRST = 'asc_nulls_first',
  /** in ascending order, nulls last */
  ASC_NULLS_LAST = 'asc_nulls_last',
  /** in descending order, nulls first */
  DESC = 'desc',
  /** in descending order, nulls first */
  DESC_NULLS_FIRST = 'desc_nulls_first',
  /** in descending order, nulls last */
  DESC_NULLS_LAST = 'desc_nulls_last'
}

/** columns and relationships of "prefectures" */
export type Prefectures = {
  __typename?: 'prefectures';
  /** An object relationship */
  area?: Maybe<Areas>;
  area_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: ShopsAggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
};


/** columns and relationships of "prefectures" */
export type PrefecturesShopsArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesShopsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};

/** aggregated selection of "prefectures" */
export type PrefecturesAggregate = {
  __typename?: 'prefectures_aggregate';
  aggregate?: Maybe<PrefecturesAggregateFields>;
  nodes: Array<Prefectures>;
};

/** aggregate fields of "prefectures" */
export type PrefecturesAggregateFields = {
  __typename?: 'prefectures_aggregate_fields';
  avg?: Maybe<PrefecturesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<PrefecturesMaxFields>;
  min?: Maybe<PrefecturesMinFields>;
  stddev?: Maybe<PrefecturesStddevFields>;
  stddev_pop?: Maybe<PrefecturesStddevPopFields>;
  stddev_samp?: Maybe<PrefecturesStddevSampFields>;
  sum?: Maybe<PrefecturesSumFields>;
  var_pop?: Maybe<PrefecturesVarPopFields>;
  var_samp?: Maybe<PrefecturesVarSampFields>;
  variance?: Maybe<PrefecturesVarianceFields>;
};


/** aggregate fields of "prefectures" */
export type PrefecturesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<PrefecturesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prefectures" */
export type PrefecturesAggregateOrderBy = {
  avg?: Maybe<PrefecturesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<PrefecturesMaxOrderBy>;
  min?: Maybe<PrefecturesMinOrderBy>;
  stddev?: Maybe<PrefecturesStddevOrderBy>;
  stddev_pop?: Maybe<PrefecturesStddevPopOrderBy>;
  stddev_samp?: Maybe<PrefecturesStddevSampOrderBy>;
  sum?: Maybe<PrefecturesSumOrderBy>;
  var_pop?: Maybe<PrefecturesVarPopOrderBy>;
  var_samp?: Maybe<PrefecturesVarSampOrderBy>;
  variance?: Maybe<PrefecturesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "prefectures" */
export type PrefecturesArrRelInsertInput = {
  data: Array<PrefecturesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<PrefecturesOnConflict>;
};

/** aggregate avg on columns */
export type PrefecturesAvgFields = {
  __typename?: 'prefectures_avg_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "prefectures" */
export type PrefecturesAvgOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "prefectures". All fields are combined with a logical 'AND'. */
export type PrefecturesBoolExp = {
  _and?: Maybe<Array<PrefecturesBoolExp>>;
  _not?: Maybe<PrefecturesBoolExp>;
  _or?: Maybe<Array<PrefecturesBoolExp>>;
  area?: Maybe<AreasBoolExp>;
  area_id?: Maybe<IntComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<IntComparisonExp>;
  name?: Maybe<StringComparisonExp>;
  shops?: Maybe<ShopsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  users?: Maybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "prefectures" */
export enum PrefecturesConstraint {
  /** unique or primary key constraint */
  PREFECTURES_PKEY = 'prefectures_pkey'
}

/** input type for incrementing numeric columns in table "prefectures" */
export type PrefecturesIncInput = {
  area_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "prefectures" */
export type PrefecturesInsertInput = {
  area?: Maybe<AreasObjRelInsertInput>;
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<ShopsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type PrefecturesMaxFields = {
  __typename?: 'prefectures_max_fields';
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "prefectures" */
export type PrefecturesMaxOrderBy = {
  area_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type PrefecturesMinFields = {
  __typename?: 'prefectures_min_fields';
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "prefectures" */
export type PrefecturesMinOrderBy = {
  area_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "prefectures" */
export type PrefecturesMutationResponse = {
  __typename?: 'prefectures_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prefectures>;
};

/** input type for inserting object relation for remote table "prefectures" */
export type PrefecturesObjRelInsertInput = {
  data: PrefecturesInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<PrefecturesOnConflict>;
};

/** on conflict condition type for table "prefectures" */
export type PrefecturesOnConflict = {
  constraint: PrefecturesConstraint;
  update_columns?: Array<PrefecturesUpdateColumn>;
  where?: Maybe<PrefecturesBoolExp>;
};

/** Ordering options when selecting data from "prefectures". */
export type PrefecturesOrderBy = {
  area?: Maybe<AreasOrderBy>;
  area_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  shops_aggregate?: Maybe<ShopsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  users_aggregate?: Maybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: prefectures */
export type PrefecturesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "prefectures" */
export enum PrefecturesSelectColumn {
  /** column name */
  AREA_ID = 'area_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "prefectures" */
export type PrefecturesSetInput = {
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type PrefecturesStddevFields = {
  __typename?: 'prefectures_stddev_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "prefectures" */
export type PrefecturesStddevOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type PrefecturesStddevPopFields = {
  __typename?: 'prefectures_stddev_pop_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "prefectures" */
export type PrefecturesStddevPopOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type PrefecturesStddevSampFields = {
  __typename?: 'prefectures_stddev_samp_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "prefectures" */
export type PrefecturesStddevSampOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type PrefecturesSumFields = {
  __typename?: 'prefectures_sum_fields';
  area_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "prefectures" */
export type PrefecturesSumOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "prefectures" */
export enum PrefecturesUpdateColumn {
  /** column name */
  AREA_ID = 'area_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type PrefecturesVarPopFields = {
  __typename?: 'prefectures_var_pop_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "prefectures" */
export type PrefecturesVarPopOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type PrefecturesVarSampFields = {
  __typename?: 'prefectures_var_samp_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "prefectures" */
export type PrefecturesVarSampOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type PrefecturesVarianceFields = {
  __typename?: 'prefectures_variance_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "prefectures" */
export type PrefecturesVarianceOrderBy = {
  area_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "areas" */
  areas: Array<Areas>;
  /** fetch aggregated fields from the table: "areas" */
  areas_aggregate: AreasAggregate;
  /** fetch data from the table: "areas" using primary key columns */
  areas_by_pk?: Maybe<Areas>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: LikesAggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  prefectures: Array<Prefectures>;
  /** An aggregate relationship */
  prefectures_aggregate: PrefecturesAggregate;
  /** fetch data from the table: "prefectures" using primary key columns */
  prefectures_by_pk?: Maybe<Prefectures>;
  /** An array relationship */
  shop_categories: Array<ShopCategories>;
  /** An aggregate relationship */
  shop_categories_aggregate: ShopCategoriesAggregate;
  /** fetch data from the table: "shop_categories" using primary key columns */
  shop_categories_by_pk?: Maybe<ShopCategories>;
  /** An array relationship */
  shop_comments: Array<ShopComments>;
  /** An aggregate relationship */
  shop_comments_aggregate: ShopCommentsAggregate;
  /** fetch data from the table: "shop_comments" using primary key columns */
  shop_comments_by_pk?: Maybe<ShopComments>;
  /** An array relationship */
  shop_urls: Array<ShopUrls>;
  /** An aggregate relationship */
  shop_urls_aggregate: ShopUrlsAggregate;
  /** fetch data from the table: "shop_urls" using primary key columns */
  shop_urls_by_pk?: Maybe<ShopUrls>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: ShopsAggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  user_categories: Array<UserCategories>;
  /** An aggregate relationship */
  user_categories_aggregate: UserCategoriesAggregate;
  /** fetch data from the table: "user_categories" using primary key columns */
  user_categories_by_pk?: Maybe<UserCategories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type QueryRootAreasArgs = {
  distinct_on?: Maybe<Array<AreasSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AreasOrderBy>>;
  where?: Maybe<AreasBoolExp>;
};


export type QueryRootAreasAggregateArgs = {
  distinct_on?: Maybe<Array<AreasSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AreasOrderBy>>;
  where?: Maybe<AreasBoolExp>;
};


export type QueryRootAreasByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootCategoriesArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type QueryRootCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type QueryRootCategoriesByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


export type QueryRootLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


export type QueryRootLikesByPkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type QueryRootPrefecturesArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};


export type QueryRootPrefecturesAggregateArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};


export type QueryRootPrefecturesByPkArgs = {
  id: Scalars['Int'];
};


export type QueryRootShopCategoriesArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


export type QueryRootShopCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


export type QueryRootShopCategoriesByPkArgs = {
  id: Scalars['bigint'];
};


export type QueryRootShopCommentsArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


export type QueryRootShopCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


export type QueryRootShopCommentsByPkArgs = {
  id: Scalars['bigint'];
};


export type QueryRootShopUrlsArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};


export type QueryRootShopUrlsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};


export type QueryRootShopUrlsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootShopsArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


export type QueryRootShopsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


export type QueryRootShopsByPkArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUserCategoriesArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


export type QueryRootUserCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


export type QueryRootUserCategoriesByPkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type QueryRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type QueryRootUsersByPkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "shop_categories" */
export type ShopCategories = {
  __typename?: 'shop_categories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  shop: Shops;
  shop_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "shop_categories" */
export type ShopCategoriesAggregate = {
  __typename?: 'shop_categories_aggregate';
  aggregate?: Maybe<ShopCategoriesAggregateFields>;
  nodes: Array<ShopCategories>;
};

/** aggregate fields of "shop_categories" */
export type ShopCategoriesAggregateFields = {
  __typename?: 'shop_categories_aggregate_fields';
  avg?: Maybe<ShopCategoriesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ShopCategoriesMaxFields>;
  min?: Maybe<ShopCategoriesMinFields>;
  stddev?: Maybe<ShopCategoriesStddevFields>;
  stddev_pop?: Maybe<ShopCategoriesStddevPopFields>;
  stddev_samp?: Maybe<ShopCategoriesStddevSampFields>;
  sum?: Maybe<ShopCategoriesSumFields>;
  var_pop?: Maybe<ShopCategoriesVarPopFields>;
  var_samp?: Maybe<ShopCategoriesVarSampFields>;
  variance?: Maybe<ShopCategoriesVarianceFields>;
};


/** aggregate fields of "shop_categories" */
export type ShopCategoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShopCategoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_categories" */
export type ShopCategoriesAggregateOrderBy = {
  avg?: Maybe<ShopCategoriesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ShopCategoriesMaxOrderBy>;
  min?: Maybe<ShopCategoriesMinOrderBy>;
  stddev?: Maybe<ShopCategoriesStddevOrderBy>;
  stddev_pop?: Maybe<ShopCategoriesStddevPopOrderBy>;
  stddev_samp?: Maybe<ShopCategoriesStddevSampOrderBy>;
  sum?: Maybe<ShopCategoriesSumOrderBy>;
  var_pop?: Maybe<ShopCategoriesVarPopOrderBy>;
  var_samp?: Maybe<ShopCategoriesVarSampOrderBy>;
  variance?: Maybe<ShopCategoriesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "shop_categories" */
export type ShopCategoriesArrRelInsertInput = {
  data: Array<ShopCategoriesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<ShopCategoriesOnConflict>;
};

/** aggregate avg on columns */
export type ShopCategoriesAvgFields = {
  __typename?: 'shop_categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shop_categories" */
export type ShopCategoriesAvgOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "shop_categories". All fields are combined with a logical 'AND'. */
export type ShopCategoriesBoolExp = {
  _and?: Maybe<Array<ShopCategoriesBoolExp>>;
  _not?: Maybe<ShopCategoriesBoolExp>;
  _or?: Maybe<Array<ShopCategoriesBoolExp>>;
  category?: Maybe<CategoriesBoolExp>;
  category_id?: Maybe<IntComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<BigintComparisonExp>;
  shop?: Maybe<ShopsBoolExp>;
  shop_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "shop_categories" */
export enum ShopCategoriesConstraint {
  /** unique or primary key constraint */
  SHOP_CATEGORIES_PKEY = 'shop_categories_pkey'
}

/** input type for incrementing numeric columns in table "shop_categories" */
export type ShopCategoriesIncInput = {
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "shop_categories" */
export type ShopCategoriesInsertInput = {
  category?: Maybe<CategoriesObjRelInsertInput>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop?: Maybe<ShopsObjRelInsertInput>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ShopCategoriesMaxFields = {
  __typename?: 'shop_categories_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "shop_categories" */
export type ShopCategoriesMaxOrderBy = {
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShopCategoriesMinFields = {
  __typename?: 'shop_categories_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "shop_categories" */
export type ShopCategoriesMinOrderBy = {
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "shop_categories" */
export type ShopCategoriesMutationResponse = {
  __typename?: 'shop_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ShopCategories>;
};

/** on conflict condition type for table "shop_categories" */
export type ShopCategoriesOnConflict = {
  constraint: ShopCategoriesConstraint;
  update_columns?: Array<ShopCategoriesUpdateColumn>;
  where?: Maybe<ShopCategoriesBoolExp>;
};

/** Ordering options when selecting data from "shop_categories". */
export type ShopCategoriesOrderBy = {
  category?: Maybe<CategoriesOrderBy>;
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop?: Maybe<ShopsOrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: shop_categories */
export type ShopCategoriesPkColumnsInput = {
  id: Scalars['bigint'];
};

/** select columns of table "shop_categories" */
export enum ShopCategoriesSelectColumn {
  /** column name */
  CATEGORY_ID = 'category_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "shop_categories" */
export type ShopCategoriesSetInput = {
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ShopCategoriesStddevFields = {
  __typename?: 'shop_categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shop_categories" */
export type ShopCategoriesStddevOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ShopCategoriesStddevPopFields = {
  __typename?: 'shop_categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shop_categories" */
export type ShopCategoriesStddevPopOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ShopCategoriesStddevSampFields = {
  __typename?: 'shop_categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shop_categories" */
export type ShopCategoriesStddevSampOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ShopCategoriesSumFields = {
  __typename?: 'shop_categories_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "shop_categories" */
export type ShopCategoriesSumOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** update columns of table "shop_categories" */
export enum ShopCategoriesUpdateColumn {
  /** column name */
  CATEGORY_ID = 'category_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type ShopCategoriesVarPopFields = {
  __typename?: 'shop_categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shop_categories" */
export type ShopCategoriesVarPopOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ShopCategoriesVarSampFields = {
  __typename?: 'shop_categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shop_categories" */
export type ShopCategoriesVarSampOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ShopCategoriesVarianceFields = {
  __typename?: 'shop_categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shop_categories" */
export type ShopCategoriesVarianceOrderBy = {
  category_id?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "shop_comments" */
export type ShopComments = {
  __typename?: 'shop_comments';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['bigint'];
  /** An object relationship */
  shop: Shops;
  shop_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "shop_comments" */
export type ShopCommentsAggregate = {
  __typename?: 'shop_comments_aggregate';
  aggregate?: Maybe<ShopCommentsAggregateFields>;
  nodes: Array<ShopComments>;
};

/** aggregate fields of "shop_comments" */
export type ShopCommentsAggregateFields = {
  __typename?: 'shop_comments_aggregate_fields';
  avg?: Maybe<ShopCommentsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ShopCommentsMaxFields>;
  min?: Maybe<ShopCommentsMinFields>;
  stddev?: Maybe<ShopCommentsStddevFields>;
  stddev_pop?: Maybe<ShopCommentsStddevPopFields>;
  stddev_samp?: Maybe<ShopCommentsStddevSampFields>;
  sum?: Maybe<ShopCommentsSumFields>;
  var_pop?: Maybe<ShopCommentsVarPopFields>;
  var_samp?: Maybe<ShopCommentsVarSampFields>;
  variance?: Maybe<ShopCommentsVarianceFields>;
};


/** aggregate fields of "shop_comments" */
export type ShopCommentsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShopCommentsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_comments" */
export type ShopCommentsAggregateOrderBy = {
  avg?: Maybe<ShopCommentsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ShopCommentsMaxOrderBy>;
  min?: Maybe<ShopCommentsMinOrderBy>;
  stddev?: Maybe<ShopCommentsStddevOrderBy>;
  stddev_pop?: Maybe<ShopCommentsStddevPopOrderBy>;
  stddev_samp?: Maybe<ShopCommentsStddevSampOrderBy>;
  sum?: Maybe<ShopCommentsSumOrderBy>;
  var_pop?: Maybe<ShopCommentsVarPopOrderBy>;
  var_samp?: Maybe<ShopCommentsVarSampOrderBy>;
  variance?: Maybe<ShopCommentsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "shop_comments" */
export type ShopCommentsArrRelInsertInput = {
  data: Array<ShopCommentsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<ShopCommentsOnConflict>;
};

/** aggregate avg on columns */
export type ShopCommentsAvgFields = {
  __typename?: 'shop_comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shop_comments" */
export type ShopCommentsAvgOrderBy = {
  id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "shop_comments". All fields are combined with a logical 'AND'. */
export type ShopCommentsBoolExp = {
  _and?: Maybe<Array<ShopCommentsBoolExp>>;
  _not?: Maybe<ShopCommentsBoolExp>;
  _or?: Maybe<Array<ShopCommentsBoolExp>>;
  content?: Maybe<StringComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<BigintComparisonExp>;
  shop?: Maybe<ShopsBoolExp>;
  shop_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "shop_comments" */
export enum ShopCommentsConstraint {
  /** unique or primary key constraint */
  SHOP_COMMENTS_PKEY = 'shop_comments_pkey'
}

/** input type for incrementing numeric columns in table "shop_comments" */
export type ShopCommentsIncInput = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "shop_comments" */
export type ShopCommentsInsertInput = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop?: Maybe<ShopsObjRelInsertInput>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ShopCommentsMaxFields = {
  __typename?: 'shop_comments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shop_comments" */
export type ShopCommentsMaxOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShopCommentsMinFields = {
  __typename?: 'shop_comments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shop_comments" */
export type ShopCommentsMinOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "shop_comments" */
export type ShopCommentsMutationResponse = {
  __typename?: 'shop_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ShopComments>;
};

/** on conflict condition type for table "shop_comments" */
export type ShopCommentsOnConflict = {
  constraint: ShopCommentsConstraint;
  update_columns?: Array<ShopCommentsUpdateColumn>;
  where?: Maybe<ShopCommentsBoolExp>;
};

/** Ordering options when selecting data from "shop_comments". */
export type ShopCommentsOrderBy = {
  content?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop?: Maybe<ShopsOrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: shop_comments */
export type ShopCommentsPkColumnsInput = {
  id: Scalars['bigint'];
};

/** select columns of table "shop_comments" */
export enum ShopCommentsSelectColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "shop_comments" */
export type ShopCommentsSetInput = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type ShopCommentsStddevFields = {
  __typename?: 'shop_comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shop_comments" */
export type ShopCommentsStddevOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ShopCommentsStddevPopFields = {
  __typename?: 'shop_comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shop_comments" */
export type ShopCommentsStddevPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ShopCommentsStddevSampFields = {
  __typename?: 'shop_comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shop_comments" */
export type ShopCommentsStddevSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ShopCommentsSumFields = {
  __typename?: 'shop_comments_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "shop_comments" */
export type ShopCommentsSumOrderBy = {
  id?: Maybe<OrderBy>;
};

/** update columns of table "shop_comments" */
export enum ShopCommentsUpdateColumn {
  /** column name */
  CONTENT = 'content',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type ShopCommentsVarPopFields = {
  __typename?: 'shop_comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shop_comments" */
export type ShopCommentsVarPopOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ShopCommentsVarSampFields = {
  __typename?: 'shop_comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shop_comments" */
export type ShopCommentsVarSampOrderBy = {
  id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ShopCommentsVarianceFields = {
  __typename?: 'shop_comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shop_comments" */
export type ShopCommentsVarianceOrderBy = {
  id?: Maybe<OrderBy>;
};

/** columns and relationships of "shop_urls" */
export type ShopUrls = {
  __typename?: 'shop_urls';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  shop: Shops;
  shop_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "shop_urls" */
export type ShopUrlsAggregate = {
  __typename?: 'shop_urls_aggregate';
  aggregate?: Maybe<ShopUrlsAggregateFields>;
  nodes: Array<ShopUrls>;
};

/** aggregate fields of "shop_urls" */
export type ShopUrlsAggregateFields = {
  __typename?: 'shop_urls_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<ShopUrlsMaxFields>;
  min?: Maybe<ShopUrlsMinFields>;
};


/** aggregate fields of "shop_urls" */
export type ShopUrlsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShopUrlsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_urls" */
export type ShopUrlsAggregateOrderBy = {
  count?: Maybe<OrderBy>;
  max?: Maybe<ShopUrlsMaxOrderBy>;
  min?: Maybe<ShopUrlsMinOrderBy>;
};

/** input type for inserting array relation for remote table "shop_urls" */
export type ShopUrlsArrRelInsertInput = {
  data: Array<ShopUrlsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<ShopUrlsOnConflict>;
};

/** Boolean expression to filter rows from the table "shop_urls". All fields are combined with a logical 'AND'. */
export type ShopUrlsBoolExp = {
  _and?: Maybe<Array<ShopUrlsBoolExp>>;
  _not?: Maybe<ShopUrlsBoolExp>;
  _or?: Maybe<Array<ShopUrlsBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  shop?: Maybe<ShopsBoolExp>;
  shop_id?: Maybe<UuidComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  url?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "shop_urls" */
export enum ShopUrlsConstraint {
  /** unique or primary key constraint */
  SHOP_URLS_PKEY = 'shop_urls_pkey'
}

/** input type for inserting data into table "shop_urls" */
export type ShopUrlsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop?: Maybe<ShopsObjRelInsertInput>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type ShopUrlsMaxFields = {
  __typename?: 'shop_urls_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shop_urls" */
export type ShopUrlsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShopUrlsMinFields = {
  __typename?: 'shop_urls_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shop_urls" */
export type ShopUrlsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** response of any mutation on the table "shop_urls" */
export type ShopUrlsMutationResponse = {
  __typename?: 'shop_urls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<ShopUrls>;
};

/** on conflict condition type for table "shop_urls" */
export type ShopUrlsOnConflict = {
  constraint: ShopUrlsConstraint;
  update_columns?: Array<ShopUrlsUpdateColumn>;
  where?: Maybe<ShopUrlsBoolExp>;
};

/** Ordering options when selecting data from "shop_urls". */
export type ShopUrlsOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  shop?: Maybe<ShopsOrderBy>;
  shop_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  url?: Maybe<OrderBy>;
};

/** primary key columns input for table: shop_urls */
export type ShopUrlsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "shop_urls" */
export enum ShopUrlsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  URL = 'url'
}

/** input type for updating data in table "shop_urls" */
export type ShopUrlsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** update columns of table "shop_urls" */
export enum ShopUrlsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  SHOP_ID = 'shop_id',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  URL = 'url'
}

/** columns and relationships of "shops" */
export type Shops = {
  __typename?: 'shops';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: LikesAggregate;
  name: Scalars['String'];
  phone_number?: Maybe<Scalars['Int']>;
  /** An object relationship */
  prefecture?: Maybe<Prefectures>;
  prefecture_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  shop_categories: Array<ShopCategories>;
  /** An aggregate relationship */
  shop_categories_aggregate: ShopCategoriesAggregate;
  /** An array relationship */
  shop_comments: Array<ShopComments>;
  /** An aggregate relationship */
  shop_comments_aggregate: ShopCommentsAggregate;
  /** An array relationship */
  shop_urls: Array<ShopUrls>;
  /** An aggregate relationship */
  shop_urls_aggregate: ShopUrlsAggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "shops" */
export type ShopsLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopCategoriesArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopCommentsArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopUrlsArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};


/** columns and relationships of "shops" */
export type ShopsShopUrlsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};

/** aggregated selection of "shops" */
export type ShopsAggregate = {
  __typename?: 'shops_aggregate';
  aggregate?: Maybe<ShopsAggregateFields>;
  nodes: Array<Shops>;
};

/** aggregate fields of "shops" */
export type ShopsAggregateFields = {
  __typename?: 'shops_aggregate_fields';
  avg?: Maybe<ShopsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<ShopsMaxFields>;
  min?: Maybe<ShopsMinFields>;
  stddev?: Maybe<ShopsStddevFields>;
  stddev_pop?: Maybe<ShopsStddevPopFields>;
  stddev_samp?: Maybe<ShopsStddevSampFields>;
  sum?: Maybe<ShopsSumFields>;
  var_pop?: Maybe<ShopsVarPopFields>;
  var_samp?: Maybe<ShopsVarSampFields>;
  variance?: Maybe<ShopsVarianceFields>;
};


/** aggregate fields of "shops" */
export type ShopsAggregateFieldsCountArgs = {
  columns?: Maybe<Array<ShopsSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shops" */
export type ShopsAggregateOrderBy = {
  avg?: Maybe<ShopsAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<ShopsMaxOrderBy>;
  min?: Maybe<ShopsMinOrderBy>;
  stddev?: Maybe<ShopsStddevOrderBy>;
  stddev_pop?: Maybe<ShopsStddevPopOrderBy>;
  stddev_samp?: Maybe<ShopsStddevSampOrderBy>;
  sum?: Maybe<ShopsSumOrderBy>;
  var_pop?: Maybe<ShopsVarPopOrderBy>;
  var_samp?: Maybe<ShopsVarSampOrderBy>;
  variance?: Maybe<ShopsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "shops" */
export type ShopsArrRelInsertInput = {
  data: Array<ShopsInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<ShopsOnConflict>;
};

/** aggregate avg on columns */
export type ShopsAvgFields = {
  __typename?: 'shops_avg_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shops" */
export type ShopsAvgOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "shops". All fields are combined with a logical 'AND'. */
export type ShopsBoolExp = {
  _and?: Maybe<Array<ShopsBoolExp>>;
  _not?: Maybe<ShopsBoolExp>;
  _or?: Maybe<Array<ShopsBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  description?: Maybe<StringComparisonExp>;
  id?: Maybe<UuidComparisonExp>;
  likes?: Maybe<LikesBoolExp>;
  name?: Maybe<StringComparisonExp>;
  phone_number?: Maybe<IntComparisonExp>;
  prefecture?: Maybe<PrefecturesBoolExp>;
  prefecture_id?: Maybe<IntComparisonExp>;
  shop_categories?: Maybe<ShopCategoriesBoolExp>;
  shop_comments?: Maybe<ShopCommentsBoolExp>;
  shop_urls?: Maybe<ShopUrlsBoolExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "shops" */
export enum ShopsConstraint {
  /** unique or primary key constraint */
  SHOPS_PKEY = 'shops_pkey'
}

/** input type for incrementing numeric columns in table "shops" */
export type ShopsIncInput = {
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "shops" */
export type ShopsInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  likes?: Maybe<LikesArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture?: Maybe<PrefecturesObjRelInsertInput>;
  prefecture_id?: Maybe<Scalars['Int']>;
  shop_categories?: Maybe<ShopCategoriesArrRelInsertInput>;
  shop_comments?: Maybe<ShopCommentsArrRelInsertInput>;
  shop_urls?: Maybe<ShopUrlsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type ShopsMaxFields = {
  __typename?: 'shops_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "shops" */
export type ShopsMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type ShopsMinFields = {
  __typename?: 'shops_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "shops" */
export type ShopsMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "shops" */
export type ShopsMutationResponse = {
  __typename?: 'shops_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shops>;
};

/** input type for inserting object relation for remote table "shops" */
export type ShopsObjRelInsertInput = {
  data: ShopsInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<ShopsOnConflict>;
};

/** on conflict condition type for table "shops" */
export type ShopsOnConflict = {
  constraint: ShopsConstraint;
  update_columns?: Array<ShopsUpdateColumn>;
  where?: Maybe<ShopsBoolExp>;
};

/** Ordering options when selecting data from "shops". */
export type ShopsOrderBy = {
  created_at?: Maybe<OrderBy>;
  description?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikesAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  phone_number?: Maybe<OrderBy>;
  prefecture?: Maybe<PrefecturesOrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  shop_categories_aggregate?: Maybe<ShopCategoriesAggregateOrderBy>;
  shop_comments_aggregate?: Maybe<ShopCommentsAggregateOrderBy>;
  shop_urls_aggregate?: Maybe<ShopUrlsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** primary key columns input for table: shops */
export type ShopsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "shops" */
export enum ShopsSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  PHONE_NUMBER = 'phone_number',
  /** column name */
  PREFECTURE_ID = 'prefecture_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "shops" */
export type ShopsSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type ShopsStddevFields = {
  __typename?: 'shops_stddev_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shops" */
export type ShopsStddevOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type ShopsStddevPopFields = {
  __typename?: 'shops_stddev_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shops" */
export type ShopsStddevPopOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type ShopsStddevSampFields = {
  __typename?: 'shops_stddev_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shops" */
export type ShopsStddevSampOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type ShopsSumFields = {
  __typename?: 'shops_sum_fields';
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "shops" */
export type ShopsSumOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** update columns of table "shops" */
export enum ShopsUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  DESCRIPTION = 'description',
  /** column name */
  ID = 'id',
  /** column name */
  NAME = 'name',
  /** column name */
  PHONE_NUMBER = 'phone_number',
  /** column name */
  PREFECTURE_ID = 'prefecture_id',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type ShopsVarPopFields = {
  __typename?: 'shops_var_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shops" */
export type ShopsVarPopOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type ShopsVarSampFields = {
  __typename?: 'shops_var_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shops" */
export type ShopsVarSampOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type ShopsVarianceFields = {
  __typename?: 'shops_variance_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shops" */
export type ShopsVarianceOrderBy = {
  phone_number?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "areas" */
  areas: Array<Areas>;
  /** fetch aggregated fields from the table: "areas" */
  areas_aggregate: AreasAggregate;
  /** fetch data from the table: "areas" using primary key columns */
  areas_by_pk?: Maybe<Areas>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: CategoriesAggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: LikesAggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  prefectures: Array<Prefectures>;
  /** An aggregate relationship */
  prefectures_aggregate: PrefecturesAggregate;
  /** fetch data from the table: "prefectures" using primary key columns */
  prefectures_by_pk?: Maybe<Prefectures>;
  /** An array relationship */
  shop_categories: Array<ShopCategories>;
  /** An aggregate relationship */
  shop_categories_aggregate: ShopCategoriesAggregate;
  /** fetch data from the table: "shop_categories" using primary key columns */
  shop_categories_by_pk?: Maybe<ShopCategories>;
  /** An array relationship */
  shop_comments: Array<ShopComments>;
  /** An aggregate relationship */
  shop_comments_aggregate: ShopCommentsAggregate;
  /** fetch data from the table: "shop_comments" using primary key columns */
  shop_comments_by_pk?: Maybe<ShopComments>;
  /** An array relationship */
  shop_urls: Array<ShopUrls>;
  /** An aggregate relationship */
  shop_urls_aggregate: ShopUrlsAggregate;
  /** fetch data from the table: "shop_urls" using primary key columns */
  shop_urls_by_pk?: Maybe<ShopUrls>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: ShopsAggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  user_categories: Array<UserCategories>;
  /** An aggregate relationship */
  user_categories_aggregate: UserCategoriesAggregate;
  /** fetch data from the table: "user_categories" using primary key columns */
  user_categories_by_pk?: Maybe<UserCategories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: UsersAggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type SubscriptionRootAreasArgs = {
  distinct_on?: Maybe<Array<AreasSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AreasOrderBy>>;
  where?: Maybe<AreasBoolExp>;
};


export type SubscriptionRootAreasAggregateArgs = {
  distinct_on?: Maybe<Array<AreasSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<AreasOrderBy>>;
  where?: Maybe<AreasBoolExp>;
};


export type SubscriptionRootAreasByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootCategoriesArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type SubscriptionRootCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<CategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<CategoriesOrderBy>>;
  where?: Maybe<CategoriesBoolExp>;
};


export type SubscriptionRootCategoriesByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


export type SubscriptionRootLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


export type SubscriptionRootLikesByPkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type SubscriptionRootPrefecturesArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};


export type SubscriptionRootPrefecturesAggregateArgs = {
  distinct_on?: Maybe<Array<PrefecturesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<PrefecturesOrderBy>>;
  where?: Maybe<PrefecturesBoolExp>;
};


export type SubscriptionRootPrefecturesByPkArgs = {
  id: Scalars['Int'];
};


export type SubscriptionRootShopCategoriesArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


export type SubscriptionRootShopCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCategoriesOrderBy>>;
  where?: Maybe<ShopCategoriesBoolExp>;
};


export type SubscriptionRootShopCategoriesByPkArgs = {
  id: Scalars['bigint'];
};


export type SubscriptionRootShopCommentsArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


export type SubscriptionRootShopCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


export type SubscriptionRootShopCommentsByPkArgs = {
  id: Scalars['bigint'];
};


export type SubscriptionRootShopUrlsArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};


export type SubscriptionRootShopUrlsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopUrlsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopUrlsOrderBy>>;
  where?: Maybe<ShopUrlsBoolExp>;
};


export type SubscriptionRootShopUrlsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootShopsArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


export type SubscriptionRootShopsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopsOrderBy>>;
  where?: Maybe<ShopsBoolExp>;
};


export type SubscriptionRootShopsByPkArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUserCategoriesArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


export type SubscriptionRootUserCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


export type SubscriptionRootUserCategoriesByPkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: Maybe<Array<UsersSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UsersOrderBy>>;
  where?: Maybe<UsersBoolExp>;
};


export type SubscriptionRootUsersByPkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type TimestampComparisonExp = {
  _eq?: Maybe<Scalars['timestamp']>;
  _gt?: Maybe<Scalars['timestamp']>;
  _gte?: Maybe<Scalars['timestamp']>;
  _in?: Maybe<Array<Scalars['timestamp']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamp']>;
  _lte?: Maybe<Scalars['timestamp']>;
  _neq?: Maybe<Scalars['timestamp']>;
  _nin?: Maybe<Array<Scalars['timestamp']>>;
};


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "user_categories" */
export type UserCategories = {
  __typename?: 'user_categories';
  /** An object relationship */
  category: Categories;
  category_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "user_categories" */
export type UserCategoriesAggregate = {
  __typename?: 'user_categories_aggregate';
  aggregate?: Maybe<UserCategoriesAggregateFields>;
  nodes: Array<UserCategories>;
};

/** aggregate fields of "user_categories" */
export type UserCategoriesAggregateFields = {
  __typename?: 'user_categories_aggregate_fields';
  avg?: Maybe<UserCategoriesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UserCategoriesMaxFields>;
  min?: Maybe<UserCategoriesMinFields>;
  stddev?: Maybe<UserCategoriesStddevFields>;
  stddev_pop?: Maybe<UserCategoriesStddevPopFields>;
  stddev_samp?: Maybe<UserCategoriesStddevSampFields>;
  sum?: Maybe<UserCategoriesSumFields>;
  var_pop?: Maybe<UserCategoriesVarPopFields>;
  var_samp?: Maybe<UserCategoriesVarSampFields>;
  variance?: Maybe<UserCategoriesVarianceFields>;
};


/** aggregate fields of "user_categories" */
export type UserCategoriesAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UserCategoriesSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_categories" */
export type UserCategoriesAggregateOrderBy = {
  avg?: Maybe<UserCategoriesAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<UserCategoriesMaxOrderBy>;
  min?: Maybe<UserCategoriesMinOrderBy>;
  stddev?: Maybe<UserCategoriesStddevOrderBy>;
  stddev_pop?: Maybe<UserCategoriesStddevPopOrderBy>;
  stddev_samp?: Maybe<UserCategoriesStddevSampOrderBy>;
  sum?: Maybe<UserCategoriesSumOrderBy>;
  var_pop?: Maybe<UserCategoriesVarPopOrderBy>;
  var_samp?: Maybe<UserCategoriesVarSampOrderBy>;
  variance?: Maybe<UserCategoriesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "user_categories" */
export type UserCategoriesArrRelInsertInput = {
  data: Array<UserCategoriesInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<UserCategoriesOnConflict>;
};

/** aggregate avg on columns */
export type UserCategoriesAvgFields = {
  __typename?: 'user_categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_categories" */
export type UserCategoriesAvgOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "user_categories". All fields are combined with a logical 'AND'. */
export type UserCategoriesBoolExp = {
  _and?: Maybe<Array<UserCategoriesBoolExp>>;
  _not?: Maybe<UserCategoriesBoolExp>;
  _or?: Maybe<Array<UserCategoriesBoolExp>>;
  category?: Maybe<CategoriesBoolExp>;
  category_id?: Maybe<IntComparisonExp>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  updated_at?: Maybe<TimestamptzComparisonExp>;
  user?: Maybe<UsersBoolExp>;
  user_id?: Maybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "user_categories" */
export enum UserCategoriesConstraint {
  /** unique or primary key constraint */
  USER_CATEGORIES_PKEY = 'user_categories_pkey'
}

/** input type for incrementing numeric columns in table "user_categories" */
export type UserCategoriesIncInput = {
  category_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_categories" */
export type UserCategoriesInsertInput = {
  category?: Maybe<CategoriesObjRelInsertInput>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<UsersObjRelInsertInput>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type UserCategoriesMaxFields = {
  __typename?: 'user_categories_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_categories" */
export type UserCategoriesMaxOrderBy = {
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UserCategoriesMinFields = {
  __typename?: 'user_categories_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_categories" */
export type UserCategoriesMinOrderBy = {
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** response of any mutation on the table "user_categories" */
export type UserCategoriesMutationResponse = {
  __typename?: 'user_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<UserCategories>;
};

/** on conflict condition type for table "user_categories" */
export type UserCategoriesOnConflict = {
  constraint: UserCategoriesConstraint;
  update_columns?: Array<UserCategoriesUpdateColumn>;
  where?: Maybe<UserCategoriesBoolExp>;
};

/** Ordering options when selecting data from "user_categories". */
export type UserCategoriesOrderBy = {
  category?: Maybe<CategoriesOrderBy>;
  category_id?: Maybe<OrderBy>;
  created_at?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
  user?: Maybe<UsersOrderBy>;
  user_id?: Maybe<OrderBy>;
};

/** primary key columns input for table: user_categories */
export type UserCategoriesPkColumnsInput = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "user_categories" */
export enum UserCategoriesSelectColumn {
  /** column name */
  CATEGORY_ID = 'category_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** input type for updating data in table "user_categories" */
export type UserCategoriesSetInput = {
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type UserCategoriesStddevFields = {
  __typename?: 'user_categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_categories" */
export type UserCategoriesStddevOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UserCategoriesStddevPopFields = {
  __typename?: 'user_categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_categories" */
export type UserCategoriesStddevPopOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UserCategoriesStddevSampFields = {
  __typename?: 'user_categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_categories" */
export type UserCategoriesStddevSampOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type UserCategoriesSumFields = {
  __typename?: 'user_categories_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_categories" */
export type UserCategoriesSumOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** update columns of table "user_categories" */
export enum UserCategoriesUpdateColumn {
  /** column name */
  CATEGORY_ID = 'category_id',
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  UPDATED_AT = 'updated_at',
  /** column name */
  USER_ID = 'user_id'
}

/** aggregate var_pop on columns */
export type UserCategoriesVarPopFields = {
  __typename?: 'user_categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_categories" */
export type UserCategoriesVarPopOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UserCategoriesVarSampFields = {
  __typename?: 'user_categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_categories" */
export type UserCategoriesVarSampOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type UserCategoriesVarianceFields = {
  __typename?: 'user_categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_categories" */
export type UserCategoriesVarianceOrderBy = {
  category_id?: Maybe<OrderBy>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  img_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: LikesAggregate;
  name: Scalars['String'];
  /** An object relationship */
  prefecture?: Maybe<Prefectures>;
  prefecture_id?: Maybe<Scalars['Int']>;
  self_pr?: Maybe<Scalars['String']>;
  /** An array relationship */
  shop_comments: Array<ShopComments>;
  /** An aggregate relationship */
  shop_comments_aggregate: ShopCommentsAggregate;
  updated_at: Scalars['timestamp'];
  /** An array relationship */
  user_categories: Array<UserCategories>;
  /** An aggregate relationship */
  user_categories_aggregate: UserCategoriesAggregate;
};


/** columns and relationships of "users" */
export type UsersLikesArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersLikesAggregateArgs = {
  distinct_on?: Maybe<Array<LikesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<LikesOrderBy>>;
  where?: Maybe<LikesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersShopCommentsArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersShopCommentsAggregateArgs = {
  distinct_on?: Maybe<Array<ShopCommentsSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<ShopCommentsOrderBy>>;
  where?: Maybe<ShopCommentsBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserCategoriesArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};


/** columns and relationships of "users" */
export type UsersUserCategoriesAggregateArgs = {
  distinct_on?: Maybe<Array<UserCategoriesSelectColumn>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<UserCategoriesOrderBy>>;
  where?: Maybe<UserCategoriesBoolExp>;
};

/** aggregated selection of "users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<UsersAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
  stddev?: Maybe<UsersStddevFields>;
  stddev_pop?: Maybe<UsersStddevPopFields>;
  stddev_samp?: Maybe<UsersStddevSampFields>;
  sum?: Maybe<UsersSumFields>;
  var_pop?: Maybe<UsersVarPopFields>;
  var_samp?: Maybe<UsersVarSampFields>;
  variance?: Maybe<UsersVarianceFields>;
};


/** aggregate fields of "users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: Maybe<Array<UsersSelectColumn>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type UsersAggregateOrderBy = {
  avg?: Maybe<UsersAvgOrderBy>;
  count?: Maybe<OrderBy>;
  max?: Maybe<UsersMaxOrderBy>;
  min?: Maybe<UsersMinOrderBy>;
  stddev?: Maybe<UsersStddevOrderBy>;
  stddev_pop?: Maybe<UsersStddevPopOrderBy>;
  stddev_samp?: Maybe<UsersStddevSampOrderBy>;
  sum?: Maybe<UsersSumOrderBy>;
  var_pop?: Maybe<UsersVarPopOrderBy>;
  var_samp?: Maybe<UsersVarSampOrderBy>;
  variance?: Maybe<UsersVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** on conflict condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** aggregate avg on columns */
export type UsersAvgFields = {
  __typename?: 'users_avg_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type UsersAvgOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: Maybe<Array<UsersBoolExp>>;
  _not?: Maybe<UsersBoolExp>;
  _or?: Maybe<Array<UsersBoolExp>>;
  created_at?: Maybe<TimestamptzComparisonExp>;
  id?: Maybe<StringComparisonExp>;
  img_url?: Maybe<StringComparisonExp>;
  likes?: Maybe<LikesBoolExp>;
  name?: Maybe<StringComparisonExp>;
  prefecture?: Maybe<PrefecturesBoolExp>;
  prefecture_id?: Maybe<IntComparisonExp>;
  self_pr?: Maybe<StringComparisonExp>;
  shop_comments?: Maybe<ShopCommentsBoolExp>;
  updated_at?: Maybe<TimestampComparisonExp>;
  user_categories?: Maybe<UserCategoriesBoolExp>;
};

/** unique or primary key constraints on table "users" */
export enum UsersConstraint {
  /** unique or primary key constraint */
  USERS_ID_KEY = 'users_id_key',
  /** unique or primary key constraint */
  USERS_PKEY = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type UsersIncInput = {
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type UsersInsertInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  likes?: Maybe<LikesArrRelInsertInput>;
  name?: Maybe<Scalars['String']>;
  prefecture?: Maybe<PrefecturesObjRelInsertInput>;
  prefecture_id?: Maybe<Scalars['Int']>;
  self_pr?: Maybe<Scalars['String']>;
  shop_comments?: Maybe<ShopCommentsArrRelInsertInput>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_categories?: Maybe<UserCategoriesArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  self_pr?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "users" */
export type UsersMaxOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  img_url?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  self_pr?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  self_pr?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "users" */
export type UsersMinOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  img_url?: Maybe<OrderBy>;
  name?: Maybe<OrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  self_pr?: Maybe<OrderBy>;
  updated_at?: Maybe<OrderBy>;
};

/** response of any mutation on the table "users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** on conflict condition */
  on_conflict?: Maybe<UsersOnConflict>;
};

/** on conflict condition type for table "users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: Maybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "users". */
export type UsersOrderBy = {
  created_at?: Maybe<OrderBy>;
  id?: Maybe<OrderBy>;
  img_url?: Maybe<OrderBy>;
  likes_aggregate?: Maybe<LikesAggregateOrderBy>;
  name?: Maybe<OrderBy>;
  prefecture?: Maybe<PrefecturesOrderBy>;
  prefecture_id?: Maybe<OrderBy>;
  self_pr?: Maybe<OrderBy>;
  shop_comments_aggregate?: Maybe<ShopCommentsAggregateOrderBy>;
  updated_at?: Maybe<OrderBy>;
  user_categories_aggregate?: Maybe<UserCategoriesAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum UsersSelectColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMG_URL = 'img_url',
  /** column name */
  NAME = 'name',
  /** column name */
  PREFECTURE_ID = 'prefecture_id',
  /** column name */
  SELF_PR = 'self_pr',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** input type for updating data in table "users" */
export type UsersSetInput = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  img_url?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  self_pr?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type UsersStddevFields = {
  __typename?: 'users_stddev_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type UsersStddevOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type UsersStddevPopFields = {
  __typename?: 'users_stddev_pop_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type UsersStddevPopOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type UsersStddevSampFields = {
  __typename?: 'users_stddev_samp_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type UsersStddevSampOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate sum on columns */
export type UsersSumFields = {
  __typename?: 'users_sum_fields';
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type UsersSumOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** update columns of table "users" */
export enum UsersUpdateColumn {
  /** column name */
  CREATED_AT = 'created_at',
  /** column name */
  ID = 'id',
  /** column name */
  IMG_URL = 'img_url',
  /** column name */
  NAME = 'name',
  /** column name */
  PREFECTURE_ID = 'prefecture_id',
  /** column name */
  SELF_PR = 'self_pr',
  /** column name */
  UPDATED_AT = 'updated_at'
}

/** aggregate var_pop on columns */
export type UsersVarPopFields = {
  __typename?: 'users_var_pop_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type UsersVarPopOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type UsersVarSampFields = {
  __typename?: 'users_var_samp_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type UsersVarSampOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};

/** aggregate variance on columns */
export type UsersVarianceFields = {
  __typename?: 'users_variance_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type UsersVarianceOrderBy = {
  prefecture_id?: Maybe<OrderBy>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetAreasQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasQuery = (
  { __typename?: 'query_root' }
  & { areas: Array<(
    { __typename?: 'areas' }
    & Pick<Areas, 'id' | 'name'>
  )> }
);

export type GetAreasByIdQueryVariables = Exact<{
  id?: Maybe<IntComparisonExp>;
}>;


export type GetAreasByIdQuery = (
  { __typename?: 'query_root' }
  & { areas: Array<(
    { __typename?: 'areas' }
    & Pick<Areas, 'id' | 'name'>
  )> }
);

export type GetAreasJoinPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAreasJoinPrefecturesQuery = (
  { __typename?: 'query_root' }
  & { areas: Array<(
    { __typename?: 'areas' }
    & Pick<Areas, 'id' | 'name'>
    & { prefectures: Array<(
      { __typename?: 'prefectures' }
      & Pick<Prefectures, 'area_id' | 'created_at' | 'id' | 'name'>
    )> }
  )> }
);

export type GetCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetCategoriesQuery = (
  { __typename?: 'query_root' }
  & { categories: Array<(
    { __typename?: 'categories' }
    & Pick<Categories, 'id' | 'name'>
  )> }
);

export type GetPrefecturesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefecturesQuery = (
  { __typename?: 'query_root' }
  & { prefectures: Array<(
    { __typename?: 'prefectures' }
    & Pick<Prefectures, 'id' | 'name'>
    & { area?: Maybe<(
      { __typename?: 'areas' }
      & Pick<Areas, 'id' | 'name'>
    )> }
  )> }
);

export type GetPrefecturesIdFirst5QueryVariables = Exact<{ [key: string]: never; }>;


export type GetPrefecturesIdFirst5Query = (
  { __typename?: 'query_root' }
  & { prefectures: Array<(
    { __typename?: 'prefectures' }
    & Pick<Prefectures, 'id'>
  )> }
);

export type GetPrefecturesByIdQueryVariables = Exact<{
  id?: Maybe<IntComparisonExp>;
}>;


export type GetPrefecturesByIdQuery = (
  { __typename?: 'query_root' }
  & { prefectures: Array<(
    { __typename?: 'prefectures' }
    & Pick<Prefectures, 'id' | 'name'>
    & { area?: Maybe<(
      { __typename?: 'areas' }
      & Pick<Areas, 'id' | 'name'>
    )> }
  )> }
);

export type GetPrefecturesByAreaIdQueryVariables = Exact<{
  area_id?: Maybe<IntComparisonExp>;
}>;


export type GetPrefecturesByAreaIdQuery = (
  { __typename?: 'query_root' }
  & { prefectures: Array<(
    { __typename?: 'prefectures' }
    & Pick<Prefectures, 'id' | 'name' | 'area_id'>
  )> }
);

export type GetShopsDetailByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['uuid']>;
}>;


export type GetShopsDetailByIdQuery = (
  { __typename?: 'query_root' }
  & { shops_by_pk?: Maybe<(
    { __typename?: 'shops' }
    & Pick<Shops, 'description' | 'id' | 'name' | 'prefecture_id'>
    & { shop_urls: Array<(
      { __typename?: 'shop_urls' }
      & Pick<ShopUrls, 'url'>
    )>, shop_comments: Array<(
      { __typename?: 'shop_comments' }
      & Pick<ShopComments, 'content'>
      & { user: (
        { __typename?: 'users' }
        & Pick<Users, 'id' | 'name' | 'prefecture_id'>
      ) }
    )>, likes_aggregate: (
      { __typename?: 'likes_aggregate' }
      & { aggregate?: Maybe<(
        { __typename?: 'likes_aggregate_fields' }
        & Pick<LikesAggregateFields, 'count'>
      )> }
    ), shop_categories: Array<(
      { __typename?: 'shop_categories' }
      & { category: (
        { __typename?: 'categories' }
        & Pick<Categories, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type GetShopIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetShopIdsQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'id'>
  )> }
);

export type GetShopsQueryVariables = Exact<{
  prefecture_id?: Maybe<IntComparisonExp>;
}>;


export type GetShopsQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'name' | 'id'>
    & { shop_categories: Array<(
      { __typename?: 'shop_categories' }
      & { category: (
        { __typename?: 'categories' }
        & Pick<Categories, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type GetShopsByPrefectureQueryVariables = Exact<{
  prefecture_id?: Maybe<IntComparisonExp>;
  offset?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
}>;


export type GetShopsByPrefectureQuery = (
  { __typename?: 'query_root' }
  & { shops: Array<(
    { __typename?: 'shops' }
    & Pick<Shops, 'id' | 'name'>
    & { shop_categories: Array<(
      { __typename?: 'shop_categories' }
      & { category: (
        { __typename?: 'categories' }
        & Pick<Categories, 'id' | 'name'>
      ) }
    )> }
  )> }
);

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'created_at'>
  )> }
);

export type GetUserIdsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUserIdsQuery = (
  { __typename?: 'query_root' }
  & { users: Array<(
    { __typename?: 'users' }
    & Pick<Users, 'id'>
  )> }
);

export type GetUserByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name'>
  )> }
);

export type GetUserDetailByIdQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
  user_id?: Maybe<StringComparisonExp>;
  user_id1?: Maybe<StringComparisonExp>;
}>;


export type GetUserDetailByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'prefecture_id' | 'img_url' | 'self_pr'>
    & { likes: Array<(
      { __typename?: 'likes' }
      & Pick<Likes, 'shop_id'>
    )>, shop_comments: Array<(
      { __typename?: 'shop_comments' }
      & Pick<ShopComments, 'shop_id' | 'content'>
    )> }
  )> }
);

export type CreateUserMutationVariables = Exact<{
  name: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'mutation_root' }
  & { insert_users_one?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'created_at'>
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteUserMutation = (
  { __typename?: 'mutation_root' }
  & { delete_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'created_at'>
  )> }
);

export type UpdateUserMutationVariables = Exact<{
  id: Scalars['String'];
  name: Scalars['String'];
}>;


export type UpdateUserMutation = (
  { __typename?: 'mutation_root' }
  & { update_users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'created_at'>
  )> }
);


export const GetAreasDocument = gql`
    query GetAreas {
  areas(order_by: {id: asc}) {
    id
    name
  }
}
    `;

/**
 * __useGetAreasQuery__
 *
 * To run a query within a React component, call `useGetAreasQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAreasQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAreasQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAreasQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
      }
export function useGetAreasLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
        }
export type GetAreasQueryHookResult = ReturnType<typeof useGetAreasQuery>;
export type GetAreasLazyQueryHookResult = ReturnType<typeof useGetAreasLazyQuery>;
export type GetAreasQueryResult = ApolloReactCommon.QueryResult<GetAreasQuery, GetAreasQueryVariables>;
export const GetAreasByIdDocument = gql`
    query GetAreasById($id: Int_comparison_exp = {}) {
  areas(where: {id: $id}) {
    id
    name
  }
}
    `;

/**
 * __useGetAreasByIdQuery__
 *
 * To run a query within a React component, call `useGetAreasByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAreasByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAreasByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetAreasByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAreasByIdQuery, GetAreasByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAreasByIdQuery, GetAreasByIdQueryVariables>(GetAreasByIdDocument, options);
      }
export function useGetAreasByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAreasByIdQuery, GetAreasByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAreasByIdQuery, GetAreasByIdQueryVariables>(GetAreasByIdDocument, options);
        }
export type GetAreasByIdQueryHookResult = ReturnType<typeof useGetAreasByIdQuery>;
export type GetAreasByIdLazyQueryHookResult = ReturnType<typeof useGetAreasByIdLazyQuery>;
export type GetAreasByIdQueryResult = ApolloReactCommon.QueryResult<GetAreasByIdQuery, GetAreasByIdQueryVariables>;
export const GetAreasJoinPrefecturesDocument = gql`
    query GetAreasJoinPrefectures {
  areas(order_by: {id: asc}) {
    id
    name
    prefectures(order_by: {id: asc}) {
      area_id
      created_at
      id
      name
    }
  }
}
    `;

/**
 * __useGetAreasJoinPrefecturesQuery__
 *
 * To run a query within a React component, call `useGetAreasJoinPrefecturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAreasJoinPrefecturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAreasJoinPrefecturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAreasJoinPrefecturesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>(GetAreasJoinPrefecturesDocument, options);
      }
export function useGetAreasJoinPrefecturesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>(GetAreasJoinPrefecturesDocument, options);
        }
export type GetAreasJoinPrefecturesQueryHookResult = ReturnType<typeof useGetAreasJoinPrefecturesQuery>;
export type GetAreasJoinPrefecturesLazyQueryHookResult = ReturnType<typeof useGetAreasJoinPrefecturesLazyQuery>;
export type GetAreasJoinPrefecturesQueryResult = ApolloReactCommon.QueryResult<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>;
export const GetCategoriesDocument = gql`
    query GetCategories {
  categories(order_by: {id: asc}) {
    id
    name
  }
}
    `;

/**
 * __useGetCategoriesQuery__
 *
 * To run a query within a React component, call `useGetCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCategoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = ApolloReactCommon.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
export const GetPrefecturesDocument = gql`
    query GetPrefectures {
  prefectures(order_by: {area_id: asc}) {
    id
    name
    area {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPrefecturesQuery__
 *
 * To run a query within a React component, call `useGetPrefecturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrefecturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrefecturesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetPrefecturesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPrefecturesQuery, GetPrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPrefecturesQuery, GetPrefecturesQueryVariables>(GetPrefecturesDocument, options);
      }
export function useGetPrefecturesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPrefecturesQuery, GetPrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPrefecturesQuery, GetPrefecturesQueryVariables>(GetPrefecturesDocument, options);
        }
export type GetPrefecturesQueryHookResult = ReturnType<typeof useGetPrefecturesQuery>;
export type GetPrefecturesLazyQueryHookResult = ReturnType<typeof useGetPrefecturesLazyQuery>;
export type GetPrefecturesQueryResult = ApolloReactCommon.QueryResult<GetPrefecturesQuery, GetPrefecturesQueryVariables>;
export const GetPrefecturesIdFirst5Document = gql`
    query GetPrefecturesIdFirst5 {
  prefectures(limit: 5, order_by: {area_id: asc}) {
    id
  }
}
    `;

/**
 * __useGetPrefecturesIdFirst5Query__
 *
 * To run a query within a React component, call `useGetPrefecturesIdFirst5Query` and pass it any options that fit your needs.
 * When your component renders, `useGetPrefecturesIdFirst5Query` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrefecturesIdFirst5Query({
 *   variables: {
 *   },
 * });
 */
export function useGetPrefecturesIdFirst5Query(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPrefecturesIdFirst5Query, GetPrefecturesIdFirst5QueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPrefecturesIdFirst5Query, GetPrefecturesIdFirst5QueryVariables>(GetPrefecturesIdFirst5Document, options);
      }
export function useGetPrefecturesIdFirst5LazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPrefecturesIdFirst5Query, GetPrefecturesIdFirst5QueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPrefecturesIdFirst5Query, GetPrefecturesIdFirst5QueryVariables>(GetPrefecturesIdFirst5Document, options);
        }
export type GetPrefecturesIdFirst5QueryHookResult = ReturnType<typeof useGetPrefecturesIdFirst5Query>;
export type GetPrefecturesIdFirst5LazyQueryHookResult = ReturnType<typeof useGetPrefecturesIdFirst5LazyQuery>;
export type GetPrefecturesIdFirst5QueryResult = ApolloReactCommon.QueryResult<GetPrefecturesIdFirst5Query, GetPrefecturesIdFirst5QueryVariables>;
export const GetPrefecturesByIdDocument = gql`
    query GetPrefecturesById($id: Int_comparison_exp = {}) {
  prefectures(where: {id: $id}) {
    id
    name
    area {
      id
      name
    }
  }
}
    `;

/**
 * __useGetPrefecturesByIdQuery__
 *
 * To run a query within a React component, call `useGetPrefecturesByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrefecturesByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrefecturesByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetPrefecturesByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>(GetPrefecturesByIdDocument, options);
      }
export function useGetPrefecturesByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>(GetPrefecturesByIdDocument, options);
        }
export type GetPrefecturesByIdQueryHookResult = ReturnType<typeof useGetPrefecturesByIdQuery>;
export type GetPrefecturesByIdLazyQueryHookResult = ReturnType<typeof useGetPrefecturesByIdLazyQuery>;
export type GetPrefecturesByIdQueryResult = ApolloReactCommon.QueryResult<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>;
export const GetPrefecturesByAreaIdDocument = gql`
    query GetPrefecturesByAreaId($area_id: Int_comparison_exp = {}) {
  prefectures(where: {area_id: $area_id}) {
    id
    name
    area_id
  }
}
    `;

/**
 * __useGetPrefecturesByAreaIdQuery__
 *
 * To run a query within a React component, call `useGetPrefecturesByAreaIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPrefecturesByAreaIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPrefecturesByAreaIdQuery({
 *   variables: {
 *      area_id: // value for 'area_id'
 *   },
 * });
 */
export function useGetPrefecturesByAreaIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>(GetPrefecturesByAreaIdDocument, options);
      }
export function useGetPrefecturesByAreaIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>(GetPrefecturesByAreaIdDocument, options);
        }
export type GetPrefecturesByAreaIdQueryHookResult = ReturnType<typeof useGetPrefecturesByAreaIdQuery>;
export type GetPrefecturesByAreaIdLazyQueryHookResult = ReturnType<typeof useGetPrefecturesByAreaIdLazyQuery>;
export type GetPrefecturesByAreaIdQueryResult = ApolloReactCommon.QueryResult<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>;
export const GetShopsDetailByIdDocument = gql`
    query GetShopsDetailById($id: uuid = "") {
  shops_by_pk(id: $id) {
    description
    id
    name
    prefecture_id
    shop_urls(where: {shop_id: {_eq: $id}}) {
      url
    }
    shop_comments(where: {shop_id: {_eq: $id}}, offset: 10) {
      content
      user {
        id
        name
        prefecture_id
      }
    }
    likes_aggregate {
      aggregate {
        count
      }
    }
    shop_categories(where: {shop_id: {_eq: $id}}) {
      category {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetShopsDetailByIdQuery__
 *
 * To run a query within a React component, call `useGetShopsDetailByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopsDetailByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopsDetailByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetShopsDetailByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShopsDetailByIdQuery, GetShopsDetailByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShopsDetailByIdQuery, GetShopsDetailByIdQueryVariables>(GetShopsDetailByIdDocument, options);
      }
export function useGetShopsDetailByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShopsDetailByIdQuery, GetShopsDetailByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShopsDetailByIdQuery, GetShopsDetailByIdQueryVariables>(GetShopsDetailByIdDocument, options);
        }
export type GetShopsDetailByIdQueryHookResult = ReturnType<typeof useGetShopsDetailByIdQuery>;
export type GetShopsDetailByIdLazyQueryHookResult = ReturnType<typeof useGetShopsDetailByIdLazyQuery>;
export type GetShopsDetailByIdQueryResult = ApolloReactCommon.QueryResult<GetShopsDetailByIdQuery, GetShopsDetailByIdQueryVariables>;
export const GetShopIdsDocument = gql`
    query GetShopIds {
  shops(limit: 5, order_by: {created_at: desc}) {
    id
  }
}
    `;

/**
 * __useGetShopIdsQuery__
 *
 * To run a query within a React component, call `useGetShopIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetShopIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShopIdsQuery, GetShopIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShopIdsQuery, GetShopIdsQueryVariables>(GetShopIdsDocument, options);
      }
export function useGetShopIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShopIdsQuery, GetShopIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShopIdsQuery, GetShopIdsQueryVariables>(GetShopIdsDocument, options);
        }
export type GetShopIdsQueryHookResult = ReturnType<typeof useGetShopIdsQuery>;
export type GetShopIdsLazyQueryHookResult = ReturnType<typeof useGetShopIdsLazyQuery>;
export type GetShopIdsQueryResult = ApolloReactCommon.QueryResult<GetShopIdsQuery, GetShopIdsQueryVariables>;
export const GetShopsDocument = gql`
    query GetShops($prefecture_id: Int_comparison_exp = {}) {
  shops(where: {prefecture_id: $prefecture_id}) {
    name
    id
    shop_categories {
      category {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetShopsQuery__
 *
 * To run a query within a React component, call `useGetShopsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopsQuery({
 *   variables: {
 *      prefecture_id: // value for 'prefecture_id'
 *   },
 * });
 */
export function useGetShopsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShopsQuery, GetShopsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShopsQuery, GetShopsQueryVariables>(GetShopsDocument, options);
      }
export function useGetShopsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShopsQuery, GetShopsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShopsQuery, GetShopsQueryVariables>(GetShopsDocument, options);
        }
export type GetShopsQueryHookResult = ReturnType<typeof useGetShopsQuery>;
export type GetShopsLazyQueryHookResult = ReturnType<typeof useGetShopsLazyQuery>;
export type GetShopsQueryResult = ApolloReactCommon.QueryResult<GetShopsQuery, GetShopsQueryVariables>;
export const GetShopsByPrefectureDocument = gql`
    query GetShopsByPrefecture($prefecture_id: Int_comparison_exp = {}, $offset: Int = 0, $limit: Int = 0) {
  shops(where: {prefecture_id: $prefecture_id}, offset: $offset, limit: $limit) {
    id
    name
    shop_categories {
      category {
        id
        name
      }
    }
  }
}
    `;

/**
 * __useGetShopsByPrefectureQuery__
 *
 * To run a query within a React component, call `useGetShopsByPrefectureQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetShopsByPrefectureQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetShopsByPrefectureQuery({
 *   variables: {
 *      prefecture_id: // value for 'prefecture_id'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useGetShopsByPrefectureQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetShopsByPrefectureQuery, GetShopsByPrefectureQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetShopsByPrefectureQuery, GetShopsByPrefectureQueryVariables>(GetShopsByPrefectureDocument, options);
      }
export function useGetShopsByPrefectureLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetShopsByPrefectureQuery, GetShopsByPrefectureQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetShopsByPrefectureQuery, GetShopsByPrefectureQueryVariables>(GetShopsByPrefectureDocument, options);
        }
export type GetShopsByPrefectureQueryHookResult = ReturnType<typeof useGetShopsByPrefectureQuery>;
export type GetShopsByPrefectureLazyQueryHookResult = ReturnType<typeof useGetShopsByPrefectureLazyQuery>;
export type GetShopsByPrefectureQueryResult = ApolloReactCommon.QueryResult<GetShopsByPrefectureQuery, GetShopsByPrefectureQueryVariables>;
export const GetUsersDocument = gql`
    query GetUsers {
  users(order_by: {created_at: desc}) {
    id
    name
    created_at
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = ApolloReactCommon.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserIdsDocument = gql`
    query GetUserIds {
  users(order_by: {created_at: desc}) {
    id
  }
}
    `;

/**
 * __useGetUserIdsQuery__
 *
 * To run a query within a React component, call `useGetUserIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserIdsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUserIdsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserIdsQuery, GetUserIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(GetUserIdsDocument, options);
      }
export function useGetUserIdsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserIdsQuery, GetUserIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(GetUserIdsDocument, options);
        }
export type GetUserIdsQueryHookResult = ReturnType<typeof useGetUserIdsQuery>;
export type GetUserIdsLazyQueryHookResult = ReturnType<typeof useGetUserIdsLazyQuery>;
export type GetUserIdsQueryResult = ApolloReactCommon.QueryResult<GetUserIdsQuery, GetUserIdsQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String = "") {
  users_by_pk(id: $id) {
    id
    name
  }
}
    `;

/**
 * __useGetUserByIdQuery__
 *
 * To run a query within a React component, call `useGetUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetUserByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = ApolloReactCommon.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserDetailByIdDocument = gql`
    query GetUserDetailById($id: String = "", $user_id: String_comparison_exp = {}, $user_id1: String_comparison_exp = {}) {
  users_by_pk(id: $id) {
    id
    name
    prefecture_id
    img_url
    self_pr
    likes(where: {user_id: $user_id1}) {
      shop_id
    }
    shop_comments(where: {user_id: $user_id}) {
      shop_id
      content
    }
  }
}
    `;

/**
 * __useGetUserDetailByIdQuery__
 *
 * To run a query within a React component, call `useGetUserDetailByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserDetailByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserDetailByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *      user_id: // value for 'user_id'
 *      user_id1: // value for 'user_id1'
 *   },
 * });
 */
export function useGetUserDetailByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<GetUserDetailByIdQuery, GetUserDetailByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<GetUserDetailByIdQuery, GetUserDetailByIdQueryVariables>(GetUserDetailByIdDocument, options);
      }
export function useGetUserDetailByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetUserDetailByIdQuery, GetUserDetailByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<GetUserDetailByIdQuery, GetUserDetailByIdQueryVariables>(GetUserDetailByIdDocument, options);
        }
export type GetUserDetailByIdQueryHookResult = ReturnType<typeof useGetUserDetailByIdQuery>;
export type GetUserDetailByIdLazyQueryHookResult = ReturnType<typeof useGetUserDetailByIdLazyQuery>;
export type GetUserDetailByIdQueryResult = ApolloReactCommon.QueryResult<GetUserDetailByIdQuery, GetUserDetailByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!) {
  insert_users_one(object: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export type CreateUserMutationFn = ApolloReactCommon.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = ApolloReactCommon.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  delete_users_by_pk(id: $id) {
    id
    name
    created_at
  }
}
    `;
export type DeleteUserMutationFn = ApolloReactCommon.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

/**
 * __useDeleteUserMutation__
 *
 * To run a mutation, you first call `useDeleteUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteUserMutation, { data, loading, error }] = useDeleteUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = ApolloReactCommon.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = ApolloReactCommon.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $name: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export type UpdateUserMutationFn = ApolloReactCommon.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      id: // value for 'id'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = ApolloReactCommon.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = ApolloReactCommon.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;