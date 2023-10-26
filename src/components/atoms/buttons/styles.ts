import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonProps } from '..';
import { COLORS } from '../../../constants/colors';

export const StyledButton = styled(Button)<ButtonProps>(
  ({ colors, font, radius, weight, padding, margin, disabled }) => ({
    backgroundColor: disabled ? COLORS.SMOKE_GREY : colors,
    borderRadius: radius,
    boxShadow: 'unset',
    color: font,
    fontWeight: weight,
    margin: margin,
    padding: padding,
  }),
);
