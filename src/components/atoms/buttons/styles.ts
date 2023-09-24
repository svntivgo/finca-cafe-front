import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonProps } from '..';

export const StyledButton = styled(Button)<ButtonProps>(
  ({ colors, font, radius, weight, padding, margin }) => ({
    backgroundColor: colors,
    borderRadius: radius,
    boxShadow: 'unset',
    color: font,
    fontWeight: weight,
    margin: margin,
    padding: padding,
  }),
);
