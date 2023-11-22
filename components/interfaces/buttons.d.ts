interface LinkProps {
  children: string | React.ReactNode;
  href?: string;
  className?: string;
}

interface ButtonProps {
  type?: "reset" | "submit" | "button";
  children: string | React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}
