import * as React from 'react';
import Svg, { Circle, G, Ellipse } from 'react-native-svg';

function SvgComponent(props) {
  return (
    <Svg viewBox="-11.5 -10.23174 23 20.46348" {...props}>
      <Circle fill="#61dafb" r={2.05} />
      <G fill="none" stroke="#61dafb">
        <Ellipse rx={11} ry={4.2} />
        <Ellipse rx={11} ry={4.2} transform="rotate(60)" />
        <Ellipse rx={11} ry={4.2} transform="rotate(120)" />
      </G>
    </Svg>
  );
}

export default SvgComponent;
