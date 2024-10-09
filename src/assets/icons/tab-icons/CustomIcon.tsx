import React from "react";
import Svg, { Path } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";
import { View } from "react-native";

const CustomIcon: React.FC<TabIconProps> = ({
  width = 24,
  height = 24,
  fill = "white",
}) => {
  return (
    <View>
      <Svg width={width} height={height} viewBox="0 0 22 22" fill={fill} >
        <Path
          d="M3 11H19"
          stroke={fill}
          strokeWidth="5"
          strokeLinecap="round"
        />
        <Path
          d="M11 19L11 3"
          stroke={fill}
          strokeWidth="5"
          strokeLinecap="round"
        />
      </Svg>
    </View>
  );
};

export default CustomIcon;
