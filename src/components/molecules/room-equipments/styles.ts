import styled from '@emotion/styled';

export const StyledEquipmentContainer = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 16px;
  margin: 0 auto;
`;

export const StyledEquipmentItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 8px;
  place-items: center;
`;

export const StyledSpan = styled.span`
  margin: 4px 0;
`;
