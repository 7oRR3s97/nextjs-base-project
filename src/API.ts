/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ApiInput = {
  [key: string]: any;
};

export type ApiResponse = {
  [key: string]: any;
};

export type Body = {
  __typename: 'Body';
  error?: string | null;
  message?: string | null;
  success: boolean;
};

export type BaseResponse = {
  __typename: 'BaseResponse';
  body: Body;
  statusCode: number;
};
