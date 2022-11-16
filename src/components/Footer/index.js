import * as S from './style';
import Logo from '../../assets/LadingPageImages/logoHouseforYou.png';

export default function Footer() {
  const handleSocialMedia = socialMedia => {
    switch (socialMedia) {
      case 'linkedin':
        window.open('https://www.linkedin.com/in/victorHL99/', '_blank');
        break;
      case 'github':
        window.open('https://github.com/victorHL99', '_blank');
        break;
      case 'email':
        window.open('mailto:victorlessa.dev@gmail.com', '_blank');
        break;
      default:
        break;
    }
  };
  return (
    <S.FooterContainer>
      <S.FooterLogo src={Logo} />
      <S.FooterIconsContainer>
        <S.LinkedinIcon onClick={() => handleSocialMedia('linkedin')} />
        <S.GithubIcon onClick={() => handleSocialMedia('github')} />
        <S.EmailIcon onClick={() => handleSocialMedia('email')} />
      </S.FooterIconsContainer>
    </S.FooterContainer>
  );
}
