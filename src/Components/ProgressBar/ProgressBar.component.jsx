import { CircularProgress } from '@mui/material';
import React from 'react';
import './ProgressBar.css';

const ProgressBar = () => (
  <div className="progress-bar">
    <CircularProgress size={100} />
  </div>
)
 
export default ProgressBar;
