import styled from '@emotion/styled';
import { COLORS } from '../../../constants/colors';

interface StyledMenuProps {
  isMenuItems: boolean;
  isScrolled?: boolean;
}

export const NavMenuContainer = styled.div<StyledMenuProps>`
  background-color: ${(props) =>
    props.isMenuItems ? COLORS.PEARL_BLACK : 'transparent'};
  height: ${(props) => (props.isMenuItems ? '100vh' : 'unset')};
  backdrop-filter: ${(props) => (props.isMenuItems ? 'blur(8px)' : 'unset')};
  position: fixed;
  width: 100vw;
  z-index: 9999;
`;

export const NavMenuHeader = styled.div<StyledMenuProps>`
  display: flex;
  padding: 8px;
  margin-bottom: ${(props) => (props.isMenuItems ? '32px' : '8px')};
  background-color: ${(props) =>
    props.isScrolled && props.isScrolled ? COLORS.RED : 'transparent'};
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
  border: 1px solid ${COLORS.WHITE};
  height: 75%;
  margin: 0px 8px 0px 8px;
  padding: 0 16px;
`;
