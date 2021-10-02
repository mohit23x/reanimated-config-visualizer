import * as React from 'react';
import { Slider } from './Slider';
import { ConfigType, SpringConfigType, SpringLimitType } from 'src/constants';
import { InputRenderer } from './InputRenderer';
import * as Clipboard from 'expo-clipboard';

export const WithSprings = ({
  config,
  step,
  limit,
  handleChange,
  onPlay,
  handleSetting,
}: {
  step: SpringConfigType;
  config: SpringConfigType;
  limit: SpringLimitType;
  handleChange: (a: Partial<ConfigType>) => void;
  onPlay: () => void;
  handleSetting: () => void;
}) => {
  const handleCopy = () => {
    Clipboard.setString(JSON.stringify(config));
  };

  return (
    <InputRenderer
      onPlay={onPlay}
      handleSetting={handleSetting}
      handleCopy={handleCopy}
    >
      <Slider
        stateKey={'damping'}
        value={config.damping}
        handleChange={handleChange}
        maximumValue={limit.damping}
        step={step.damping}
      />
      <Slider
        stateKey={'mass'}
        value={config.mass}
        handleChange={handleChange}
        maximumValue={limit.mass}
        step={step.mass}
      />
      <Slider
        stateKey={'stiffness'}
        value={config.stiffness}
        handleChange={handleChange}
        maximumValue={limit.stiffness}
        step={step.stiffness}
      />
      <Slider
        stateKey={'velocity'}
        value={config.velocity}
        handleChange={handleChange}
        maximumValue={limit.velocity}
        step={step.velocity}
      />
    </InputRenderer>
  );
};
