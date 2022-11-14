import * as S from './styled';

export default function CardBox({ image, text }) {
  return (
    <S.CardBox>
      <S.CardContainer>
        <S.CardImage src={image} />
        <S.CardText>{text}</S.CardText>
      </S.CardContainer>
    </S.CardBox>
  );
}
