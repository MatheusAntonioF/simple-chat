import { FC, PropsWithChildren } from 'react';

import { Navbar } from './Navbar';

export const PrivateLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
