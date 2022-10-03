/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Header = styled.header`
  height: ${({ theme }) => theme.spacing.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0;
  margin: 0;
`;
