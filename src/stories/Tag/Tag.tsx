import clsx from 'clsx';
import { IoMdClose } from 'react-icons/io';

interface TagProps {
  children: React.ReactNode;
  unremovable?: boolean;
  size?: 's' | 'm' | 'l';
  variant?: 'primary' | 'secondary' | 'outline';
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
}

const Tag: React.FC<TagProps> = ({
  children,
  unremovable = false,
  onClose,
  variant = 'primary',
}: TagProps) => {
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);
  };

  return (
    <div
      className={clsx(
        'relative flex items-center  min-w-32 px-4 h-9 rounded-lg',
        {
          'bg-[#0052ff] text-white transition-all hover:bg-[#ccdcff] hover:text-[#0052ff]':
            variant === 'primary',
          'bg-[#f20089] text-white transition-all hover:bg-[#fdd9ed] hover:text-[#f20089]':
            variant === 'secondary',
          'bg-transparent border border-[#cfdbd5b2] transition-all hover:text-[#747A80] hover:bg-[#F1F5F5] hover:border-[#F1F5F5]':
            variant === 'outline',
        },
        unremovable ? 'justify-between' : 'justify-center hover:cursor-pointer',
      )}
      onClick={unremovable ? undefined : handleClick}
    >
      <span className='text-sm font-bold'>{children}</span>
      {unremovable && (
        <span
          onClick={handleClick}
          aria-hidden='true'
          className='text-xl hover:cursor-pointer'
        >
          <IoMdClose />
        </span>
      )}
    </div>
  );
};

export default Tag;
