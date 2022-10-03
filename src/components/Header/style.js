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

  nav {
    height: 100%;
    position: relative;
    padding-right: 20px;
    ul {
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      list-style: none;
      li {
        height: 100%;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: filter 300ms;
        &:hover {
          /* filter: brightness(1.2); */
        }
        svg {
          font-size: 22px;
          cursor: pointer;
        }
        img {
          height: 70%;
          aspect-ratio: 1 / 1;
          object-fit: cover;
          margin: 0;
          border-radius: 50%;
          cursor: pointer;
        }
      }
    }
  }
`;
