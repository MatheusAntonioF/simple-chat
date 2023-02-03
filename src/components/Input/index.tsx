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
  { label, error, isDisabled, type = 'text', ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error?.message} isDisabled={isDisabled}>
      <FormLabel>{label}</FormLabel>
      <ChakraInput
        ref={ref}
        type={type}
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
