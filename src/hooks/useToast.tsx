import { useToast as chakraUseToast } from '@chakra-ui/react';
import { useCallback } from 'react';

import { IToastProps } from '../types/toast.types';

export const useToast = () => {
  const chakraToast = chakraUseToast();

  const toast = useCallback(
    ({ title, description, status }: IToastProps) => {
      return chakraToast({
        title,
        description,
        status,
        duration: 3000,
        isClosable: true,
        position: 'top-right',
      });
    },
    [chakraToast]
  );

  return toast;
};
