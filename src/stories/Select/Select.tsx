import clsx from 'clsx';
import { useSelect } from 'downshift';
import { useEffect } from 'react';
import { BsChevronDown } from 'react-icons/bs';

interface SelectProps<T> {
  items: T[];
  label?: string;
  value?: T | null;
  loading?: boolean;
  placeholder?: string;
  error?: string | null;
  onChange?: (item: T | null) => void;
  renderItem: (item: T) => React.ReactNode;
}

function Select<T>({
  items,
  label,
  error,
  loading,
  onChange,
  renderItem,
  placeholder,
  value: defaultSelectedItem,
}: SelectProps<T>) {
  const {
    isOpen,
    selectedItem,
    getToggleButtonProps,
    getLabelProps,
    getMenuProps,
    getItemProps,
    reset,
  } = useSelect({
    items,
    defaultSelectedItem,
  });

  useEffect(() => {
    if (!defaultSelectedItem) {
      reset();
    }
  }, [defaultSelectedItem]);

  useEffect(() => {
    onChange && onChange(selectedItem);
  }, [selectedItem]);

  const containerClass = clsx(
    'relative mt-0.5 p-4 border border-[#cfdbd5b2] rounded-lg outline-none cursor-pointer',
    {
      'border-[#e53e3e]': error,
    },
  );

  const labelClass = clsx(
    ' font-bold mb-2 ml-1',
    error ? 'text-[#ff0000]' : 'text-[#2d3748]',
  );

  return (
    <div>
      {label && <label className={labelClass}>{label}</label>}
      <div className={containerClass}>
        <div {...getToggleButtonProps()} className='flex items-center min-w-56'>
          {selectedItem && (
            <div className='block flex-1 mr-3'>{renderItem(selectedItem)}</div>
          )}
          {!selectedItem && (
            <div
              className={clsx(
                'text-[#718096] flex-1 min-w-56 flex items-center justify-between',
                error ? 'text-[#ff0000]' : 'text-[#718096]',
              )}
              {...getLabelProps()}
            >
              {placeholder || 'Selecciona una opción'}
              <BsChevronDown />
            </div>
          )}
        </div>
        <div
          {...getMenuProps()}
          className={clsx(
            (!isOpen || loading) && 'hidden',
            'absolute top-6 left-0 right-0 bg-white w-full cursor-pointer overflow-y-auto z-50 max-h-96 min-w-44 mt-9 shadow-sm break-words box-border',
          )}
        >
          {isOpen &&
            items.map((item, index) => (
              <div
                key={index}
                {...getItemProps({ item, index })}
                className='p-3 hover:bg-[#f2f2f2]'
              >
                {renderItem(item)}
              </div>
            ))}
        </div>
      </div>
      {error && (
        <span className='text-[#ff0000] text-sm mt-1.5 ml-1'>{error}</span>
      )}
    </div>
  );
}

export default Select;
