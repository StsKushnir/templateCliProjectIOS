import React from "react";
import Svg, { Path } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const SupportMenuIcon: React.FC<TabIconProps> = ({ width = 24, height = 12, fill = "" }) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 12" fill="none">
      <Path
        d="M2 2H22"
        stroke="#3C2F2F"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <Path
        d="M10 10.5H22"
        stroke="#3C2F2F"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default SupportMenuIcon;
