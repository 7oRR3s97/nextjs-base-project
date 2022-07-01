import { LazyMotion, domMax } from 'framer-motion';

const LazyAnimation: React.FC = ({ children }) => {
  return <LazyMotion features={domMax}>{children}</LazyMotion>;
};

export default LazyAnimation;
