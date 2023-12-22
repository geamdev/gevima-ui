import clsx from 'clsx';
import { forwardRef, Ref, SelectHTMLAttributes } from 'react';

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  fullWidth?: boolean;
  label?: string;
  options: { value: string; label: string }[];
}

const Select = forwardRef<Ref<HTMLSelectElement>, SelectProps>(
  ({ fullWidth, error, label, options, ...props }, ref) => {
    const { disabled } = props;

    const selectClasses = clsx(
      'mt-[1px] p-3 border border-[#cfdb5b2] w-full outline-none text-sm font-semibold',

      disabled ? 'bg-transparent border-none' : 'bg-white rounded-lg',
      error && 'border-[#e53e3e]',
    );

    const wrapperClasses = clsx('relative', {
      'w-full': fullWidth,
    });

    return (
      <div className={wrapperClasses}>
        {label && (
          <label
            className={clsx(
              'text-xs font-bold mb-0.5 ml-0.5',
              disabled ? 'text-[#747A80]' : 'text-[#2d3748]',
              error ? 'text-[#ff0000]' : 'text-[#2d3748]',
            )}
          >
            {label}
          </label>
        )}

        <div className='relative'>
          <select
            className={selectClasses}
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            //@ts-ignore
            ref={ref}
            {...props}
          >
            {options.map((option) => (
              <option
                className='text-sm'
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            ))}
          </select>
        </div>
        {disabled && <div className='h-[1px] bg-[#CFDBD5B2]' />}
        {error && (
          <span className='text-[#ff0000] text-sm mt-1.5 ml-1'>{error}</span>
        )}
      </div>
    );
  },
);

Select.displayName = 'Select';

export default Select;
