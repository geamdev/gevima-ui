import clsx from 'clsx';

import { Loader } from './components';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'filled' | 'outline' | 'transparent';
  children?: React.ReactNode;
  icon?: React.ReactNode;
  iconOnly?: boolean;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = ({
  variant = 'filled',
  children,
  fullWidth,
  icon,
  iconOnly,
  iconPosition = 'left',
  loading,
  ...props
}: ButtonProps) => {
  const { className, ...rest } = props;

  return (
    <button
      {...rest}
      className={clsx(
        'font-bold text-sm rounded-lg cursor-pointer inline-block px-8 py-3',
        {
          'bg-[#0052ff] text-white transition-all hover:bg-[#ccdcff] hover:text-[#0052ff]':
            variant === 'filled',
          'text-[#0052ff] bg-transparent border border-[#cfdbd5b2] transition-all hover:text-black':
            variant === 'outline',
          'text-[#0052ff] bg-transparent transition-all hover:text-black':
            variant === 'transparent',
        },
        { 'w-full': fullWidth },
        { 'px-3 py-3': iconOnly },
        { 'flex items-center gap-2': icon && iconPosition === 'left' },
        { 'flex items-center gap-2': icon && iconPosition === 'right' },
        {
          ' cursor-not-allowed flex gap-2 items-center pointer-events-none px-[45px]':
            loading,
          'opacity-30': loading && variant === 'filled',
        },
        className,
      )}
      disabled={loading}
    >
      {icon && iconPosition === 'left' && <div>{icon}</div>}
      {children}
      {icon && iconPosition === 'right' && <div>{icon}</div>}
      {loading && (
        <div className='absolute right-6 flex items-center'>
          <Loader
            size={18}
            borderSize={3}
            color={variant === 'filled' ? '#fff' : '#0052ff'}
          />
        </div>
      )}
    </button>
  );
};

export default Button;
