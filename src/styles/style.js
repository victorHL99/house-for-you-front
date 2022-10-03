/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const PageContainer = styled.main`
  width: 100%;
  height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};
  background-color: red;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    background-color: blue;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
    background-color: yellow;
  }
`;
