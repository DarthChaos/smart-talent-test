interface PortalClientProps {
  children: React.ReactNode;
  show?: boolean;
  onClose?: () => void;
  selector?: string;
}
