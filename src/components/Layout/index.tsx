import { FC, PropsWithChildren } from 'react';
import { Box } from '@chakra-ui/react';

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Box width="100vw" height="100vh" overflowX="hidden">
      {children}
    </Box>
  );
};
