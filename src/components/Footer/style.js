import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const FooterLogo = styled.img`
  width: 250px;
`;

export const FooterIconsContainer = styled.div`
  width: auto;
  height: auto;
  display: flex;
  gap: 20px;
`;

export const LinkedinIcon = styled(AiFillLinkedin)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.green};
`;

export const GithubIcon = styled(AiFillGithub)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.green};
`;

export const EmailIcon = styled(MdEmail)`
  cursor: pointer;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.colors.green};
`;
