import React from "react";
import Svg, { Path, Circle } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

export const TabBarImg: React.FC<TabIconProps> = ({
  width = '100%',
  height = 70,
  fill = "#EF2A39",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 430 76" fill='#EF2A39'>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M179.588 20.677L161.5 21L144.5 0H-19V90H437V0H285.5L273.5 19L251.129 19.3995C244.21 32.2588 230.626 41 215 41C199.897 41 186.702 32.8343 179.588 20.677Z"
        fill={fill}
      />
      <Circle cx="144" cy="41" r="41" fill={fill} />
      <Circle cx="286" cy="41" r="41" fill={fill} />
    </Svg>
  );
};

