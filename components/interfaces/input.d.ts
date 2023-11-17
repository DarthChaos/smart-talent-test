interface DateInputProps {
  className?: string;
  initialValue?: Date;
  onChange: (date: Date) => void;
  placeholder?: string;
  id?: string;
}

interface SelectorProps {
  options: { value: string; label: string }[];
  id?: string;
  className?: string;
  onChange: (val: string) => void;
  placeholder?: string;
}
