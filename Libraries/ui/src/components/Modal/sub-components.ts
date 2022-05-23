import ModalBackground from './ModalBackground';
import ModalContent from './ModalContent';
import ModalClose from './ModalClose';
import ModalCard from './ModalCard';

export interface ModalSubComponents {
  Background: typeof ModalBackground;

  Content: typeof ModalContent;

  Close: typeof ModalClose;

  Card: typeof ModalCard;
}
