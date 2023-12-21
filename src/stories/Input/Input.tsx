import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { FaCheck } from 'react-icons/fa6';
import { IoAlertOutline } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'error' | 'success';
  message?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  currency?: string;
  label?: string;
}

const Input = forwardRef<
  Ref<HTMLInputElement | typeof CurrencyInput>,
  InputProps
>(({ fullWidth, message, icon, currency, label, variant, ...props }, ref) => {
  const InputComponent = currency ? CurrencyInput : 'input';

  const currencyConfig = currency
    ? { decimalLimit: 2, prefix: currency }
    : undefined;

  const inputClasses = clsx(
    'mt-[1px] p-2 border border-[#cfdb5b2] rounded-lg w-full outline-none',
    {
      'pl-10': icon,
      'pr-4': currency,
      'text-black bg-[#f200892c]': variant === 'error',
      'text-black': variant === 'success',
    },
  );

  const wrapperClasses = clsx('relative', {
    'pl-10': icon,
    'w-full': fullWidth,
  });

  return (
    <div className={wrapperClasses}>
      <label className='text-xs font-bold mb-0.5 ml-0.5'>{label}</label>
      {icon && (
        <div
          className='absolute inset-y-0 left-0 right-[15px] flex items-center pl-0.5 pointer-events-none mt-0.5'
          data-tip={message}
          data-for={`tooltip-${label}`}
        >
          {icon}
        </div>
      )}
      <div className='relative'>
        <InputComponent
          {...currencyConfig}
          className={inputClasses}
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          ref={ref as Ref<HTMLInputElement | typeof CurrencyInput>}
          {...props}
        />
        {message && (
          <div data-tooltip-id='tooltip' className='absolute top-3 right-4'>
            <Tooltip
              id='tooltip'
              place='top'
              style={{
                backgroundColor:
                  variant === 'error'
                    ? '#F20089'
                    : variant === 'success'
                      ? '#00C48C'
                      : '#333',
                color: '#fff',
              }}
            >
              {message}
            </Tooltip>
            {variant === 'error' && (
              <IoAlertOutline className='text-white bg-[#f20089] rounded-full p-0.5 text-sm font-bold mt-0.5' />
            )}
            {variant === 'success' && (
              <FaCheck className='text-white bg-[#8dc572] rounded-full p-1 texxt-xs font-bold mt-0.5 ' />
            )}
          </div>
        )}
      </div>
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
