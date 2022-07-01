import React, { ReactNode } from 'react';

type HooksContextData = {
  state?: boolean;
  setState(input: boolean): void;
};

export const HooksContext = React.createContext({} as HooksContextData);

export interface HooksProviderProps {
  children: ReactNode;
}

export const HooksProvider: React.FC<HooksProviderProps> = ({ children }) => {
  const [state, setState] = React.useState(false);

  //shared context logic

  return (
    <HooksContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </HooksContext.Provider>
  );
};

export const useHooks = () => {
  const context = React.useContext(HooksContext);

  return context;
};
