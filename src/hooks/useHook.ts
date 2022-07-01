import React from 'react';
import { useRouter } from 'next/router';
import { usePostData } from './mutations/usePostDataAmplifyAxios';

export interface LoginData {
  email: string | null;
  password: string | null;
}

export interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

export const useAuthentication = () => {
  const router = useRouter();

  const { postDataAmplify } = usePostData();

  const [state, setState] = React.useState(false);

  React.useEffect(() => {
    if (router) {
      //do something
    }
  }, [router]);

  return {
    state,
    setState,
  };
};
