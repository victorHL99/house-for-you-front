/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 70px;
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
  position: absolute;
  height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};
  background-color: ${({ theme }) => theme.colors.tertiary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    padding: 0 25px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
    margin-top: ${({ theme }) => theme.spacing.headerHeight};
  }
`;

export const PageLabel = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 28px;
  font-weight: 700;
  padding: 30px;
  word-break: break-all;
  transition: all 300ms;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size: 43px;
    padding: 30px 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;
