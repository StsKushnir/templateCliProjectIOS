import React from "react";
import Svg, { Circle, Path } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const AddIcon: React.FC<TabIconProps> = ({ width = 16, height = 16, fill = "#EF2A39" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 16 16" fill="none">
      <Circle cx="8" cy="8" r="8" fill={fill} />
      <Path d="M8 5V11" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <Path d="M5 8H11" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </Svg>
  );
};

export default AddIcon;
