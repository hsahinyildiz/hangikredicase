import { Dimensions } from 'react-native';

export const getMetrics = () => {
  const { width, height } = Dimensions.get('window');

  return {
    screenWidth: width,
    screenHeight: height,
    logoSize: width * 0.4,
  };
};

export const Metrics = getMetrics();
