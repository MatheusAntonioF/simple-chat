import { FC, PropsWithChildren } from 'react';
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from '@chakra-ui/react';
import { Link as ReactLink } from 'react-router-dom';

type ILinkProps = ChakraLinkProps &
  PropsWithChildren & {
    to: string;
  };

export const Link: FC<ILinkProps> = ({ children, ...rest }) => {
  return (
    <ChakraLink as={ReactLink} {...rest}>
      {children}
    </ChakraLink>
  );
};
