import { useMutation, useQuery } from 'react-query';
import { postDataAmplifyQuery } from 'helpers/amplify/amplifyAPI';
import * as ApiTypes from 'src/API';
import { api } from 'src/services/api';
import { PostDataResponse } from './types';

export const postAmplifyData = async (input: ApiTypes.ApiInput) => {
  const response = await postDataAmplifyQuery({ input });
  return response?.data?.queryTransactions;
};

export const fetchData = async () => {
  const url = 'api/teste';
  const { data: dataResponse } = await api.get<PostDataResponse>(url);
  //treat data
  return dataResponse;
};

export const usePostData = () => {
  const postDataAmplify = useMutation<
    ApiTypes.ApiResponse | undefined,
    ApiTypes.BaseResponse | undefined,
    ApiTypes.ApiInput
  >((input: ApiTypes.ApiInput) => postAmplifyData(input), {
    mutationKey: 'createDeposit',
    onSuccess: () => {
      //success treat
    },
    onError: () => {
      //error treat
    },
  });

  const { data: dataAxios, isLoading: dataAxiosLoading } = useQuery(
    'getDataAxios',
    () => {
      return fetchData();
    }
  );

  return {
    postDataAmplify,
    dataAxios,
    dataAxiosLoading,
  };
};
