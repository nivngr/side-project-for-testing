import React, { FC } from 'react';
import type { IconButtonProps } from './types';
import Image from 'next/image';

const IconButton: FC<IconButtonProps> = ({ icon, width, height, onClick, ...rest}) => {

  return (
    <>
      <Image 
        src={icon} 
        alt='Icon' 
        width={width} 
        height={height} 
        onClick={onClick} 
        className='hover:cursor-pointer'
        {...rest}
      />
    </>
  );
};

export default IconButton;