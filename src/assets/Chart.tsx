import React from 'react';
import Svg, { Rect } from 'react-native-svg';

const ChartIcon = () => (
  <Svg width="50" height="50" viewBox="0 0 100 100" fill="none">
    <Rect x="10" y="70" width="15" height="30" fill="black" />
    <Rect x="30" y="40" width="15" height="60" fill="black" />
    <Rect x="50" y="10" width="15" height="90" fill="black" />
    <Rect x="70" y="55" width="15" height="45" fill="black" />
  </Svg>
);

export default ChartIcon;
