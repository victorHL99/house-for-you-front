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

  h1 {
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 20px;
    letter-spacing: 0.05em;
    padding-left: 20px;
    color: ${({ theme }) => theme.colors.secondary};
  }

  nav {
    height: 100%;
    position: relative;
    padding-left: 20px;
    gap: 10px;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.secondary};
    background-color: ${({ theme }) => theme.colors.primary};

    img {
      height: 70%;
      aspect-ratio: 1 / 1;
      object-fit: cover;
      margin: 0;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`;

export const DropdownMenu = styled.div`
  position: fixed;
  top: ${({ theme }) => theme.spacing.headerHeight};
  height: 5%;
  right: 0;
  width: 150px;
  border-radius: 0 0 0 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
  font-weight: 700;

  background-color: ${({ theme }) => theme.colors.primary};
`;
