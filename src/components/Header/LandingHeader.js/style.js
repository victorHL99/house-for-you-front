import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: ${({ theme }) => theme.spacing.headerHeight};
  background-color: ${({ theme }) => theme.colors.primary};
  padding-left: ${({ theme }) => theme.padding.left};
  padding-right: ${({ theme }) => theme.padding.rightHeader};
`;

export const BoxMenuOptions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10%;
  width: 35%;
  height: 100%;
`;

export const BoxLabel = styled.div``;

export const MenuOptions = styled.div`
  font-family: ${({ theme }) => theme.fonts.logoFont};
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.green};
  cursor: pointer;
`;

export const LoginButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${({ theme }) => theme.fonts.logoFont};
  font-size: 1.3rem;
  color: ${({ theme }) => theme.colors.green};

  width: auto;
  padding: 19px 23px 19px 23px;

  border: none;
  border-radius: 40px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);

  background-color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'transparent',
    border: 'none',
  },
};

export const BoxModal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  height: 350px;
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50px;
  box-shadow: 1px 1px 10px 0px ${({ theme }) => theme.colors.green};
  gap: 25px;
  color: ${({ theme }) => theme.colors.green};
`;

export const TitleModal = styled.h1`
  display: flex;
  width: 70%;
  justify-content: center;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.principalFont};
  font-size: 20px;
`;

export const ButtonModal = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
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

export const Logo = styled.img`
  width: 200px;
`;
