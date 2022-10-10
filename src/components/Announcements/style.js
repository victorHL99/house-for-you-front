import styled from 'styled-components';

export const Announcement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 18px 15px;
  transition: all 300ms;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.annouceFont};
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.secondary};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 95%;
    padding: 20px 25px;
    margin-left: 25px;
    margin-top: 15px;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.quinary};
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  padding: 10px 0;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    p {
      font-size: 14px;
      font-weight: 700;
    }
  }
  button {
    height: 40px;
    border-radius: 15px;
    border: 1px solid ${({ theme }) => theme.colors.quaternary};
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.secondary};
    &:hover {
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.secondary};
    }
  }
`;

export const ImageHouse = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  overflow-x: scroll;
  border-radius: 15px;
  transition: all 300ms;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
    height: 300px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
    width: 100%;
    height: 400px;
  }
`;

export const ContainerImage = styled.div`
  display: block;
  flex-direction: row;
  flex-wrap: nowrap;
  width: 100%;
  height: auto;
  border-radius: 15px;
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 300px;
  height: 300px;
  background-color: black;
`;
