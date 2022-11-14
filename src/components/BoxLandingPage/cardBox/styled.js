import styled from 'styled-components';

export const CardBox = styled.div`
  width: 370px;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.purple2};
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const CardImage = styled.img`
  width: 300px;
  height: 225px;
`;

export const CardText = styled.p`
  width: 256px;
  height: 105px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.principalFont};
  font-size: 24px;
  line-height: 35px;
  color: ${({ theme }) => theme.colors.green};
`;
