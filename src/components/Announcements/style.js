import styled from 'styled-components';

export const Announcement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  padding: 18px 15px;
  transition: all 300ms;
  margin-top: 10px;
  background-color: pink;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop}) {
    width: 100%;
    padding: 20px 25px;
    margin-top: 15px;

    background-color: orange;
    cursor: pointer;

    &:hover {
      background-color: #f5f5f5;
    }
  }
`;

export const ContainerIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;
  height: 40px;
  padding: 10px 0;
  background-color: white;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;

    p {
      font-size: 14px;
    }
  }
`;
