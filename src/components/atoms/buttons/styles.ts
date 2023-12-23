import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonProps } from '..';
import { COLORS } from '../../../constants/colors';

export const StyledButton = styled(Button)<ButtonProps>(
  ({
    colors,
    font,
    fontSize,
    radius,
    weight,
    padding,
    margin,
    disabled,
    width,
  }) => ({
    backgroundColor: disabled ? COLORS.SMOKE_GREY : colors,
    borderRadius: radius,
    boxShadow: 'unset',
    color: font,
    fontSize: fontSize,
    fontWeight: weight,
    margin: margin,
    padding: padding,
    width: width ?? 'fit-content',
  }),
);
