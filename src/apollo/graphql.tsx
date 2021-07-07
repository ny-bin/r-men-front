import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
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
  bigint: any;
  timestamp: any;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
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
export type String_Comparison_Exp = {
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
  prefectures_aggregate: Prefectures_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "areas" */
export type AreasPrefecturesArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};


/** columns and relationships of "areas" */
export type AreasPrefectures_AggregateArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};

/** aggregated selection of "areas" */
export type Areas_Aggregate = {
  __typename?: 'areas_aggregate';
  aggregate?: Maybe<Areas_Aggregate_Fields>;
  nodes: Array<Areas>;
};

/** aggregate fields of "areas" */
export type Areas_Aggregate_Fields = {
  __typename?: 'areas_aggregate_fields';
  avg?: Maybe<Areas_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Areas_Max_Fields>;
  min?: Maybe<Areas_Min_Fields>;
  stddev?: Maybe<Areas_Stddev_Fields>;
  stddev_pop?: Maybe<Areas_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Areas_Stddev_Samp_Fields>;
  sum?: Maybe<Areas_Sum_Fields>;
  var_pop?: Maybe<Areas_Var_Pop_Fields>;
  var_samp?: Maybe<Areas_Var_Samp_Fields>;
  variance?: Maybe<Areas_Variance_Fields>;
};


