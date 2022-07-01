import axios, { AxiosResponse } from 'axios';
import { z } from 'zod';
import { createRouter } from '@server/context';

import { ViaCEPResponse } from './types';

export const zipCodeRouter = createRouter().query('get', {
  input: z.object({
    zip: z
      .string()
      .min(1)
      .regex(/^\d{4,5}-\d{3}$/),
  }),
  resolve: async ({ input }) => {
    const zipcode = input.zip.replace('-', '');

    const { data } = await axios.get<any, AxiosResponse<ViaCEPResponse>>(
      `https://viacep.com.br/ws/${zipcode}/json/`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    return data;
  },
});
