import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const DownArrowIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="black" width="18px" height="18px">
      <Path d="M0 0h24v24H0V0z" fill="none" />
      <Path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
    </Svg>
  );
};

export default DownArrowIcon;
