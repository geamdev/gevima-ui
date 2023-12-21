interface RadioOption {
  value: string;
  label: string;
}

export interface RadioGroupProps {
  options: RadioOption[];
  onChange: (value: string) => void;
  variant?: 'primary' | 'secondary';
  error?: string;
}
