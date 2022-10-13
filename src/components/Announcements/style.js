import styled from 'styled-components';

export const Announcement = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: ${({ theme }) => theme.borderRadius.main};
  gap: 15px;
  width: 100%;
  padding: 18px 15px;
  transition: all 300ms;
  margin-top: 10px;
  font-family: ${({ theme }) => theme.fonts.layoutFont};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.green};
  box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.colors.black};

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 95%;
    padding: 20px 25px;
    margin-left: 25px;
    margin-top: 15px;
    border-radius: 15px;

    cursor: pointer;

    &:hover {
      box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.colors.green};
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
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 1px;

      @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
        font-size: 12px;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
        font-size: 18px;
      }

      @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
        font-size: 20px;
      }
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
    height: 250px;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.largeScreen}) {
    width: 100%;
    height: 350px;
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

export const ButtonTell = styled.button`
  cursor: pointer;
  display: flex;
  padding: 5px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green};
  border-radius: ${({ theme }) => theme.borderRadius.main};
  border: none;
  height: 50px;
  font-family: ${({ theme }) => theme.fonts.layoutFont};
  text-transform: uppercase;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 3px;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    box-shadow: 1px 1px 10px 1px ${({ theme }) => theme.colors.greenLogin};
  }
`;
