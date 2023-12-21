import clsx from 'clsx';

import { SkeletonProps } from '@/stories/Skeleton/types';

const Skeleton: React.FC<SkeletonProps> = ({
  variant = 'rect',
  width,
  height,
}: SkeletonProps) => {
  return (
    <div
      className={clsx(
        'animate-pulse bg-gray-200',
        variant === 'rect' && 'rounded-none',
        variant === 'circle' && 'rounded-full',
        variant === 'rounded' && 'rounded',
      )}
      style={{
        width: width ? `${width}px` : '200px',
        height: height ? `${height}px` : '30px',
      }}
    />
  );
};

export default Skeleton;
