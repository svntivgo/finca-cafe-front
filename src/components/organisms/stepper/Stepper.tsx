import React from 'react';
import { Stepper as StepperMui, Step, StepLabel } from '@mui/material';
import { COLORS } from '../../../constants/colors';
import { StepperProps } from '..';

export const Stepper: React.FC<StepperProps> = (props) => {
  return (
    <StepperMui
      activeStep={props.activeStep}
      sx={{
        '.MuiStepConnector-line': {
          borderColor: COLORS.GOLD,
        },
        '.MuiStepConnector-root.Mui-disabled > .MuiStepConnector-line': {
          borderColor: COLORS.PEARL_BLACK,
        },
        '.MuiStep-root': {
          padding: 0,
        },
        '.MuiStepLabel-iconContainer': {
          padding: 0,
        },
      }}
      style={{ marginTop: '16px' }}
    >
      {props.steps.map((label) => (
        <Step key={label}>
          <StepLabel
            sx={{
              '.MuiSvgIcon-root.Mui-active': { color: COLORS.GOLD },
              '.MuiSvgIcon-root.Mui-completed': { color: COLORS.GOLD },
            }}
          />
        </Step>
      ))}
    </StepperMui>
  );
};
