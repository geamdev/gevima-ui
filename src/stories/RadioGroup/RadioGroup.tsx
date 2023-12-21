import clsx from 'clsx';
import React, { useState } from 'react';
import { GoDotFill } from 'react-icons/go';

import { RadioGroupProps } from '@/stories/RadioGroup/types';

const RadioGroup: React.FC<RadioGroupProps> = ({
  options,
  onChange,
  variant = 'primary',
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <div className='flex gap-8'>
      {options.map((option) => (
        <div
          key={option.value}
          className='flex items-center gap-2 cursor-pointer text-white'
          onClick={() => handleRadioChange(option.value)}
        >
          <div
            className={clsx(
              'w-5 h-5 rounded-full border border-gray-300 flex items-center ',
              selectedValue === option.value &&
                variant === 'primary' &&
                'bg-blue-500 border-blue-500',
              selectedValue === option.value &&
                variant === 'secondary' &&
                'bg-[#F20089] border-[#F20089]',
            )}
          >
            {selectedValue === option.value && (
              <GoDotFill size={15} className='ml-[1.2px] mt-[-1px]' />
            )}
          </div>
          <label
            className={clsx(
              'text-xs font-bold',
              selectedValue === option.value ? 'text-black' : 'text-[#747A80]',
            )}
          >
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default RadioGroup;
