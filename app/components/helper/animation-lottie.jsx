"use client"

import Lottie from "lottie-react";

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width,
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;