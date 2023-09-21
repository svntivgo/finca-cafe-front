import styled from '@emotion/styled';
import { Button } from '@mui/material';
import { ButtonProps } from '..';

export const StyledButton = styled(Button)<ButtonProps>(({ colors, font }) => ({
  backgroundColor: colors,
  boxShadow: 'unset',
  color: font,
}));
