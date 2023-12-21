import clsx from 'clsx';
import React, { useState } from 'react';

interface SwitchProps {
  label?: string;
  onChange: (checked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({ onChange, label }) => {
  const [checked, setChecked] = useState(false);

  const handleSwitchClick = () => {
    const newValue = !checked;
    setChecked(newValue);
    onChange(newValue);
  };

  return (
    <div className='flex items-center gap-3'>
      <div
        className={clsx(
          'relative rounded-full w-12 h-7 border cursor-pointer bg-transparent',
          checked ? 'bg-blue-500 border-blue-500 ' : 'border-gray-300',
        )}
        onClick={handleSwitchClick}
      >
        <div
          className={clsx(
            'absolute left-1 top-[5px] w-4 h-4 rounded-full transition-transform',
            checked
              ? 'transform translate-x-[22px] bg-white border '
              : 'bg-black',
          )}
        />
      </div>
      {label && (
        <p
          className={clsx(
            'text-xs font-bold mt-0.5',
            checked ? 'text-black' : 'text-[#747A80]',
          )}
        >
          {label}
        </p>
      )}
    </div>
  );
};

export default Switch;
