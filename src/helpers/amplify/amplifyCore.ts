import awsConfig from 'src/aws-exports';
import { Amplify } from 'aws-amplify';

export const setupAmplify = () => {
  Amplify.configure({ ...awsConfig, ssr: true });
};
