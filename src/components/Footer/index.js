import * as S from './style';
import Logo from '../../assets/LadingPageImages/logoHouseforYou.png';

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterLogo src={Logo} />
      <S.FooterIconsContainer>
        <S.LinkedinIcon />
        <S.GithubIcon />
        <S.EmailIcon />
      </S.FooterIconsContainer>
    </S.FooterContainer>
  );
}
