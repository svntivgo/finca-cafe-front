import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';
import { TextField } from '@mui/material';

interface props {
  location: string;
}

export const StyledContactContainer = styled.div<props>`
  width: 100%;
  background-color: ${(props) =>
    props.location === '/reserva/selecciona' ||
    props.location === '/tour-cafe-reservation'
      ? COLORS.WHITE
      : COLORS.PEARL_BLACK};
  border-radius: 0 32px 0 0;
  color: ${COLORS.CREAM};
  padding: 3rem 0;
`;

export const StyledContactFormContainer = styled.div`
  padding: 32px 16px 0 16px;
  margin-bottom: 32px;
  place-content: center;
  @media (min-width: 1023px) {
    padding: 0 30%;
  }
`;

export const StyledContactInputContainer = styled.div`
  margin-bottom: 16px;
`;

export const StyledContactSpan = styled.div`
  height: 32px;
`;

export const ContactFormTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: COLORS.CREAM,
    borderColor: COLORS.CREAM,
  },
  '& .MuiInput-underline:before': {
    borderColor: COLORS.CREAM,
  },
  '& .MuiInput-underline:after': {
    borderColor: COLORS.CREAM,
  },
  '& .MuiInputLabel-root': {
    color: COLORS.CREAM,
  },
  '& .MuiInputBase-input': {
    color: COLORS.CREAM,
    borderColor: COLORS.CREAM,
  },
  '& input:-webkit-autofill': {
    // '-webkit-text-fill-color': `${COLORS.CREAM}`,
    // '-webkit-box-shadow': `0 0 0 1000px ${COLORS.PEARL_BLACK} inset`,
  },
});
export const ContactFormTextFieldOutlined = styled(TextField)({
  '& label.Mui-focused': {
    color: COLORS.CREAM,
    borderColor: COLORS.CREAM,
  },
  '& .MuiInputLabel-root': {
    color: COLORS.CREAM,
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: COLORS.CREAM,
    },
    '&:hover fieldset': {
      borderColor: COLORS.CREAM,
    },
    '&.Mui-focused fieldset': {
      borderColor: COLORS.CREAM,
    },
  },
  '& MuiOutlinedInput-notchedOutline': {
    color: COLORS.CREAM,
  },
  '& .MuiInputBase-input': {
    color: COLORS.CREAM,
    borderColor: COLORS.CREAM,
  },
  '& input:-webkit-autofill': {
    // '-webkit-text-fill-color': `${COLORS.CREAM}`,
    // '-webkit-box-shadow': `0 0 0 1000px ${COLORS.PEARL_BLACK} inset`,
  },
});

export const PaymentButtonContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  place-content: center;
  place-items: center;
`;

export const ContactButtonContainerStyled = styled.div`
  width: 100%;
`;
