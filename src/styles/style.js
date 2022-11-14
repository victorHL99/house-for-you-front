/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const MainPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-y: scroll;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const AuthContainer = styled.div`
  display: flex;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 25px;
  padding: 70px;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.green};
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.colors.black};
  transition: all 300ms;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 50px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-family: ${({ theme }) => theme.fonts.logoFont};
    font-size: 40px;

    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      font-size: 30px;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 20px;
    }
  }
`;

export const SignForm = styled.form`
  margin-top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const PageContainer = styled.main`
  width: 100%;
  position: absolute;
  height: calc(100vh - ${({ theme }) => theme.spacing.headerHeight});
  margin-top: ${({ theme }) => theme.spacing.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: scroll;

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
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.green};
  font-size: 28px;
  font-weight: 700;
  padding: 15px 0 15px 0;
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

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  border: none;
  height: 50px;
  font-family: ${({ theme }) => theme.fonts.layoutFont};
  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.colors.greenLogin};
  }
`;

export const RedirectText = styled.span`
  font-family: ${({ theme }) => theme.fonts.layoutFont};
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: 18px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 14px;
  }
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20%;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: 10%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    gap: 5%;
  }
`;

export const MainLadingPage = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
`;
