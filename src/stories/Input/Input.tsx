import clsx from 'clsx';
import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { IoAlertOutline } from 'react-icons/io5';
import { Tooltip } from 'react-tooltip';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  currency?: string;
  label?: string;
}

const Input = forwardRef<
  Ref<HTMLInputElement | typeof CurrencyInput>,
  InputProps
>(({ fullWidth, error, icon, currency, label, ...props }, ref) => {
  const { disabled } = props;
  const InputComponent = currency ? CurrencyInput : 'input';

  const currencyConfig = currency
    ? { decimalLimit: 2, prefix: currency }
    : undefined;

  const inputClasses = clsx(
    'mt-[1px] p-3 border border-[#cfdb5b2]  w-full outline-none text-sm font-semibold',
    {
      'pl-10': icon,
      'pr-4': currency,
      'text-black bg-[#f200892c]': error,
    },
    disabled ? 'bg-trasparent border-none' : 'bg-white rounded-lg',
  );

  const wrapperClasses = clsx('relative', {
    'pl-10': icon,
    'w-full': fullWidth,
  });

  return (
    <div className={wrapperClasses}>
      {label && (
        <label
          className={clsx(
            'text-xs font-bold mb-0.5 ml-0.5',
            error ? 'text-[#ff0000]' : 'text-[#2d3748]',
            disabled ? 'text-[#747A80]' : 'text-[#2d3748]',
          )}
        >
          {label}
        </label>
      )}
      {icon && (
        <div
          className='absolute inset-y-0 right-4 flex items-center pl-0.5 pointer-events-none mt-0.5 z-50'
          data-tip={error}
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
        {error && (
          <div data-tooltip-id='tooltip' className='absolute top-4 right-4'>
            <Tooltip
              id='tooltip'
              place='top'
              style={{
                backgroundColor: error ? '#F20089' : '#333',
                color: '#fff',
              }}
            >
              {error}
            </Tooltip>

            {error && (
              <IoAlertOutline className='text-white bg-[#f20089] rounded-full p-0.5 text-sm font-bold mt-0.5' />
            )}
          </div>
        )}
      </div>

      {disabled && <div className='h-[1px] bg-[#CFDBD5B2]' />}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
