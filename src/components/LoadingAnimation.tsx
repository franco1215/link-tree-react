import Lottie from 'lottie-react';
import loadingAnimation from '../animations/loader_chat.json';

export function LoadingAnimation() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-12 h-6">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
}