/** aggregate fields of "areas" */
export type Areas_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Areas_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Areas_Avg_Fields = {
  __typename?: 'areas_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "areas". All fields are combined with a logical 'AND'. */
export type Areas_Bool_Exp = {
  _and?: Maybe<Array<Areas_Bool_Exp>>;
  _not?: Maybe<Areas_Bool_Exp>;
  _or?: Maybe<Array<Areas_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  prefectures?: Maybe<Prefectures_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "areas" */
export enum Areas_Constraint {
  /** unique or primary key constraint */
  AreasPkey = 'areas_pkey'
}

/** input type for incrementing numeric columns in table "areas" */
export type Areas_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "areas" */
export type Areas_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  prefectures?: Maybe<Prefectures_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Areas_Max_Fields = {
  __typename?: 'areas_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Areas_Min_Fields = {
  __typename?: 'areas_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "areas" */
export type Areas_Mutation_Response = {
  __typename?: 'areas_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Areas>;
};

/** input type for inserting object relation for remote table "areas" */
export type Areas_Obj_Rel_Insert_Input = {
  data: Areas_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Areas_On_Conflict>;
};

/** on conflict condition type for table "areas" */
export type Areas_On_Conflict = {
  constraint: Areas_Constraint;
  update_columns?: Array<Areas_Update_Column>;
  where?: Maybe<Areas_Bool_Exp>;
};

/** Ordering options when selecting data from "areas". */
export type Areas_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prefectures_aggregate?: Maybe<Prefectures_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: areas */
export type Areas_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "areas" */
export enum Areas_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "areas" */
export type Areas_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Areas_Stddev_Fields = {
  __typename?: 'areas_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Areas_Stddev_Pop_Fields = {
  __typename?: 'areas_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Areas_Stddev_Samp_Fields = {
  __typename?: 'areas_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Areas_Sum_Fields = {
  __typename?: 'areas_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "areas" */
export enum Areas_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Areas_Var_Pop_Fields = {
  __typename?: 'areas_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Areas_Var_Samp_Fields = {
  __typename?: 'areas_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Areas_Variance_Fields = {
  __typename?: 'areas_variance_fields';
  id?: Maybe<Scalars['Float']>;
};


/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
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
  shop_categories: Array<Shop_Categories>;
  /** An aggregate relationship */
  shop_categories_aggregate: Shop_Categories_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_categories: Array<User_Categories>;
  /** An aggregate relationship */
  user_categories_aggregate: User_Categories_Aggregate;
};


/** columns and relationships of "categories" */
export type CategoriesShop_CategoriesArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesShop_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesUser_CategoriesArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


/** columns and relationships of "categories" */
export type CategoriesUser_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};

/** aggregated selection of "categories" */
export type Categories_Aggregate = {
  __typename?: 'categories_aggregate';
  aggregate?: Maybe<Categories_Aggregate_Fields>;
  nodes: Array<Categories>;
};

/** aggregate fields of "categories" */
export type Categories_Aggregate_Fields = {
  __typename?: 'categories_aggregate_fields';
  avg?: Maybe<Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Categories_Max_Fields>;
  min?: Maybe<Categories_Min_Fields>;
  stddev?: Maybe<Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Categories_Sum_Fields>;
  var_pop?: Maybe<Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Categories_Var_Samp_Fields>;
  variance?: Maybe<Categories_Variance_Fields>;
};


/** aggregate fields of "categories" */
export type Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Categories_Avg_Fields = {
  __typename?: 'categories_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "categories". All fields are combined with a logical 'AND'. */
export type Categories_Bool_Exp = {
  _and?: Maybe<Array<Categories_Bool_Exp>>;
  _not?: Maybe<Categories_Bool_Exp>;
  _or?: Maybe<Array<Categories_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  shop_categories?: Maybe<Shop_Categories_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user_categories?: Maybe<User_Categories_Bool_Exp>;
};

/** unique or primary key constraints on table "categories" */
export enum Categories_Constraint {
  /** unique or primary key constraint */
  CategoriesPkey = 'categories_pkey'
}

/** input type for incrementing numeric columns in table "categories" */
export type Categories_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "categories" */
export type Categories_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shop_categories?: Maybe<Shop_Categories_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_categories?: Maybe<User_Categories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Categories_Max_Fields = {
  __typename?: 'categories_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Categories_Min_Fields = {
  __typename?: 'categories_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "categories" */
export type Categories_Mutation_Response = {
  __typename?: 'categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Categories>;
};

/** input type for inserting object relation for remote table "categories" */
export type Categories_Obj_Rel_Insert_Input = {
  data: Categories_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Categories_On_Conflict>;
};

/** on conflict condition type for table "categories" */
export type Categories_On_Conflict = {
  constraint: Categories_Constraint;
  update_columns?: Array<Categories_Update_Column>;
  where?: Maybe<Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "categories". */
export type Categories_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shop_categories_aggregate?: Maybe<Shop_Categories_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_categories_aggregate?: Maybe<User_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: categories */
export type Categories_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "categories" */
export enum Categories_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "categories" */
export type Categories_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Categories_Stddev_Fields = {
  __typename?: 'categories_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Categories_Stddev_Pop_Fields = {
  __typename?: 'categories_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Categories_Stddev_Samp_Fields = {
  __typename?: 'categories_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Categories_Sum_Fields = {
  __typename?: 'categories_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "categories" */
export enum Categories_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Categories_Var_Pop_Fields = {
  __typename?: 'categories_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Categories_Var_Samp_Fields = {
  __typename?: 'categories_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Categories_Variance_Fields = {
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
export type Likes_Aggregate = {
  __typename?: 'likes_aggregate';
  aggregate?: Maybe<Likes_Aggregate_Fields>;
  nodes: Array<Likes>;
};

/** aggregate fields of "likes" */
export type Likes_Aggregate_Fields = {
  __typename?: 'likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Likes_Max_Fields>;
  min?: Maybe<Likes_Min_Fields>;
};


/** aggregate fields of "likes" */
export type Likes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Likes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "likes" */
export type Likes_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Likes_Max_Order_By>;
  min?: Maybe<Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "likes" */
export type Likes_Arr_Rel_Insert_Input = {
  data: Array<Likes_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "likes". All fields are combined with a logical 'AND'. */
export type Likes_Bool_Exp = {
  _and?: Maybe<Array<Likes_Bool_Exp>>;
  _not?: Maybe<Likes_Bool_Exp>;
  _or?: Maybe<Array<Likes_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  shop?: Maybe<Shops_Bool_Exp>;
  shop_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "likes" */
export enum Likes_Constraint {
  /** unique or primary key constraint */
  LikesPkey = 'likes_pkey'
}

/** input type for inserting data into table "likes" */
export type Likes_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  shop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Likes_Max_Fields = {
  __typename?: 'likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "likes" */
export type Likes_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Likes_Min_Fields = {
  __typename?: 'likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "likes" */
export type Likes_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "likes" */
export type Likes_Mutation_Response = {
  __typename?: 'likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Likes>;
};

/** on conflict condition type for table "likes" */
export type Likes_On_Conflict = {
  constraint: Likes_Constraint;
  update_columns?: Array<Likes_Update_Column>;
  where?: Maybe<Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "likes". */
export type Likes_Order_By = {
  created_at?: Maybe<Order_By>;
  shop?: Maybe<Shops_Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: likes */
export type Likes_Pk_Columns_Input = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};

/** select columns of table "likes" */
export enum Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "likes" */
export type Likes_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** update columns of table "likes" */
export enum Likes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "areas" */
  delete_areas?: Maybe<Areas_Mutation_Response>;
  /** delete single row from the table: "areas" */
  delete_areas_by_pk?: Maybe<Areas>;
  /** delete data from the table: "categories" */
  delete_categories?: Maybe<Categories_Mutation_Response>;
  /** delete single row from the table: "categories" */
  delete_categories_by_pk?: Maybe<Categories>;
  /** delete data from the table: "likes" */
  delete_likes?: Maybe<Likes_Mutation_Response>;
  /** delete single row from the table: "likes" */
  delete_likes_by_pk?: Maybe<Likes>;
  /** delete data from the table: "prefectures" */
  delete_prefectures?: Maybe<Prefectures_Mutation_Response>;
  /** delete single row from the table: "prefectures" */
  delete_prefectures_by_pk?: Maybe<Prefectures>;
  /** delete data from the table: "shop_categories" */
  delete_shop_categories?: Maybe<Shop_Categories_Mutation_Response>;
  /** delete single row from the table: "shop_categories" */
  delete_shop_categories_by_pk?: Maybe<Shop_Categories>;
  /** delete data from the table: "shop_comments" */
  delete_shop_comments?: Maybe<Shop_Comments_Mutation_Response>;
  /** delete single row from the table: "shop_comments" */
  delete_shop_comments_by_pk?: Maybe<Shop_Comments>;
  /** delete data from the table: "shop_urls" */
  delete_shop_urls?: Maybe<Shop_Urls_Mutation_Response>;
  /** delete single row from the table: "shop_urls" */
  delete_shop_urls_by_pk?: Maybe<Shop_Urls>;
  /** delete data from the table: "shops" */
  delete_shops?: Maybe<Shops_Mutation_Response>;
  /** delete single row from the table: "shops" */
  delete_shops_by_pk?: Maybe<Shops>;
  /** delete data from the table: "user_categories" */
  delete_user_categories?: Maybe<User_Categories_Mutation_Response>;
  /** delete single row from the table: "user_categories" */
  delete_user_categories_by_pk?: Maybe<User_Categories>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "areas" */
  insert_areas?: Maybe<Areas_Mutation_Response>;
  /** insert a single row into the table: "areas" */
  insert_areas_one?: Maybe<Areas>;
  /** insert data into the table: "categories" */
  insert_categories?: Maybe<Categories_Mutation_Response>;
  /** insert a single row into the table: "categories" */
  insert_categories_one?: Maybe<Categories>;
  /** insert data into the table: "likes" */
  insert_likes?: Maybe<Likes_Mutation_Response>;
  /** insert a single row into the table: "likes" */
  insert_likes_one?: Maybe<Likes>;
  /** insert data into the table: "prefectures" */
  insert_prefectures?: Maybe<Prefectures_Mutation_Response>;
  /** insert a single row into the table: "prefectures" */
  insert_prefectures_one?: Maybe<Prefectures>;
  /** insert data into the table: "shop_categories" */
  insert_shop_categories?: Maybe<Shop_Categories_Mutation_Response>;
  /** insert a single row into the table: "shop_categories" */
  insert_shop_categories_one?: Maybe<Shop_Categories>;
  /** insert data into the table: "shop_comments" */
  insert_shop_comments?: Maybe<Shop_Comments_Mutation_Response>;
  /** insert a single row into the table: "shop_comments" */
  insert_shop_comments_one?: Maybe<Shop_Comments>;
  /** insert data into the table: "shop_urls" */
  insert_shop_urls?: Maybe<Shop_Urls_Mutation_Response>;
  /** insert a single row into the table: "shop_urls" */
  insert_shop_urls_one?: Maybe<Shop_Urls>;
  /** insert data into the table: "shops" */
  insert_shops?: Maybe<Shops_Mutation_Response>;
  /** insert a single row into the table: "shops" */
  insert_shops_one?: Maybe<Shops>;
  /** insert data into the table: "user_categories" */
  insert_user_categories?: Maybe<User_Categories_Mutation_Response>;
  /** insert a single row into the table: "user_categories" */
  insert_user_categories_one?: Maybe<User_Categories>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** update data of the table: "areas" */
  update_areas?: Maybe<Areas_Mutation_Response>;
  /** update single row of the table: "areas" */
  update_areas_by_pk?: Maybe<Areas>;
  /** update data of the table: "categories" */
  update_categories?: Maybe<Categories_Mutation_Response>;
  /** update single row of the table: "categories" */
  update_categories_by_pk?: Maybe<Categories>;
  /** update data of the table: "likes" */
  update_likes?: Maybe<Likes_Mutation_Response>;
  /** update single row of the table: "likes" */
  update_likes_by_pk?: Maybe<Likes>;
  /** update data of the table: "prefectures" */
  update_prefectures?: Maybe<Prefectures_Mutation_Response>;
  /** update single row of the table: "prefectures" */
  update_prefectures_by_pk?: Maybe<Prefectures>;
  /** update data of the table: "shop_categories" */
  update_shop_categories?: Maybe<Shop_Categories_Mutation_Response>;
  /** update single row of the table: "shop_categories" */
  update_shop_categories_by_pk?: Maybe<Shop_Categories>;
  /** update data of the table: "shop_comments" */
  update_shop_comments?: Maybe<Shop_Comments_Mutation_Response>;
  /** update single row of the table: "shop_comments" */
  update_shop_comments_by_pk?: Maybe<Shop_Comments>;
  /** update data of the table: "shop_urls" */
  update_shop_urls?: Maybe<Shop_Urls_Mutation_Response>;
  /** update single row of the table: "shop_urls" */
  update_shop_urls_by_pk?: Maybe<Shop_Urls>;
  /** update data of the table: "shops" */
  update_shops?: Maybe<Shops_Mutation_Response>;
  /** update single row of the table: "shops" */
  update_shops_by_pk?: Maybe<Shops>;
  /** update data of the table: "user_categories" */
  update_user_categories?: Maybe<User_Categories_Mutation_Response>;
  /** update single row of the table: "user_categories" */
  update_user_categories_by_pk?: Maybe<User_Categories>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootDelete_AreasArgs = {
  where: Areas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Areas_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_CategoriesArgs = {
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Categories_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_LikesArgs = {
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Likes_By_PkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PrefecturesArgs = {
  where: Prefectures_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Prefectures_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Shop_CategoriesArgs = {
  where: Shop_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shop_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Shop_CommentsArgs = {
  where: Shop_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shop_Comments_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Shop_UrlsArgs = {
  where: Shop_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shop_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_ShopsArgs = {
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Shops_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_CategoriesArgs = {
  where: User_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Categories_By_PkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootInsert_AreasArgs = {
  objects: Array<Areas_Insert_Input>;
  on_conflict?: Maybe<Areas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Areas_OneArgs = {
  object: Areas_Insert_Input;
  on_conflict?: Maybe<Areas_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CategoriesArgs = {
  objects: Array<Categories_Insert_Input>;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Categories_OneArgs = {
  object: Categories_Insert_Input;
  on_conflict?: Maybe<Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LikesArgs = {
  objects: Array<Likes_Insert_Input>;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Likes_OneArgs = {
  object: Likes_Insert_Input;
  on_conflict?: Maybe<Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PrefecturesArgs = {
  objects: Array<Prefectures_Insert_Input>;
  on_conflict?: Maybe<Prefectures_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Prefectures_OneArgs = {
  object: Prefectures_Insert_Input;
  on_conflict?: Maybe<Prefectures_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_CategoriesArgs = {
  objects: Array<Shop_Categories_Insert_Input>;
  on_conflict?: Maybe<Shop_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_Categories_OneArgs = {
  object: Shop_Categories_Insert_Input;
  on_conflict?: Maybe<Shop_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_CommentsArgs = {
  objects: Array<Shop_Comments_Insert_Input>;
  on_conflict?: Maybe<Shop_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_Comments_OneArgs = {
  object: Shop_Comments_Insert_Input;
  on_conflict?: Maybe<Shop_Comments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_UrlsArgs = {
  objects: Array<Shop_Urls_Insert_Input>;
  on_conflict?: Maybe<Shop_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shop_Urls_OneArgs = {
  object: Shop_Urls_Insert_Input;
  on_conflict?: Maybe<Shop_Urls_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ShopsArgs = {
  objects: Array<Shops_Insert_Input>;
  on_conflict?: Maybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Shops_OneArgs = {
  object: Shops_Insert_Input;
  on_conflict?: Maybe<Shops_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_CategoriesArgs = {
  objects: Array<User_Categories_Insert_Input>;
  on_conflict?: Maybe<User_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Categories_OneArgs = {
  object: User_Categories_Insert_Input;
  on_conflict?: Maybe<User_Categories_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_AreasArgs = {
  _inc?: Maybe<Areas_Inc_Input>;
  _set?: Maybe<Areas_Set_Input>;
  where: Areas_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Areas_By_PkArgs = {
  _inc?: Maybe<Areas_Inc_Input>;
  _set?: Maybe<Areas_Set_Input>;
  pk_columns: Areas_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CategoriesArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  where: Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Categories_By_PkArgs = {
  _inc?: Maybe<Categories_Inc_Input>;
  _set?: Maybe<Categories_Set_Input>;
  pk_columns: Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LikesArgs = {
  _set?: Maybe<Likes_Set_Input>;
  where: Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Likes_By_PkArgs = {
  _set?: Maybe<Likes_Set_Input>;
  pk_columns: Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PrefecturesArgs = {
  _inc?: Maybe<Prefectures_Inc_Input>;
  _set?: Maybe<Prefectures_Set_Input>;
  where: Prefectures_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Prefectures_By_PkArgs = {
  _inc?: Maybe<Prefectures_Inc_Input>;
  _set?: Maybe<Prefectures_Set_Input>;
  pk_columns: Prefectures_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_CategoriesArgs = {
  _inc?: Maybe<Shop_Categories_Inc_Input>;
  _set?: Maybe<Shop_Categories_Set_Input>;
  where: Shop_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_Categories_By_PkArgs = {
  _inc?: Maybe<Shop_Categories_Inc_Input>;
  _set?: Maybe<Shop_Categories_Set_Input>;
  pk_columns: Shop_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_CommentsArgs = {
  _inc?: Maybe<Shop_Comments_Inc_Input>;
  _set?: Maybe<Shop_Comments_Set_Input>;
  where: Shop_Comments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_Comments_By_PkArgs = {
  _inc?: Maybe<Shop_Comments_Inc_Input>;
  _set?: Maybe<Shop_Comments_Set_Input>;
  pk_columns: Shop_Comments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_UrlsArgs = {
  _set?: Maybe<Shop_Urls_Set_Input>;
  where: Shop_Urls_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shop_Urls_By_PkArgs = {
  _set?: Maybe<Shop_Urls_Set_Input>;
  pk_columns: Shop_Urls_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_ShopsArgs = {
  _inc?: Maybe<Shops_Inc_Input>;
  _set?: Maybe<Shops_Set_Input>;
  where: Shops_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Shops_By_PkArgs = {
  _inc?: Maybe<Shops_Inc_Input>;
  _set?: Maybe<Shops_Set_Input>;
  pk_columns: Shops_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_CategoriesArgs = {
  _inc?: Maybe<User_Categories_Inc_Input>;
  _set?: Maybe<User_Categories_Set_Input>;
  where: User_Categories_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Categories_By_PkArgs = {
  _inc?: Maybe<User_Categories_Inc_Input>;
  _set?: Maybe<User_Categories_Set_Input>;
  pk_columns: User_Categories_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
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
  shops_aggregate: Shops_Aggregate;
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
};


/** columns and relationships of "prefectures" */
export type PrefecturesShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


/** columns and relationships of "prefectures" */
export type PrefecturesUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** aggregated selection of "prefectures" */
export type Prefectures_Aggregate = {
  __typename?: 'prefectures_aggregate';
  aggregate?: Maybe<Prefectures_Aggregate_Fields>;
  nodes: Array<Prefectures>;
};

/** aggregate fields of "prefectures" */
export type Prefectures_Aggregate_Fields = {
  __typename?: 'prefectures_aggregate_fields';
  avg?: Maybe<Prefectures_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Prefectures_Max_Fields>;
  min?: Maybe<Prefectures_Min_Fields>;
  stddev?: Maybe<Prefectures_Stddev_Fields>;
  stddev_pop?: Maybe<Prefectures_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Prefectures_Stddev_Samp_Fields>;
  sum?: Maybe<Prefectures_Sum_Fields>;
  var_pop?: Maybe<Prefectures_Var_Pop_Fields>;
  var_samp?: Maybe<Prefectures_Var_Samp_Fields>;
  variance?: Maybe<Prefectures_Variance_Fields>;
};


/** aggregate fields of "prefectures" */
export type Prefectures_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Prefectures_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "prefectures" */
export type Prefectures_Aggregate_Order_By = {
  avg?: Maybe<Prefectures_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Prefectures_Max_Order_By>;
  min?: Maybe<Prefectures_Min_Order_By>;
  stddev?: Maybe<Prefectures_Stddev_Order_By>;
  stddev_pop?: Maybe<Prefectures_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Prefectures_Stddev_Samp_Order_By>;
  sum?: Maybe<Prefectures_Sum_Order_By>;
  var_pop?: Maybe<Prefectures_Var_Pop_Order_By>;
  var_samp?: Maybe<Prefectures_Var_Samp_Order_By>;
  variance?: Maybe<Prefectures_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "prefectures" */
export type Prefectures_Arr_Rel_Insert_Input = {
  data: Array<Prefectures_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Prefectures_On_Conflict>;
};

/** aggregate avg on columns */
export type Prefectures_Avg_Fields = {
  __typename?: 'prefectures_avg_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "prefectures" */
export type Prefectures_Avg_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "prefectures". All fields are combined with a logical 'AND'. */
export type Prefectures_Bool_Exp = {
  _and?: Maybe<Array<Prefectures_Bool_Exp>>;
  _not?: Maybe<Prefectures_Bool_Exp>;
  _or?: Maybe<Array<Prefectures_Bool_Exp>>;
  area?: Maybe<Areas_Bool_Exp>;
  area_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  shops?: Maybe<Shops_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  users?: Maybe<Users_Bool_Exp>;
};

/** unique or primary key constraints on table "prefectures" */
export enum Prefectures_Constraint {
  /** unique or primary key constraint */
  PrefecturesPkey = 'prefectures_pkey'
}

/** input type for incrementing numeric columns in table "prefectures" */
export type Prefectures_Inc_Input = {
  area_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "prefectures" */
export type Prefectures_Insert_Input = {
  area?: Maybe<Areas_Obj_Rel_Insert_Input>;
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  shops?: Maybe<Shops_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  users?: Maybe<Users_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Prefectures_Max_Fields = {
  __typename?: 'prefectures_max_fields';
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "prefectures" */
export type Prefectures_Max_Order_By = {
  area_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Prefectures_Min_Fields = {
  __typename?: 'prefectures_min_fields';
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "prefectures" */
export type Prefectures_Min_Order_By = {
  area_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "prefectures" */
export type Prefectures_Mutation_Response = {
  __typename?: 'prefectures_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Prefectures>;
};

/** input type for inserting object relation for remote table "prefectures" */
export type Prefectures_Obj_Rel_Insert_Input = {
  data: Prefectures_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Prefectures_On_Conflict>;
};

/** on conflict condition type for table "prefectures" */
export type Prefectures_On_Conflict = {
  constraint: Prefectures_Constraint;
  update_columns?: Array<Prefectures_Update_Column>;
  where?: Maybe<Prefectures_Bool_Exp>;
};

/** Ordering options when selecting data from "prefectures". */
export type Prefectures_Order_By = {
  area?: Maybe<Areas_Order_By>;
  area_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  shops_aggregate?: Maybe<Shops_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  users_aggregate?: Maybe<Users_Aggregate_Order_By>;
};

/** primary key columns input for table: prefectures */
export type Prefectures_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "prefectures" */
export enum Prefectures_Select_Column {
  /** column name */
  AreaId = 'area_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "prefectures" */
export type Prefectures_Set_Input = {
  area_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Prefectures_Stddev_Fields = {
  __typename?: 'prefectures_stddev_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "prefectures" */
export type Prefectures_Stddev_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Prefectures_Stddev_Pop_Fields = {
  __typename?: 'prefectures_stddev_pop_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "prefectures" */
export type Prefectures_Stddev_Pop_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Prefectures_Stddev_Samp_Fields = {
  __typename?: 'prefectures_stddev_samp_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "prefectures" */
export type Prefectures_Stddev_Samp_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Prefectures_Sum_Fields = {
  __typename?: 'prefectures_sum_fields';
  area_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "prefectures" */
export type Prefectures_Sum_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "prefectures" */
export enum Prefectures_Update_Column {
  /** column name */
  AreaId = 'area_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Prefectures_Var_Pop_Fields = {
  __typename?: 'prefectures_var_pop_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "prefectures" */
export type Prefectures_Var_Pop_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Prefectures_Var_Samp_Fields = {
  __typename?: 'prefectures_var_samp_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "prefectures" */
export type Prefectures_Var_Samp_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Prefectures_Variance_Fields = {
  __typename?: 'prefectures_variance_fields';
  area_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "prefectures" */
export type Prefectures_Variance_Order_By = {
  area_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "areas" */
  areas: Array<Areas>;
  /** fetch aggregated fields from the table: "areas" */
  areas_aggregate: Areas_Aggregate;
  /** fetch data from the table: "areas" using primary key columns */
  areas_by_pk?: Maybe<Areas>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  prefectures: Array<Prefectures>;
  /** An aggregate relationship */
  prefectures_aggregate: Prefectures_Aggregate;
  /** fetch data from the table: "prefectures" using primary key columns */
  prefectures_by_pk?: Maybe<Prefectures>;
  /** An array relationship */
  shop_categories: Array<Shop_Categories>;
  /** An aggregate relationship */
  shop_categories_aggregate: Shop_Categories_Aggregate;
  /** fetch data from the table: "shop_categories" using primary key columns */
  shop_categories_by_pk?: Maybe<Shop_Categories>;
  /** An array relationship */
  shop_comments: Array<Shop_Comments>;
  /** An aggregate relationship */
  shop_comments_aggregate: Shop_Comments_Aggregate;
  /** fetch data from the table: "shop_comments" using primary key columns */
  shop_comments_by_pk?: Maybe<Shop_Comments>;
  /** An array relationship */
  shop_urls: Array<Shop_Urls>;
  /** An aggregate relationship */
  shop_urls_aggregate: Shop_Urls_Aggregate;
  /** fetch data from the table: "shop_urls" using primary key columns */
  shop_urls_by_pk?: Maybe<Shop_Urls>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  user_categories: Array<User_Categories>;
  /** An aggregate relationship */
  user_categories_aggregate: User_Categories_Aggregate;
  /** fetch data from the table: "user_categories" using primary key columns */
  user_categories_by_pk?: Maybe<User_Categories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAreasArgs = {
  distinct_on?: Maybe<Array<Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Areas_Order_By>>;
  where?: Maybe<Areas_Bool_Exp>;
};


export type Query_RootAreas_AggregateArgs = {
  distinct_on?: Maybe<Array<Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Areas_Order_By>>;
  where?: Maybe<Areas_Bool_Exp>;
};


export type Query_RootAreas_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Query_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Query_RootLikes_By_PkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Query_RootPrefecturesArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};


export type Query_RootPrefectures_AggregateArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};


export type Query_RootPrefectures_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootShop_CategoriesArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


export type Query_RootShop_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


export type Query_RootShop_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootShop_CommentsArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


export type Query_RootShop_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


export type Query_RootShop_Comments_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootShop_UrlsArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};


export type Query_RootShop_Urls_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};


export type Query_RootShop_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Query_RootShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Query_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_CategoriesArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


export type Query_RootUser_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


export type Query_RootUser_Categories_By_PkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};

/** columns and relationships of "shop_categories" */
export type Shop_Categories = {
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
export type Shop_Categories_Aggregate = {
  __typename?: 'shop_categories_aggregate';
  aggregate?: Maybe<Shop_Categories_Aggregate_Fields>;
  nodes: Array<Shop_Categories>;
};

/** aggregate fields of "shop_categories" */
export type Shop_Categories_Aggregate_Fields = {
  __typename?: 'shop_categories_aggregate_fields';
  avg?: Maybe<Shop_Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shop_Categories_Max_Fields>;
  min?: Maybe<Shop_Categories_Min_Fields>;
  stddev?: Maybe<Shop_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<Shop_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shop_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<Shop_Categories_Sum_Fields>;
  var_pop?: Maybe<Shop_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<Shop_Categories_Var_Samp_Fields>;
  variance?: Maybe<Shop_Categories_Variance_Fields>;
};


/** aggregate fields of "shop_categories" */
export type Shop_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shop_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_categories" */
export type Shop_Categories_Aggregate_Order_By = {
  avg?: Maybe<Shop_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Shop_Categories_Max_Order_By>;
  min?: Maybe<Shop_Categories_Min_Order_By>;
  stddev?: Maybe<Shop_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<Shop_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Shop_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<Shop_Categories_Sum_Order_By>;
  var_pop?: Maybe<Shop_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<Shop_Categories_Var_Samp_Order_By>;
  variance?: Maybe<Shop_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shop_categories" */
export type Shop_Categories_Arr_Rel_Insert_Input = {
  data: Array<Shop_Categories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Shop_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type Shop_Categories_Avg_Fields = {
  __typename?: 'shop_categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shop_categories" */
export type Shop_Categories_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shop_categories". All fields are combined with a logical 'AND'. */
export type Shop_Categories_Bool_Exp = {
  _and?: Maybe<Array<Shop_Categories_Bool_Exp>>;
  _not?: Maybe<Shop_Categories_Bool_Exp>;
  _or?: Maybe<Array<Shop_Categories_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  shop?: Maybe<Shops_Bool_Exp>;
  shop_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "shop_categories" */
export enum Shop_Categories_Constraint {
  /** unique or primary key constraint */
  ShopCategoriesPkey = 'shop_categories_pkey'
}

/** input type for incrementing numeric columns in table "shop_categories" */
export type Shop_Categories_Inc_Input = {
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "shop_categories" */
export type Shop_Categories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Shop_Categories_Max_Fields = {
  __typename?: 'shop_categories_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "shop_categories" */
export type Shop_Categories_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Shop_Categories_Min_Fields = {
  __typename?: 'shop_categories_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "shop_categories" */
export type Shop_Categories_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "shop_categories" */
export type Shop_Categories_Mutation_Response = {
  __typename?: 'shop_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shop_Categories>;
};

/** on conflict condition type for table "shop_categories" */
export type Shop_Categories_On_Conflict = {
  constraint: Shop_Categories_Constraint;
  update_columns?: Array<Shop_Categories_Update_Column>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "shop_categories". */
export type Shop_Categories_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop?: Maybe<Shops_Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: shop_categories */
export type Shop_Categories_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "shop_categories" */
export enum Shop_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "shop_categories" */
export type Shop_Categories_Set_Input = {
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Shop_Categories_Stddev_Fields = {
  __typename?: 'shop_categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shop_categories" */
export type Shop_Categories_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shop_Categories_Stddev_Pop_Fields = {
  __typename?: 'shop_categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shop_categories" */
export type Shop_Categories_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shop_Categories_Stddev_Samp_Fields = {
  __typename?: 'shop_categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shop_categories" */
export type Shop_Categories_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Shop_Categories_Sum_Fields = {
  __typename?: 'shop_categories_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "shop_categories" */
export type Shop_Categories_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "shop_categories" */
export enum Shop_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Shop_Categories_Var_Pop_Fields = {
  __typename?: 'shop_categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shop_categories" */
export type Shop_Categories_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shop_Categories_Var_Samp_Fields = {
  __typename?: 'shop_categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shop_categories" */
export type Shop_Categories_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Shop_Categories_Variance_Fields = {
  __typename?: 'shop_categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shop_categories" */
export type Shop_Categories_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "shop_comments" */
export type Shop_Comments = {
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
export type Shop_Comments_Aggregate = {
  __typename?: 'shop_comments_aggregate';
  aggregate?: Maybe<Shop_Comments_Aggregate_Fields>;
  nodes: Array<Shop_Comments>;
};

/** aggregate fields of "shop_comments" */
export type Shop_Comments_Aggregate_Fields = {
  __typename?: 'shop_comments_aggregate_fields';
  avg?: Maybe<Shop_Comments_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shop_Comments_Max_Fields>;
  min?: Maybe<Shop_Comments_Min_Fields>;
  stddev?: Maybe<Shop_Comments_Stddev_Fields>;
  stddev_pop?: Maybe<Shop_Comments_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shop_Comments_Stddev_Samp_Fields>;
  sum?: Maybe<Shop_Comments_Sum_Fields>;
  var_pop?: Maybe<Shop_Comments_Var_Pop_Fields>;
  var_samp?: Maybe<Shop_Comments_Var_Samp_Fields>;
  variance?: Maybe<Shop_Comments_Variance_Fields>;
};


/** aggregate fields of "shop_comments" */
export type Shop_Comments_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shop_Comments_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_comments" */
export type Shop_Comments_Aggregate_Order_By = {
  avg?: Maybe<Shop_Comments_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Shop_Comments_Max_Order_By>;
  min?: Maybe<Shop_Comments_Min_Order_By>;
  stddev?: Maybe<Shop_Comments_Stddev_Order_By>;
  stddev_pop?: Maybe<Shop_Comments_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Shop_Comments_Stddev_Samp_Order_By>;
  sum?: Maybe<Shop_Comments_Sum_Order_By>;
  var_pop?: Maybe<Shop_Comments_Var_Pop_Order_By>;
  var_samp?: Maybe<Shop_Comments_Var_Samp_Order_By>;
  variance?: Maybe<Shop_Comments_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shop_comments" */
export type Shop_Comments_Arr_Rel_Insert_Input = {
  data: Array<Shop_Comments_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Shop_Comments_On_Conflict>;
};

/** aggregate avg on columns */
export type Shop_Comments_Avg_Fields = {
  __typename?: 'shop_comments_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shop_comments" */
export type Shop_Comments_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shop_comments". All fields are combined with a logical 'AND'. */
export type Shop_Comments_Bool_Exp = {
  _and?: Maybe<Array<Shop_Comments_Bool_Exp>>;
  _not?: Maybe<Shop_Comments_Bool_Exp>;
  _or?: Maybe<Array<Shop_Comments_Bool_Exp>>;
  content?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  shop?: Maybe<Shops_Bool_Exp>;
  shop_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shop_comments" */
export enum Shop_Comments_Constraint {
  /** unique or primary key constraint */
  ShopCommentsPkey = 'shop_comments_pkey'
}

/** input type for incrementing numeric columns in table "shop_comments" */
export type Shop_Comments_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "shop_comments" */
export type Shop_Comments_Insert_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Shop_Comments_Max_Fields = {
  __typename?: 'shop_comments_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shop_comments" */
export type Shop_Comments_Max_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Shop_Comments_Min_Fields = {
  __typename?: 'shop_comments_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shop_comments" */
export type Shop_Comments_Min_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "shop_comments" */
export type Shop_Comments_Mutation_Response = {
  __typename?: 'shop_comments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shop_Comments>;
};

/** on conflict condition type for table "shop_comments" */
export type Shop_Comments_On_Conflict = {
  constraint: Shop_Comments_Constraint;
  update_columns?: Array<Shop_Comments_Update_Column>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};

/** Ordering options when selecting data from "shop_comments". */
export type Shop_Comments_Order_By = {
  content?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop?: Maybe<Shops_Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: shop_comments */
export type Shop_Comments_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "shop_comments" */
export enum Shop_Comments_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "shop_comments" */
export type Shop_Comments_Set_Input = {
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['bigint']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Shop_Comments_Stddev_Fields = {
  __typename?: 'shop_comments_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shop_comments" */
export type Shop_Comments_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shop_Comments_Stddev_Pop_Fields = {
  __typename?: 'shop_comments_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shop_comments" */
export type Shop_Comments_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shop_Comments_Stddev_Samp_Fields = {
  __typename?: 'shop_comments_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shop_comments" */
export type Shop_Comments_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Shop_Comments_Sum_Fields = {
  __typename?: 'shop_comments_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "shop_comments" */
export type Shop_Comments_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "shop_comments" */
export enum Shop_Comments_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Shop_Comments_Var_Pop_Fields = {
  __typename?: 'shop_comments_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shop_comments" */
export type Shop_Comments_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shop_Comments_Var_Samp_Fields = {
  __typename?: 'shop_comments_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shop_comments" */
export type Shop_Comments_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Shop_Comments_Variance_Fields = {
  __typename?: 'shop_comments_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shop_comments" */
export type Shop_Comments_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "shop_urls" */
export type Shop_Urls = {
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
export type Shop_Urls_Aggregate = {
  __typename?: 'shop_urls_aggregate';
  aggregate?: Maybe<Shop_Urls_Aggregate_Fields>;
  nodes: Array<Shop_Urls>;
};

/** aggregate fields of "shop_urls" */
export type Shop_Urls_Aggregate_Fields = {
  __typename?: 'shop_urls_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Shop_Urls_Max_Fields>;
  min?: Maybe<Shop_Urls_Min_Fields>;
};


/** aggregate fields of "shop_urls" */
export type Shop_Urls_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shop_Urls_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shop_urls" */
export type Shop_Urls_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Shop_Urls_Max_Order_By>;
  min?: Maybe<Shop_Urls_Min_Order_By>;
};

/** input type for inserting array relation for remote table "shop_urls" */
export type Shop_Urls_Arr_Rel_Insert_Input = {
  data: Array<Shop_Urls_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Shop_Urls_On_Conflict>;
};

/** Boolean expression to filter rows from the table "shop_urls". All fields are combined with a logical 'AND'. */
export type Shop_Urls_Bool_Exp = {
  _and?: Maybe<Array<Shop_Urls_Bool_Exp>>;
  _not?: Maybe<Shop_Urls_Bool_Exp>;
  _or?: Maybe<Array<Shop_Urls_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  shop?: Maybe<Shops_Bool_Exp>;
  shop_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "shop_urls" */
export enum Shop_Urls_Constraint {
  /** unique or primary key constraint */
  ShopUrlsPkey = 'shop_urls_pkey'
}

/** input type for inserting data into table "shop_urls" */
export type Shop_Urls_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop?: Maybe<Shops_Obj_Rel_Insert_Input>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Shop_Urls_Max_Fields = {
  __typename?: 'shop_urls_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "shop_urls" */
export type Shop_Urls_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Shop_Urls_Min_Fields = {
  __typename?: 'shop_urls_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "shop_urls" */
export type Shop_Urls_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "shop_urls" */
export type Shop_Urls_Mutation_Response = {
  __typename?: 'shop_urls_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shop_Urls>;
};

/** on conflict condition type for table "shop_urls" */
export type Shop_Urls_On_Conflict = {
  constraint: Shop_Urls_Constraint;
  update_columns?: Array<Shop_Urls_Update_Column>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};

/** Ordering options when selecting data from "shop_urls". */
export type Shop_Urls_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  shop?: Maybe<Shops_Order_By>;
  shop_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: shop_urls */
export type Shop_Urls_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "shop_urls" */
export enum Shop_Urls_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "shop_urls" */
export type Shop_Urls_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  shop_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** update columns of table "shop_urls" */
export enum Shop_Urls_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  ShopId = 'shop_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
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
  likes_aggregate: Likes_Aggregate;
  name: Scalars['String'];
  phone_number?: Maybe<Scalars['Int']>;
  /** An object relationship */
  prefecture?: Maybe<Prefectures>;
  prefecture_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  shop_categories: Array<Shop_Categories>;
  /** An aggregate relationship */
  shop_categories_aggregate: Shop_Categories_Aggregate;
  /** An array relationship */
  shop_comments: Array<Shop_Comments>;
  /** An aggregate relationship */
  shop_comments_aggregate: Shop_Comments_Aggregate;
  /** An array relationship */
  shop_urls: Array<Shop_Urls>;
  /** An aggregate relationship */
  shop_urls_aggregate: Shop_Urls_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "shops" */
export type ShopsLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_CategoriesArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_CommentsArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_UrlsArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};


/** columns and relationships of "shops" */
export type ShopsShop_Urls_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};

/** aggregated selection of "shops" */
export type Shops_Aggregate = {
  __typename?: 'shops_aggregate';
  aggregate?: Maybe<Shops_Aggregate_Fields>;
  nodes: Array<Shops>;
};

/** aggregate fields of "shops" */
export type Shops_Aggregate_Fields = {
  __typename?: 'shops_aggregate_fields';
  avg?: Maybe<Shops_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Shops_Max_Fields>;
  min?: Maybe<Shops_Min_Fields>;
  stddev?: Maybe<Shops_Stddev_Fields>;
  stddev_pop?: Maybe<Shops_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Shops_Stddev_Samp_Fields>;
  sum?: Maybe<Shops_Sum_Fields>;
  var_pop?: Maybe<Shops_Var_Pop_Fields>;
  var_samp?: Maybe<Shops_Var_Samp_Fields>;
  variance?: Maybe<Shops_Variance_Fields>;
};


/** aggregate fields of "shops" */
export type Shops_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Shops_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "shops" */
export type Shops_Aggregate_Order_By = {
  avg?: Maybe<Shops_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Shops_Max_Order_By>;
  min?: Maybe<Shops_Min_Order_By>;
  stddev?: Maybe<Shops_Stddev_Order_By>;
  stddev_pop?: Maybe<Shops_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Shops_Stddev_Samp_Order_By>;
  sum?: Maybe<Shops_Sum_Order_By>;
  var_pop?: Maybe<Shops_Var_Pop_Order_By>;
  var_samp?: Maybe<Shops_Var_Samp_Order_By>;
  variance?: Maybe<Shops_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "shops" */
export type Shops_Arr_Rel_Insert_Input = {
  data: Array<Shops_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Shops_On_Conflict>;
};

/** aggregate avg on columns */
export type Shops_Avg_Fields = {
  __typename?: 'shops_avg_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "shops" */
export type Shops_Avg_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "shops". All fields are combined with a logical 'AND'. */
export type Shops_Bool_Exp = {
  _and?: Maybe<Array<Shops_Bool_Exp>>;
  _not?: Maybe<Shops_Bool_Exp>;
  _or?: Maybe<Array<Shops_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  description?: Maybe<String_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  likes?: Maybe<Likes_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  phone_number?: Maybe<Int_Comparison_Exp>;
  prefecture?: Maybe<Prefectures_Bool_Exp>;
  prefecture_id?: Maybe<Int_Comparison_Exp>;
  shop_categories?: Maybe<Shop_Categories_Bool_Exp>;
  shop_comments?: Maybe<Shop_Comments_Bool_Exp>;
  shop_urls?: Maybe<Shop_Urls_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "shops" */
export enum Shops_Constraint {
  /** unique or primary key constraint */
  ShopsPkey = 'shops_pkey'
}

/** input type for incrementing numeric columns in table "shops" */
export type Shops_Inc_Input = {
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "shops" */
export type Shops_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  likes?: Maybe<Likes_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture?: Maybe<Prefectures_Obj_Rel_Insert_Input>;
  prefecture_id?: Maybe<Scalars['Int']>;
  shop_categories?: Maybe<Shop_Categories_Arr_Rel_Insert_Input>;
  shop_comments?: Maybe<Shop_Comments_Arr_Rel_Insert_Input>;
  shop_urls?: Maybe<Shop_Urls_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Shops_Max_Fields = {
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
export type Shops_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Shops_Min_Fields = {
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
export type Shops_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "shops" */
export type Shops_Mutation_Response = {
  __typename?: 'shops_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Shops>;
};

/** input type for inserting object relation for remote table "shops" */
export type Shops_Obj_Rel_Insert_Input = {
  data: Shops_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Shops_On_Conflict>;
};

/** on conflict condition type for table "shops" */
export type Shops_On_Conflict = {
  constraint: Shops_Constraint;
  update_columns?: Array<Shops_Update_Column>;
  where?: Maybe<Shops_Bool_Exp>;
};

/** Ordering options when selecting data from "shops". */
export type Shops_Order_By = {
  created_at?: Maybe<Order_By>;
  description?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes_aggregate?: Maybe<Likes_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  phone_number?: Maybe<Order_By>;
  prefecture?: Maybe<Prefectures_Order_By>;
  prefecture_id?: Maybe<Order_By>;
  shop_categories_aggregate?: Maybe<Shop_Categories_Aggregate_Order_By>;
  shop_comments_aggregate?: Maybe<Shop_Comments_Aggregate_Order_By>;
  shop_urls_aggregate?: Maybe<Shop_Urls_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: shops */
export type Shops_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "shops" */
export enum Shops_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PrefectureId = 'prefecture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "shops" */
export type Shops_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Shops_Stddev_Fields = {
  __typename?: 'shops_stddev_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "shops" */
export type Shops_Stddev_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Shops_Stddev_Pop_Fields = {
  __typename?: 'shops_stddev_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "shops" */
export type Shops_Stddev_Pop_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Shops_Stddev_Samp_Fields = {
  __typename?: 'shops_stddev_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "shops" */
export type Shops_Stddev_Samp_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Shops_Sum_Fields = {
  __typename?: 'shops_sum_fields';
  phone_number?: Maybe<Scalars['Int']>;
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "shops" */
export type Shops_Sum_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** update columns of table "shops" */
export enum Shops_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PhoneNumber = 'phone_number',
  /** column name */
  PrefectureId = 'prefecture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Shops_Var_Pop_Fields = {
  __typename?: 'shops_var_pop_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "shops" */
export type Shops_Var_Pop_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Shops_Var_Samp_Fields = {
  __typename?: 'shops_var_samp_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "shops" */
export type Shops_Var_Samp_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Shops_Variance_Fields = {
  __typename?: 'shops_variance_fields';
  phone_number?: Maybe<Scalars['Float']>;
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "shops" */
export type Shops_Variance_Order_By = {
  phone_number?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "areas" */
  areas: Array<Areas>;
  /** fetch aggregated fields from the table: "areas" */
  areas_aggregate: Areas_Aggregate;
  /** fetch data from the table: "areas" using primary key columns */
  areas_by_pk?: Maybe<Areas>;
  /** fetch data from the table: "categories" */
  categories: Array<Categories>;
  /** fetch aggregated fields from the table: "categories" */
  categories_aggregate: Categories_Aggregate;
  /** fetch data from the table: "categories" using primary key columns */
  categories_by_pk?: Maybe<Categories>;
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  /** fetch data from the table: "likes" using primary key columns */
  likes_by_pk?: Maybe<Likes>;
  /** An array relationship */
  prefectures: Array<Prefectures>;
  /** An aggregate relationship */
  prefectures_aggregate: Prefectures_Aggregate;
  /** fetch data from the table: "prefectures" using primary key columns */
  prefectures_by_pk?: Maybe<Prefectures>;
  /** An array relationship */
  shop_categories: Array<Shop_Categories>;
  /** An aggregate relationship */
  shop_categories_aggregate: Shop_Categories_Aggregate;
  /** fetch data from the table: "shop_categories" using primary key columns */
  shop_categories_by_pk?: Maybe<Shop_Categories>;
  /** An array relationship */
  shop_comments: Array<Shop_Comments>;
  /** An aggregate relationship */
  shop_comments_aggregate: Shop_Comments_Aggregate;
  /** fetch data from the table: "shop_comments" using primary key columns */
  shop_comments_by_pk?: Maybe<Shop_Comments>;
  /** An array relationship */
  shop_urls: Array<Shop_Urls>;
  /** An aggregate relationship */
  shop_urls_aggregate: Shop_Urls_Aggregate;
  /** fetch data from the table: "shop_urls" using primary key columns */
  shop_urls_by_pk?: Maybe<Shop_Urls>;
  /** An array relationship */
  shops: Array<Shops>;
  /** An aggregate relationship */
  shops_aggregate: Shops_Aggregate;
  /** fetch data from the table: "shops" using primary key columns */
  shops_by_pk?: Maybe<Shops>;
  /** An array relationship */
  user_categories: Array<User_Categories>;
  /** An aggregate relationship */
  user_categories_aggregate: User_Categories_Aggregate;
  /** fetch data from the table: "user_categories" using primary key columns */
  user_categories_by_pk?: Maybe<User_Categories>;
  /** An array relationship */
  users: Array<Users>;
  /** An aggregate relationship */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAreasArgs = {
  distinct_on?: Maybe<Array<Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Areas_Order_By>>;
  where?: Maybe<Areas_Bool_Exp>;
};


export type Subscription_RootAreas_AggregateArgs = {
  distinct_on?: Maybe<Array<Areas_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Areas_Order_By>>;
  where?: Maybe<Areas_Bool_Exp>;
};


export type Subscription_RootAreas_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCategoriesArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_AggregateArgs = {
  distinct_on?: Maybe<Array<Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Categories_Order_By>>;
  where?: Maybe<Categories_Bool_Exp>;
};


export type Subscription_RootCategories_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


export type Subscription_RootLikes_By_PkArgs = {
  shop_id: Scalars['uuid'];
  user_id: Scalars['String'];
};


export type Subscription_RootPrefecturesArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};


export type Subscription_RootPrefectures_AggregateArgs = {
  distinct_on?: Maybe<Array<Prefectures_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Prefectures_Order_By>>;
  where?: Maybe<Prefectures_Bool_Exp>;
};


export type Subscription_RootPrefectures_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootShop_CategoriesArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


export type Subscription_RootShop_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Categories_Order_By>>;
  where?: Maybe<Shop_Categories_Bool_Exp>;
};


export type Subscription_RootShop_Categories_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootShop_CommentsArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


export type Subscription_RootShop_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


export type Subscription_RootShop_Comments_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootShop_UrlsArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};


export type Subscription_RootShop_Urls_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Urls_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Urls_Order_By>>;
  where?: Maybe<Shop_Urls_Bool_Exp>;
};


export type Subscription_RootShop_Urls_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootShopsArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_AggregateArgs = {
  distinct_on?: Maybe<Array<Shops_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shops_Order_By>>;
  where?: Maybe<Shops_Bool_Exp>;
};


export type Subscription_RootShops_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_CategoriesArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


export type Subscription_RootUser_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


export type Subscription_RootUser_Categories_By_PkArgs = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['String'];
};


/** Boolean expression to compare columns of type "timestamp". All fields are combined with logical 'AND'. */
export type Timestamp_Comparison_Exp = {
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
export type Timestamptz_Comparison_Exp = {
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
export type User_Categories = {
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
export type User_Categories_Aggregate = {
  __typename?: 'user_categories_aggregate';
  aggregate?: Maybe<User_Categories_Aggregate_Fields>;
  nodes: Array<User_Categories>;
};

/** aggregate fields of "user_categories" */
export type User_Categories_Aggregate_Fields = {
  __typename?: 'user_categories_aggregate_fields';
  avg?: Maybe<User_Categories_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Categories_Max_Fields>;
  min?: Maybe<User_Categories_Min_Fields>;
  stddev?: Maybe<User_Categories_Stddev_Fields>;
  stddev_pop?: Maybe<User_Categories_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Categories_Stddev_Samp_Fields>;
  sum?: Maybe<User_Categories_Sum_Fields>;
  var_pop?: Maybe<User_Categories_Var_Pop_Fields>;
  var_samp?: Maybe<User_Categories_Var_Samp_Fields>;
  variance?: Maybe<User_Categories_Variance_Fields>;
};


/** aggregate fields of "user_categories" */
export type User_Categories_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Categories_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_categories" */
export type User_Categories_Aggregate_Order_By = {
  avg?: Maybe<User_Categories_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<User_Categories_Max_Order_By>;
  min?: Maybe<User_Categories_Min_Order_By>;
  stddev?: Maybe<User_Categories_Stddev_Order_By>;
  stddev_pop?: Maybe<User_Categories_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<User_Categories_Stddev_Samp_Order_By>;
  sum?: Maybe<User_Categories_Sum_Order_By>;
  var_pop?: Maybe<User_Categories_Var_Pop_Order_By>;
  var_samp?: Maybe<User_Categories_Var_Samp_Order_By>;
  variance?: Maybe<User_Categories_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "user_categories" */
export type User_Categories_Arr_Rel_Insert_Input = {
  data: Array<User_Categories_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<User_Categories_On_Conflict>;
};

/** aggregate avg on columns */
export type User_Categories_Avg_Fields = {
  __typename?: 'user_categories_avg_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "user_categories" */
export type User_Categories_Avg_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "user_categories". All fields are combined with a logical 'AND'. */
export type User_Categories_Bool_Exp = {
  _and?: Maybe<Array<User_Categories_Bool_Exp>>;
  _not?: Maybe<User_Categories_Bool_Exp>;
  _or?: Maybe<Array<User_Categories_Bool_Exp>>;
  category?: Maybe<Categories_Bool_Exp>;
  category_id?: Maybe<Int_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
  user?: Maybe<Users_Bool_Exp>;
  user_id?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_categories" */
export enum User_Categories_Constraint {
  /** unique or primary key constraint */
  UserCategoriesPkey = 'user_categories_pkey'
}

/** input type for incrementing numeric columns in table "user_categories" */
export type User_Categories_Inc_Input = {
  category_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "user_categories" */
export type User_Categories_Insert_Input = {
  category?: Maybe<Categories_Obj_Rel_Insert_Input>;
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user?: Maybe<Users_Obj_Rel_Insert_Input>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type User_Categories_Max_Fields = {
  __typename?: 'user_categories_max_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "user_categories" */
export type User_Categories_Max_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type User_Categories_Min_Fields = {
  __typename?: 'user_categories_min_fields';
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "user_categories" */
export type User_Categories_Min_Order_By = {
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user_id?: Maybe<Order_By>;
};

/** response of any mutation on the table "user_categories" */
export type User_Categories_Mutation_Response = {
  __typename?: 'user_categories_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Categories>;
};

/** on conflict condition type for table "user_categories" */
export type User_Categories_On_Conflict = {
  constraint: User_Categories_Constraint;
  update_columns?: Array<User_Categories_Update_Column>;
  where?: Maybe<User_Categories_Bool_Exp>;
};

/** Ordering options when selecting data from "user_categories". */
export type User_Categories_Order_By = {
  category?: Maybe<Categories_Order_By>;
  category_id?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
  user?: Maybe<Users_Order_By>;
  user_id?: Maybe<Order_By>;
};

/** primary key columns input for table: user_categories */
export type User_Categories_Pk_Columns_Input = {
  category_id: Scalars['Int'];
  user_id: Scalars['String'];
};

/** select columns of table "user_categories" */
export enum User_Categories_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_categories" */
export type User_Categories_Set_Input = {
  category_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type User_Categories_Stddev_Fields = {
  __typename?: 'user_categories_stddev_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "user_categories" */
export type User_Categories_Stddev_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type User_Categories_Stddev_Pop_Fields = {
  __typename?: 'user_categories_stddev_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "user_categories" */
export type User_Categories_Stddev_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type User_Categories_Stddev_Samp_Fields = {
  __typename?: 'user_categories_stddev_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "user_categories" */
export type User_Categories_Stddev_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type User_Categories_Sum_Fields = {
  __typename?: 'user_categories_sum_fields';
  category_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "user_categories" */
export type User_Categories_Sum_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** update columns of table "user_categories" */
export enum User_Categories_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type User_Categories_Var_Pop_Fields = {
  __typename?: 'user_categories_var_pop_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "user_categories" */
export type User_Categories_Var_Pop_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type User_Categories_Var_Samp_Fields = {
  __typename?: 'user_categories_var_samp_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "user_categories" */
export type User_Categories_Var_Samp_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type User_Categories_Variance_Fields = {
  __typename?: 'user_categories_variance_fields';
  category_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "user_categories" */
export type User_Categories_Variance_Order_By = {
  category_id?: Maybe<Order_By>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['String'];
  /** An array relationship */
  likes: Array<Likes>;
  /** An aggregate relationship */
  likes_aggregate: Likes_Aggregate;
  name: Scalars['String'];
  /** An object relationship */
  prefecture?: Maybe<Prefectures>;
  prefecture_id?: Maybe<Scalars['Int']>;
  /** An array relationship */
  shop_comments: Array<Shop_Comments>;
  /** An aggregate relationship */
  shop_comments_aggregate: Shop_Comments_Aggregate;
  updated_at: Scalars['timestamp'];
  /** An array relationship */
  user_categories: Array<User_Categories>;
  /** An aggregate relationship */
  user_categories_aggregate: User_Categories_Aggregate;
};


/** columns and relationships of "users" */
export type UsersLikesArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersLikes_AggregateArgs = {
  distinct_on?: Maybe<Array<Likes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Likes_Order_By>>;
  where?: Maybe<Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersShop_CommentsArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersShop_Comments_AggregateArgs = {
  distinct_on?: Maybe<Array<Shop_Comments_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Shop_Comments_Order_By>>;
  where?: Maybe<Shop_Comments_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_CategoriesArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersUser_Categories_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Categories_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<User_Categories_Order_By>>;
  where?: Maybe<User_Categories_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Users_Bool_Exp>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Users_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<String_Comparison_Exp>;
  likes?: Maybe<Likes_Bool_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  prefecture?: Maybe<Prefectures_Bool_Exp>;
  prefecture_id?: Maybe<Int_Comparison_Exp>;
  shop_comments?: Maybe<Shop_Comments_Bool_Exp>;
  updated_at?: Maybe<Timestamp_Comparison_Exp>;
  user_categories?: Maybe<User_Categories_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersIdKey = 'users_id_key',
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey'
}

/** input type for incrementing numeric columns in table "users" */
export type Users_Inc_Input = {
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  likes?: Maybe<Likes_Arr_Rel_Insert_Input>;
  name?: Maybe<Scalars['String']>;
  prefecture?: Maybe<Prefectures_Obj_Rel_Insert_Input>;
  prefecture_id?: Maybe<Scalars['Int']>;
  shop_comments?: Maybe<Shop_Comments_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamp']>;
  user_categories?: Maybe<User_Categories_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  prefecture_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  likes_aggregate?: Maybe<Likes_Aggregate_Order_By>;
  name?: Maybe<Order_By>;
  prefecture?: Maybe<Prefectures_Order_By>;
  prefecture_id?: Maybe<Order_By>;
  shop_comments_aggregate?: Maybe<Shop_Comments_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
  user_categories_aggregate?: Maybe<User_Categories_Aggregate_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrefectureId = 'prefecture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  prefecture_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamp']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  prefecture_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  PrefectureId = 'prefecture_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  prefecture_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  prefecture_id?: Maybe<Order_By>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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
  id?: Maybe<Int_Comparison_Exp>;
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

export type GetPrefecturesByIdQueryVariables = Exact<{
  id?: Maybe<Int_Comparison_Exp>;
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
  area_id?: Maybe<Int_Comparison_Exp>;
}>;


export type GetPrefecturesByAreaIdQuery = (
  { __typename?: 'query_root' }
  & { prefectures: Array<(
    { __typename?: 'prefectures' }
    & Pick<Prefectures, 'id' | 'name' | 'area_id'>
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
  id: Scalars['String'];
}>;


export type GetUserByIdQuery = (
  { __typename?: 'query_root' }
  & { users_by_pk?: Maybe<(
    { __typename?: 'users' }
    & Pick<Users, 'id' | 'name' | 'created_at'>
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
export function useGetAreasQuery(baseOptions?: Apollo.QueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
      }
export function useGetAreasLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAreasQuery, GetAreasQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAreasQuery, GetAreasQueryVariables>(GetAreasDocument, options);
        }
export type GetAreasQueryHookResult = ReturnType<typeof useGetAreasQuery>;
export type GetAreasLazyQueryHookResult = ReturnType<typeof useGetAreasLazyQuery>;
export type GetAreasQueryResult = Apollo.QueryResult<GetAreasQuery, GetAreasQueryVariables>;
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
export function useGetAreasByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetAreasByIdQuery, GetAreasByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAreasByIdQuery, GetAreasByIdQueryVariables>(GetAreasByIdDocument, options);
      }
export function useGetAreasByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAreasByIdQuery, GetAreasByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAreasByIdQuery, GetAreasByIdQueryVariables>(GetAreasByIdDocument, options);
        }
export type GetAreasByIdQueryHookResult = ReturnType<typeof useGetAreasByIdQuery>;
export type GetAreasByIdLazyQueryHookResult = ReturnType<typeof useGetAreasByIdLazyQuery>;
export type GetAreasByIdQueryResult = Apollo.QueryResult<GetAreasByIdQuery, GetAreasByIdQueryVariables>;
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
export function useGetAreasJoinPrefecturesQuery(baseOptions?: Apollo.QueryHookOptions<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>(GetAreasJoinPrefecturesDocument, options);
      }
export function useGetAreasJoinPrefecturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>(GetAreasJoinPrefecturesDocument, options);
        }
export type GetAreasJoinPrefecturesQueryHookResult = ReturnType<typeof useGetAreasJoinPrefecturesQuery>;
export type GetAreasJoinPrefecturesLazyQueryHookResult = ReturnType<typeof useGetAreasJoinPrefecturesLazyQuery>;
export type GetAreasJoinPrefecturesQueryResult = Apollo.QueryResult<GetAreasJoinPrefecturesQuery, GetAreasJoinPrefecturesQueryVariables>;
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
export function useGetCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
      }
export function useGetCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCategoriesQuery, GetCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCategoriesQuery, GetCategoriesQueryVariables>(GetCategoriesDocument, options);
        }
export type GetCategoriesQueryHookResult = ReturnType<typeof useGetCategoriesQuery>;
export type GetCategoriesLazyQueryHookResult = ReturnType<typeof useGetCategoriesLazyQuery>;
export type GetCategoriesQueryResult = Apollo.QueryResult<GetCategoriesQuery, GetCategoriesQueryVariables>;
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
export function useGetPrefecturesQuery(baseOptions?: Apollo.QueryHookOptions<GetPrefecturesQuery, GetPrefecturesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrefecturesQuery, GetPrefecturesQueryVariables>(GetPrefecturesDocument, options);
      }
export function useGetPrefecturesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrefecturesQuery, GetPrefecturesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrefecturesQuery, GetPrefecturesQueryVariables>(GetPrefecturesDocument, options);
        }
export type GetPrefecturesQueryHookResult = ReturnType<typeof useGetPrefecturesQuery>;
export type GetPrefecturesLazyQueryHookResult = ReturnType<typeof useGetPrefecturesLazyQuery>;
export type GetPrefecturesQueryResult = Apollo.QueryResult<GetPrefecturesQuery, GetPrefecturesQueryVariables>;
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
export function useGetPrefecturesByIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>(GetPrefecturesByIdDocument, options);
      }
export function useGetPrefecturesByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>(GetPrefecturesByIdDocument, options);
        }
export type GetPrefecturesByIdQueryHookResult = ReturnType<typeof useGetPrefecturesByIdQuery>;
export type GetPrefecturesByIdLazyQueryHookResult = ReturnType<typeof useGetPrefecturesByIdLazyQuery>;
export type GetPrefecturesByIdQueryResult = Apollo.QueryResult<GetPrefecturesByIdQuery, GetPrefecturesByIdQueryVariables>;
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
export function useGetPrefecturesByAreaIdQuery(baseOptions?: Apollo.QueryHookOptions<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>(GetPrefecturesByAreaIdDocument, options);
      }
export function useGetPrefecturesByAreaIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>(GetPrefecturesByAreaIdDocument, options);
        }
export type GetPrefecturesByAreaIdQueryHookResult = ReturnType<typeof useGetPrefecturesByAreaIdQuery>;
export type GetPrefecturesByAreaIdLazyQueryHookResult = ReturnType<typeof useGetPrefecturesByAreaIdLazyQuery>;
export type GetPrefecturesByAreaIdQueryResult = Apollo.QueryResult<GetPrefecturesByAreaIdQuery, GetPrefecturesByAreaIdQueryVariables>;
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
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
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
export function useGetUserIdsQuery(baseOptions?: Apollo.QueryHookOptions<GetUserIdsQuery, GetUserIdsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(GetUserIdsDocument, options);
      }
export function useGetUserIdsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserIdsQuery, GetUserIdsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserIdsQuery, GetUserIdsQueryVariables>(GetUserIdsDocument, options);
        }
export type GetUserIdsQueryHookResult = ReturnType<typeof useGetUserIdsQuery>;
export type GetUserIdsLazyQueryHookResult = ReturnType<typeof useGetUserIdsLazyQuery>;
export type GetUserIdsQueryResult = Apollo.QueryResult<GetUserIdsQuery, GetUserIdsQueryVariables>;
export const GetUserByIdDocument = gql`
    query GetUserById($id: String!) {
  users_by_pk(id: $id) {
    id
    name
    created_at
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
export function useGetUserByIdQuery(baseOptions: Apollo.QueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
      }
export function useGetUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserByIdQuery, GetUserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserByIdQuery, GetUserByIdQueryVariables>(GetUserByIdDocument, options);
        }
export type GetUserByIdQueryHookResult = ReturnType<typeof useGetUserByIdQuery>;
export type GetUserByIdLazyQueryHookResult = ReturnType<typeof useGetUserByIdLazyQuery>;
export type GetUserByIdQueryResult = Apollo.QueryResult<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($name: String!) {
  insert_users_one(object: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

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
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const DeleteUserDocument = gql`
    mutation DeleteUser($id: String!) {
  delete_users_by_pk(id: $id) {
    id
    name
    created_at
  }
}
    `;
export type DeleteUserMutationFn = Apollo.MutationFunction<DeleteUserMutation, DeleteUserMutationVariables>;

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
export function useDeleteUserMutation(baseOptions?: Apollo.MutationHookOptions<DeleteUserMutation, DeleteUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteUserMutation, DeleteUserMutationVariables>(DeleteUserDocument, options);
      }
export type DeleteUserMutationHookResult = ReturnType<typeof useDeleteUserMutation>;
export type DeleteUserMutationResult = Apollo.MutationResult<DeleteUserMutation>;
export type DeleteUserMutationOptions = Apollo.BaseMutationOptions<DeleteUserMutation, DeleteUserMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($id: String!, $name: String!) {
  update_users_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
    id
    name
    created_at
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

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
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;