import React, { FC, ForwardedRef, forwardRef } from 'react';
import styled from 'styled-components';
import { classNames } from './methods';
import { SearchInputProps } from './props';

const StyledInput: any = styled.input.attrs((props: SearchInputProps) => {
  const {
    name,
    placeholder,
    defaultValue = '',
    disabled,
    onChange
  }: SearchInputProps = props;

  return ({
    className: classNames`${props}`,
    type: 'search',
    name,
    placeholder,
    defaultValue,
    disabled,
    onChange,
    onBlur: onChange
  });
})``;

const SearchInput: FC<SearchInputProps> = forwardRef((props: SearchInputProps, ref: ForwardedRef<any>) => (
  <StyledInput ref={ref} {...props}/>
));

export default SearchInput;
