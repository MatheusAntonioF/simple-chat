import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from '@chakra-ui/react';

import { FieldError } from 'react-hook-form';

interface IInputProps extends InputProps {
  label: string;
  error?: FieldError | null;
}

const Input: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { label, error, isDisabled, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error?.message} isDisabled={isDisabled}>
      <FormLabel fontSize="sm">{label}</FormLabel>
      <ChakraInput
        ref={ref}
        isInvalid={!!error?.message}
        isDisabled={isDisabled}
        {...rest}
      />
      <FormErrorMessage>{error?.message}</FormErrorMessage>
    </FormControl>
  );
};

const InputForwardedRef = forwardRef(Input);

export { InputForwardedRef as Input };
