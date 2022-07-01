import { useQuery } from 'react-query';
import { getResponseAmplifyQuery } from 'helpers/amplify/amplifyAPI';
import * as ApiTypes from 'src/API';
import { api } from 'src/services/api';
import { FetchDataResponse } from './types';

export const getAmplifyData = async (input: ApiTypes.ApiInput) => {
  const response = await getResponseAmplifyQuery({ input });
  return response?.data?.queryTransactions;
};

export const fetchData = async () => {
  const url = 'api/teste';
  const { data: dataResponse } = await api.get<FetchDataResponse>(url);
  //treat data
  return dataResponse;
};

export const useGetData = (input: any) => {
  const getDataAmplify = useQuery<
    ApiTypes.ApiResponse | undefined,
    ApiTypes.BaseResponse | undefined
  >(['getTransactions', input.pageNumber], () => getAmplifyData(input), {
    keepPreviousData: true,
  });

  const { data: dataAxios, isLoading: dataAxiosLoading } = useQuery(
    'getDataAxios',
    () => {
      return fetchData();
    }
  );

  return {
    getDataAmplify,
    dataAxios,
    dataAxiosLoading,
  };
};
