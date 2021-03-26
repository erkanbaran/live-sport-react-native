import * as React from 'react';
import {Svg, Path} from 'react-native-svg';

const UpArrowIcon = () => {
  return (
    <Svg viewBox="0 0 24 24" fill="black" width="18px" height="18px">
      <Path d="M0 0h24v24H0z" fill="none" />
      <Path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z" />
    </Svg>
  );
};

export default UpArrowIcon;
