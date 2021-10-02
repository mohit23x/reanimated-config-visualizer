import * as React from 'react';
import * as Clipboard from 'expo-clipboard';
import { EasingConfig } from 'src/constants/TimingConfig';
import { camelCaseToNormal, isFunction } from 'src/utils';
import { Slider } from './Slider';
import { Select } from './Select';
import { InputRenderer } from './InputRenderer';

const withTimingData = Object.keys(EasingConfig).map((d) => {
  return { label: d, value: d };
});

export const WithTiming = ({ handleChange, config, onPlay, handleSetting }) => {
  const [ease, setEase] = React.useState('linear');
  const [numSlider, setNumSlider] = React.useState({ show: false, value: 2 });

  const showNumSlider = () => setNumSlider({ show: true, value: 2 });
  const hideNumSlider = () => setNumSlider({ show: false, value: 2 });

  const calculateEasing = () => {
    const currentConfig = EasingConfig[ease];
    if (isFunction(currentConfig)) {
      const { config } = currentConfig(numSlider.value);
      handleChange({ easing: config });
    } else {
      handleChange({ easing: currentConfig.config });
    }
  };

  const handleCopy = () => {
    const currentConfig = EasingConfig[ease];
    if (currentConfig) {
      if (isFunction(currentConfig)) {
        const { copy } = currentConfig(numSlider.value);
        Clipboard.setString(`{ duration: ${config.duration}, easing: ${copy}}`);
      } else {
        Clipboard.setString(
          `{duration: ${config.duration}, easing: ${currentConfig.copy}}`
        );
      }
    }
  };

  const onChange = (val) => {
    const nextConfig = EasingConfig[val];
    isFunction(nextConfig) ? showNumSlider() : hideNumSlider();
    setEase(val);
  };

  const handleNumChange = (obj) => setNumSlider({ ...numSlider, ...obj });

  React.useEffect(() => {
    if (ease && numSlider) calculateEasing();
  }, [ease, numSlider]);

  return (
    <InputRenderer
      onPlay={onPlay}
      handleSetting={handleSetting}
      handleCopy={handleCopy}
    >
      <Select
        title="Easing"
        data={withTimingData}
        onValueChange={onChange}
        selectedValue={ease}
        labelFormatter={camelCaseToNormal}
      />
      {numSlider.show ? (
        <Slider
          stateKey={'value'}
          value={numSlider.value}
          handleChange={handleNumChange}
          maximumValue={15}
          step={1}
        />
      ) : null}
      <Slider
        stateKey={'duration'}
        value={config.duration}
        handleChange={handleChange}
        maximumValue={8000}
        step={10}
      />
    </InputRenderer>
  );
};
