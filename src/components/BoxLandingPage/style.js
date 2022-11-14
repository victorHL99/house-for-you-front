import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 572px;
  background-color: ${props =>
    props.color === 'primary' ? '#301E42' : '#542B7D'};
  display: flex;
  flex-direction: ${props =>
    props.direction === 'right' && props.color ? 'row' : 'row-reverse'};
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  width: 558px;
  height: 558px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 612px;
  height: 158px;
  gap: 10px;
`;

export const Title = styled.h1`
  font-family: ${({ theme }) => theme.fonts.principalFont};
  font-size: ${props => (props.name === 'first' ? '53px' : '44px')};
  line-height: ${props => (props.name === 'first' ? '78px' : '55px')};
  font-weight: 400;
  text-align: ${props => (props.name === 'second' ? 'start' : 'center')};
  color: ${({ theme }) => theme.colors.green};
`;

export const Text = styled.p`
  font-family: ${({ theme }) => theme.fonts.principalFont};
  font-size: 24px;
  line-height: 30px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.green};
`;

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

export const ContainerBox = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 38px;
`;
