import React, { createContext, FC, useState, ReactNode } from 'react';
import { TLink } from '../../../../types';

type TRouteContext = {
  activeMainLink: TLink;
  setActiveMainLink: (link: TLink) => void;
};

const initRouteContext: TRouteContext = {
  activeMainLink: {
    title: '',
    url: '',
  },
  setActiveMainLink: () => {},
};

const RouteContext = createContext<TRouteContext>(initRouteContext);

type TRouteContextProviderProps = { children: ReactNode };

export const RouteContextProvider: FC<TRouteContextProviderProps> = ({
  children,
}) => {
  const [activeMainLink, setActiveMainLink] = useState(
    initRouteContext.activeMainLink,
  );

  return (
    <RouteContext.Provider value={{ activeMainLink, setActiveMainLink }}>
      {children}
    </RouteContext.Provider>
  );
};

export default RouteContext;
