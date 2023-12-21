import clsx from 'clsx';
import React, { forwardRef, InputHTMLAttributes, useState } from 'react';
import { FaCheck } from 'react-icons/fa';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, ...props }, ref) => {
    const [checked, setChecked] = useState(false);

    const handleCheckboxClick = () => {
      setChecked(!checked);
    };

    return (
      <div className={clsx('flex flex-col')} onClick={handleCheckboxClick}>
        <div className='flex gap-2 cursor-pointer'>
          <div
            className={clsx(
              'w-5 h-5 rounded flex items-center justify-center text-white',
              error && !checked && 'bg-red-200',
              checked
                ? 'bg-blue-500 border-blue-500'
                : 'bg-gray-300 border-gray-300',
            )}
          >
            {checked && <FaCheck size={14} />}
          </div>

          <input
            {...props}
            ref={ref}
            type='checkbox'
            className='hidden'
            checked={checked}
            onChange={() => {}}
          />
          {label && (
            <label
              className={clsx(
                'text-xs font-bold mt-0.5',
                checked ? 'text-black' : 'text-[#747A80]',
                error && !checked && 'text-red-500',
              )}
            >
              {label}
            </label>
          )}
        </div>
        {error && !checked && (
          <p className='text-xs text-red-500 mt-1'>{error}</p>
        )}
      </div>
    );
  },
);

export default Checkbox;
