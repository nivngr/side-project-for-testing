import React, { FC } from 'react';
import type { SpinnerProps } from './types';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner: FC<SpinnerProps> = ({ radius, ...rest }) => {

  return (
    <CircularProgress size={radius} {...rest} />
  )
};

export default Spinner;