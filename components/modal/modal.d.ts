interface ModalProps {
  hasHeader?: boolean;
  title?: string;
  className?: string;
  titleClassName?: string;
  onClose?: () => void;
  children: string | React.ReactNode;
  open?: boolean;
  closeClassName?: string;
}
