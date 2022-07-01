import { useQuery } from '@hooks/trpc';

export const useQueryZipCode = (zipcode: string) => {
  return useQuery(['zipcode.get', { zip: zipcode }], {
    enabled: !!zipcode,
    staleTime: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
};
