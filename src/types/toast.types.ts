import { AlertStatus } from '@chakra-ui/react';

export interface IToastProps {
  title: string;
  description?: string | undefined;
  status: AlertStatus;
}
