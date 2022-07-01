import { API } from 'aws-amplify';
import { GraphQLResult, GRAPHQL_AUTH_MODE } from '@aws-amplify/api-graphql';
import * as ApiTypes from 'src/API';
import * as mutations from 'graphql/mutations';
import * as queries from 'graphql/queries';

export type GraphQLRequest<P, R> = (parameters: P) => Promise<GraphQLResult<R>>;

const graphqlRequest = async <T>(
  operation: string,
  parameters: { [key: string]: any }
) =>
  API.graphql({
    query: operation,
    variables: parameters,
    authMode: GRAPHQL_AUTH_MODE.API_KEY,
  }) as GraphQLResult<T>;

export const getResponseAmplifyQuery: GraphQLRequest<
  ApiTypes.ApiInput,
  ApiTypes.ApiResponse
> = (params) => graphqlRequest(queries.getDataAmplify, params);

export const postDataAmplifyQuery: GraphQLRequest<
  ApiTypes.ApiInput,
  ApiTypes.ApiResponse
> = (params) => graphqlRequest(mutations.postDataAmplify, params);
