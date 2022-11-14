import BoxLandingPage from '../components/BoxLandingPage';
import * as S from '../styles/style';
import Footer from '../components/Footer';

// imports images from assets
import newHouse from '../assets/LadingPageImages/taxi-new-house.png';
import pc from '../assets/LadingPageImages/pc.png';

import LandingHeader from '../components/Header/LandingHeader.js/LandingHeader';

export default function LandingPage() {
  const info = [
    {
      first: {
        title: 'A new tool to help you find your ideal home.',
        text: '',
      },
      second: {
        title: 'For what purpose was house for you created?',
        text: 'Made by college students for college students, the idea was born with the intention of solving the pain of not easily finding an application that centralized all the ads in a quick and practical way.',
      },
      third: {
        title: 'Why use House for You?',
        text: '',
      },
    },
  ];

  return (
    <div>
      <LandingHeader />
      <S.MainLadingPage>
        <BoxLandingPage
          name="first"
          color="primary"
          image={newHouse}
          title={info[0].first.title}
          text={info[0].first.text}
        />
        <BoxLandingPage
          name="second"
          image={pc}
          title={info[0].second.title}
          text={info[0].second.text}
        />
        <BoxLandingPage
          name="third"
          color="primary"
          title={info[0].third.title}
        />
        <Footer />
      </S.MainLadingPage>
    </div>
  );
}
