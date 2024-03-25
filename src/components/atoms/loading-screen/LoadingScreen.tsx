import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { COLORS } from '../../../constants/colors';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingScreenWrapper = styled.div`
  background-color: ${COLORS.PEARL_BLACK};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Loader = styled.div`
  border: 8px solid ${COLORS.WHITE};
  border-top: 8px solid ${COLORS.GOLD};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 10px;
  font-weight: bold;
`;

const LoadingScreen: React.FC<{ isLoading: boolean }> = (props) => {
  return (
    props.isLoading && (
      <LoadingScreenWrapper>
        <Loader />
        <LoadingText>Cargando...</LoadingText>
      </LoadingScreenWrapper>
    )
  );
};

export default LoadingScreen;
