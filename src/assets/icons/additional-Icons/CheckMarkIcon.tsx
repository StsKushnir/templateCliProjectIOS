import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const CheckMarkIcon: React.FC<TabIconProps> = ({
  width = 10,
  height = 10,
  fill = "white", 
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 10 10" fill="none">
      <G clipPath="url(#clip0_1_541)">
        <Path 
          d="M3.22883 8.60941C2.94497 8.60953 2.67274 8.49671 2.47219 8.29582L0.184609 6.00909C-0.0615362 5.76287 -0.0615362 5.36374 0.184609 5.11751C0.430832 4.87137 0.829961 4.87137 1.07618 5.11751L3.22883 7.27016L8.92382 1.57517C9.17004 1.32903 9.56917 1.32903 9.81539 1.57517C10.0615 1.8214 10.0615 2.22052 9.81539 2.46675L3.98547 8.29582C3.78492 8.49671 3.51269 8.60953 3.22883 8.60941Z" 
          fill={fill} 
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_541">
          <Rect width="10" height="10" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default CheckMarkIcon;
