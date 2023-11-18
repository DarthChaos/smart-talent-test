interface DateInputProps {
  className?: string;
  initialValue?: Date;
  onChange: (date: Date) => void;
  placeholder?: string;
  id?: string;
  name?: string;
}

interface SelectorProps {
  options: { value: string; label: string }[];
  id?: string;
  className?: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

interface TextInputProps {
  defaultValue?: string;
  type: "text" | "password" | "email";
  hasLabel?: boolean;
  id?: string;
  required?: boolean;
  name?: string;
  className?: string;
  onChange?: (val: string) => void;
  label: string;
  placeholder?: string;
}
