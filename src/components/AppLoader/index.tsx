import React from 'react';
import dynamic from 'next/dynamic';
import { m } from 'framer-motion';

import { Container, SVGContainer } from './styles';

const LazyAnimation = dynamic(
  () => import('components/common-ui/Animations/domAnimation')
);

const AppLoader: React.FC = () => {
  const icon = {
    hidden: {
      height: '0vw',
      viewBox: '0 0 32 31.7',
    },
    visible: {
      viewBox: '0 0 111 31.7',
      height: '20vw',
      transition: {
        opacity: {
          delay: 2,
          duration: 3.5,
        },
      },
    },
  };

  return (
    <Container>
      <SVGContainer>
        <LazyAnimation>
          <m.svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={icon}
          >
            <path
              d="M52.4271 24.5395V30.2192H50.7772C47.8778 30.2192 45.9455 29.2119 45.056 27.2381C43.4872 29.3726 41.1507 30.702 38.292 30.702C32.6556 30.702 28.3887 26.0702 28.3887 19.9473C28.3887 13.8244 32.6556 9.20452 38.292 9.20452C39.4609 9.19268 40.6188 9.43096 41.6881 9.90339C42.7574 10.3758 43.7135 11.0715 44.4921 11.9438V9.6883H50.3703V22.8906C50.3703 23.9375 50.9747 24.5422 52.0211 24.5422L52.4271 24.5395ZM44.4958 19.9473C44.4958 17.0474 42.3624 14.8843 39.4639 14.8843C36.6033 14.8843 34.4716 17.0474 34.4716 19.9473C34.4716 22.8472 36.6051 25.0251 39.4639 25.0251C42.3624 25.0223 44.4958 22.8472 44.4958 19.9473Z"
              fill="#3D4ED7"
            />
            <path
              d="M78.2195 24.5385V30.2183H76.5687C73.6702 30.2183 71.737 29.211 70.8474 27.2381C69.2787 29.3726 66.9413 30.7021 64.0834 30.7021C58.4471 30.7021 54.1792 26.0693 54.1792 19.9473C54.1792 13.8253 58.4471 9.20453 64.0834 9.20453C65.2523 9.19257 66.4103 9.4308 67.4796 9.90323C68.549 10.3757 69.505 11.0714 70.2836 11.9438V9.68738H76.1617V22.8896C76.1617 23.9366 76.7652 24.5404 77.8116 24.5404L78.2195 24.5385ZM70.2836 19.9473C70.2836 17.0465 68.1492 14.8843 65.2507 14.8843C62.3901 14.8843 60.2585 17.0465 60.2585 19.9473C60.2585 22.8481 62.392 25.0251 65.2507 25.0251C68.1538 25.0223 70.2882 22.8472 70.2882 19.9473H70.2836Z"
              fill="#3D4ED7"
            />
            <path
              d="M6.73039 9.68848H0.520996V30.2221H6.73039V9.68848Z"
              fill="#3D4ED7"
            />
            <path
              d="M3.62653 7.25662C5.62941 7.25662 7.25306 5.63217 7.25306 3.62831C7.25306 1.62445 5.62941 0 3.62653 0C1.62365 0 0 1.62445 0 3.62831C0 5.63217 1.62365 7.25662 3.62653 7.25662Z"
              fill="#3D4ED7"
            />
            <path
              d="M19.0866 17.1492C18.533 16.9895 18.0033 16.838 17.4958 16.6746C17.1645 16.5685 16.154 16.2444 16.154 15.4486C16.154 14.8679 16.4844 14.1764 18.0587 14.1764C19.2131 14.1764 20.134 14.7451 20.8012 15.8677L25.9992 13.5292C25.2314 12.3234 24.3982 11.2571 23.1589 10.5056C20.3536 8.80498 16.0249 8.77082 13.0876 10.4262C11.5946 11.2682 9.81455 12.8968 9.81455 15.8733C9.81455 17.7779 10.562 19.184 12.1667 20.2983C13.6007 21.2945 15.4334 21.8826 17.242 22.4513C17.7726 22.6184 18.2727 22.7763 18.7609 22.9425C19.6292 23.2416 20.0694 23.6737 20.0694 24.2267C20.0694 24.8997 19.6809 25.7039 17.8317 25.7039C16.1707 25.7039 15.0107 24.9782 14.3851 23.5463L9.00342 26.2569C10.5528 29.2454 13.4577 30.7013 17.8723 30.7013C20.2512 30.7013 22.3321 30.1474 24.0549 29.0451C26.5003 27.4866 27.0152 24.2922 26.2594 21.9417C25.2988 18.9476 22.0146 17.9921 19.0866 17.1492Z"
              fill="#3D4ED7"
            />
            <path
              d="M87.4445 23.3706C86.5762 22.4871 86.136 21.3395 86.136 19.9547C86.136 18.5698 86.5762 17.4241 87.4445 16.5387C88.3128 15.6533 89.4137 15.2028 90.7139 15.2028C92.4081 15.2028 93.6954 15.8491 94.5453 17.124L99.8125 14.0774C98.926 12.6461 97.695 11.4599 96.2321 10.6272C94.5988 9.68277 92.757 9.20361 90.7564 9.20361C87.6743 9.20361 85.072 10.2441 83.0216 12.2946C80.9712 14.3451 79.9321 16.9219 79.9321 19.9491C79.9321 22.9764 80.9712 25.5522 83.0216 27.6027C85.072 29.6532 87.6734 30.7011 90.7564 30.7011C92.757 30.7011 94.5988 30.222 96.2321 29.2766C97.7041 28.4375 98.9374 27.2363 99.8153 25.7867L94.5555 22.7493C93.7489 24.0483 92.458 24.7056 90.7111 24.7056C89.4137 24.7066 88.3138 24.2569 87.4445 23.3706Z"
              fill="#3D4ED7"
            />
          </m.svg>
        </LazyAnimation>
      </SVGContainer>
    </Container>
  );
};

export default AppLoader;