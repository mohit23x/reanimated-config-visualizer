import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 551.13 551.13" {...props}>
      <Path d="M465.016 172.228h-51.668v34.446h34.446v310.011H103.337V206.674h34.446v-34.446H86.114c-9.52 0-17.223 7.703-17.223 17.223v344.456c0 9.52 7.703 17.223 17.223 17.223h378.902c9.52 0 17.223-7.703 17.223-17.223V189.451c0-9.52-7.703-17.223-17.223-17.223z" />
      <Path d="M258.342 65.931v244.08h34.446V65.931l73.937 73.937 24.354-24.354L275.565 0 160.051 115.514l24.354 24.354z" />
    </Svg>
  );
}

export default SvgComponent;
