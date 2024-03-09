import * as React from 'react';
import { runOnJS, useFrameCallback } from 'react-native-reanimated';
import { AnimationCompProps } from 'src/types';
import { useEffect, useRef, useState } from 'react';
import Svg, { Polyline } from 'react-native-svg';
import { View } from 'react-native';

const LineChart = ({data, width, height} : {data: Array<number>, width: number, height: number}) => {
  const maxYValue = Math.max(...data);
  const minYValue = Math.min(...data);
  const points = data
    .map((point: number, index: number) => {
      const x = (width / (data.length - 1)) * index;
      const y = ((point - minYValue) / (maxYValue - minYValue)) * height;
      return `${x},${y}`;
    })
    .join(' ');
  // @ts-ignore
  return <View style={{ alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.01)' }}>
    <Svg height={height} width={width}>
      <Polyline
        points={points.length === 0 ? [0,0] : points}
        fill="none"
        stroke="black"
        strokeWidth="2"
      />
    </Svg>
  </View>
}

export const Chart = ({ x, running }: AnimationCompProps) => {
  const trackedValueRef = useRef<number[]>([])
  const [trackedValues, setTrackedValues] = useState<number[]>([]);

  const setValuesInRef = (newValue: number) => {
    trackedValueRef.current = [...trackedValueRef.current, newValue]
  }

  const frameCallback = useFrameCallback(() => {
    const currentValue = x.value;
    runOnJS(setValuesInRef)(currentValue);
  })

  useEffect(() => {
    if (!running && trackedValueRef.current.length !== 0) {
      frameCallback.setActive(false)
      setTrackedValues(trackedValueRef.current)
      trackedValueRef.current = []
    }
    if (running) {
      frameCallback.setActive(true)
    }
  }, [running]);



  return <LineChart data={trackedValues} width={200} height={200}/>

};

