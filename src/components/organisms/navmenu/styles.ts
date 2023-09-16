import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

interface StyledMenuProps {
  isMenuItems: boolean;
}

export const NavMenuContainer = styled.div<StyledMenuProps>`
  background: ${(props) =>
    props.isMenuItems ? COLORS.PEARL_BLACK : 'transparent'};
  height: ${(props) => (props.isMenuItems ? '100vh' : 'unset')};
  opacity: 0.7;
  position: fixed;
  width: 100vw;
  z-index: 9999;
`;

export const NavMenuHeader = styled.div<StyledMenuProps>`
  display: flex;
  margin: 8px 8px 32px 8px;
  margin-bottom: ${(props) => (props.isMenuItems ? '32px' : '8px')};
`;

export const NavMenuInfo = styled.div`
  display: flex;
  display: flex;
  height: 1.5rem;
  justify-content: space-between;
  padding-left: 16px;
  width: 100%;
`;

export const NavMenuItemsContainer = styled.div`
  border-radius: 8px;
  border: 1px solid ${COLORS.GOLD};
  height: 75%;
  margin: 0px 8px 0px 8px;
  padding: 0 16px;
`;
