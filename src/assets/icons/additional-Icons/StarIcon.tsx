import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const StarIcon: React.FC<TabIconProps> = ({
  width,
  height,
  fill = "#FF9633", 
}) => {
  return (
    <Svg width={width || 16} height={height || 16} viewBox="0 0 16 16" fill="none">
      <G clipPath="url(#clip0_1_85)">
        <Path d="M12.9781 15.5434L8.00013 11.8848L3.02213 15.5434L4.93346 9.63478L-0.0418701 5.99945H6.1008L8.00013 0.08078L9.89946 5.99945H16.0415L11.0668 9.63478L12.9781 15.5434Z" fill={fill} />
      </G>
      <Defs>
        <ClipPath id="clip0_1_85">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default StarIcon;
