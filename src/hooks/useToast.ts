import { ToastId, useToast as chakraUseToast } from '@chakra-ui/react';

import { IToastProps } from '../types/toast.types';

type IUseToastResponse = (data: IToastProps) => ToastId;

export const useToast = (): IUseToastResponse => {
  const toast = chakraUseToast();

  return ({ title, description, status }: IToastProps) =>
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
      position: 'top-right',
    });
};
