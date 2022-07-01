import { LazyMotion, domAnimation } from 'framer-motion';

const LazyAnimation: React.FC = ({ children }) => {
  return <LazyMotion features={domAnimation}>{children}</LazyMotion>;
};

export default LazyAnimation;
