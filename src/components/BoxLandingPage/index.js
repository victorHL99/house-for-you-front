import * as S from './style';
import CardBox from './cardBox/index';

import mobileTalk from '../../assets/LadingPageImages/mobileTalk.png';
import twoPeople from '../../assets/LadingPageImages/twoPeople.png';
import screenTalk from '../../assets/LadingPageImages/screenTalk.png';

export default function BoxLandingPage({ name, color, image, title, text }) {
  const option = [
    {
      name: 'first',
      image: mobileTalk,
      text: 'Fast and intuitive interface',
    },
    {
      name: 'second',
      image: twoPeople,
      text: 'Easy way to connect to the person offering the position',
    },
    {
      name: 'third',
      image: screenTalk,
      text: 'Everything centralized in a single place',
    },
  ];
  const verifyBox = () => {
    if (name !== 'third') {
      return (
        <>
          <S.ImageContainer>
            <S.Image src={image} alt="image" />
          </S.ImageContainer>
          <S.TextContainer>
            <S.Title name={name}>{title}</S.Title>
            <S.Text>{text}</S.Text>
          </S.TextContainer>
        </>
      );
    }
    return (
      <S.ContainerBox>
        <S.Title name={name}>{title}</S.Title>
        <S.ContainerCard>
          {option.map(item => (
            <CardBox name={item.name} image={item.image} text={item.text} />
          ))}
        </S.ContainerCard>
      </S.ContainerBox>
    );
  };
  return (
    <S.Container color={color} direction="right">
      {verifyBox()}
    </S.Container>
  );
}
