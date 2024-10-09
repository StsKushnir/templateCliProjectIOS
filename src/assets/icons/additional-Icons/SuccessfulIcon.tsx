import React from "react";
import Svg, { Path } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const SuccessfulIcon: React.FC<TabIconProps> = ({
  width = 47,
  height = 34,
  fill = "white",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 47 34" fill="none">
      <Path d="M18 28.3345L41.3345 5.00001" stroke={fill} strokeWidth="10" strokeLinecap="round" />
      <Path d="M18 28.3345L5 17" stroke={fill} strokeWidth="10" strokeLinecap="round" />
    </Svg>
  );
};

export default SuccessfulIcon;
