import { NextPageContext } from 'next';

export interface SSRContext extends NextPageContext {
  status?: number;
}

export const getBaseUrl = () => {
  if (typeof window !== 'undefined') return '';
  if (process.env.NEXT_PUBLIC_APP_ENV === 'development')
    return `http://localhost:3000`;
  return `http://vertraimoveis.com`;
};
