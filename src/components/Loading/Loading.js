import { RotatingLines } from 'react-loader-spinner';

function LoadingLogin() {
  return (
    <RotatingLines
      strokeColor="#180C24"
      strokeWidth="5"
      animationDuration="0.75"
      width="45"
      visible
    />
  );
}

function LoadingSignup() {
  return (
    <RotatingLines
      strokeColor="#180C24"
      strokeWidth="5"
      animationDuration="0.75"
      width="45"
      visible
    />
  );
}

const Loading = {
  Login: LoadingLogin,
  Signup: LoadingSignup,
};

export default Loading;
