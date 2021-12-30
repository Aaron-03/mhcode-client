import { useEffect, useState } from "react";
import lottie from "lottie-web";


const useLottie = (lottieURL) => {

  const getLottie = async () => {
    let lottieData = null;
    try {
      const result = await fetch(lottieURL);
      const data = await result.json();
      lottieData = data;
    } catch (error) {
      lottieData = null;
    }
    return lottieData;
  }

  const loadLottie = async (lottieContainer) => {
    const lottieData = await getLottie();
    lottie.loadAnimation({
      container: lottieContainer,
      renderer: 'svg',
      animationData: lottieData,
      loop: true,
      autoplay: true
    })
  }

  return {
    loadLottie
  }
}

export default useLottie;
