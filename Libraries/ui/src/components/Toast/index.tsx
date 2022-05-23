import React, { FC, useCallback } from 'react';
import styled, { css } from 'styled-components';
import Button from '../../elements/Button';
import { ToastProps } from './props';
import { useTimer } from './hooks';

const StyledDiv: any = styled.div`
  width: 100%;
  z-index: 99999;
  position: fixed;
  pointer-events: none;
  display: flex;
  flex-direction: column;
  padding: 15px;
  ${(props: ToastProps) => props.position === 'top-left' ? css`
    left: ${props.offsetLeft};
    top: ${props.offsetTop};
    text-align: left;
    align-items: flex-start;
  ` : ''}
  ${(props: ToastProps) => props.position === 'top-right' ? css`
    right: ${props.offsetRight};
    top: ${props.offsetTop};
    text-align: right;
    align-items: flex-end;
  ` : ''}
  ${(props: ToastProps) => props.position === 'top-center' ? css`
    top: ${props.offsetTop};
    left: 0;
    right: 0;
    text-align: center;
    align-items: center;
  ` : ''}
  ${(props: ToastProps) => props.position === 'bottom-left' ? css`
    left: ${props.offsetLeft};
    bottom: ${props.offsetBottom};
    text-align: left;
    align-items: flex-start;
  ` : ''}
  ${(props: ToastProps) => props.position === 'bottom-right' ? css`
    right: ${props.offsetRight};
    bottom: ${props.offsetBottom};
    text-align: right;
    align-items: flex-end;
  ` : ''}
  ${(props: ToastProps) => props.position === 'bottom-center' ? css`
    bottom: ${props.offsetBottom};
    left: 0;
    right: 0;
    text-align: center;
    align-items: center;
  ` : ''}
  ${(props: ToastProps) => props.position === 'center' ? css`
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  ` : ''}
`;

const StyledToast: any = styled.div.attrs((props: ToastProps) => ({
  className: `notification ${props.color ? `is-${props.color}` : ''}`
}))`
  width: auto;
  pointer-events: auto;
  display: inline-flex;
  white-space: pre-wrap;
  opacity: ${(props: ToastProps) => props.opacity};
  ${(props: ToastProps) => props.dismissible ? css`
    padding: 2rem;
  ` : ''}
`;

const StyledButton: any = styled(Button).attrs(() => ({
  className: 'delete is-white has-background-dark'
}))``;

const Toast: FC<ToastProps> = (props: ToastProps) => {
  const {
    children,
    offsetTop = 0,
    offsetBottom = 0,
    offsetLeft = 0,
    offsetRight = 0,
    dismissible,
    onDismiss: dismiss = () => {},
    color = 'info',
    duration = 5000,
    position = 'top-right',
    closesOnClick = true,
    pausesOnHover = true,
    opacity = 1
  }: ToastProps = props;

  const { pause, resume } = useTimer(duration, pausesOnHover, dismiss);

  const handleClick = useCallback(() => {
    if (closesOnClick) {
      dismiss();
    }
  }, [closesOnClick, dismiss]);

  return (
    <StyledDiv {...{ position, offsetTop, offsetLeft, offsetBottom, offsetRight }}>
      <StyledToast {...{ color, opacity, dismissible }} onClick={handleClick} onMouseEnter={pause} onMouseLeave={resume}>
        {
          children
        }
        {
          dismissible && <StyledButton onClick={dismiss}/>
        }
      </StyledToast>
    </StyledDiv>
  );
};

export default Toast;
