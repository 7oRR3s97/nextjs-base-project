import React from 'react';

interface Props {
  symbol: string;
  label?: string;
}

const Emoji: React.FC<Props> = ({ label, symbol }) => {
  return (
    <span
      className="emoji"
      role="img"
      aria-label={label || ''}
      aria-hidden={label ? 'false' : 'true'}
    >
      {symbol}
    </span>
  );
};

export default Emoji;
