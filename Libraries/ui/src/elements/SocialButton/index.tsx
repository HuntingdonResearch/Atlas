import React, { FC, forwardRef } from 'react';
import styled from 'styled-components';
import Icon from '../Icon';
import { classNames } from './methods';
import { SocialButtonProps } from './props';

const StyledAnchor: any = styled.a.attrs((props: SocialButtonProps) => ({
  className: classNames`${props}`,
  loading: props['loading'] ? 'true' : undefined
}))``;

const GoogleIcon: any = styled(Icon).attrs(() => ({
  name: 'google',
  collection: 'fab'
}))`
  background: conic-gradient(from -45deg, #ea4335 110deg, #4285f4 90deg 180deg, #34a853 180deg 270deg, #fbbc05 270deg) 73% 55%/150% 150% no-repeat;
  color: rgba(255, 255, 255, 0);
  -webkit-background-clip: text;
  -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;

const SocialButton: FC<SocialButtonProps> = forwardRef((props, ref) => {
  const {
    provider,
    children
  } = props;

  return (
    <StyledAnchor {...props}>
      {
        provider === 'google'
          ? <GoogleIcon/>
          : <Icon collection="fab" name={provider}/>
      }
      {
        children && <span>{children}</span>
      }
    </StyledAnchor>
  );
});

export default SocialButton;
