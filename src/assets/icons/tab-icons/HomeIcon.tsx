import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const HomeIcon: React.FC<TabIconProps> = ({
  width = 24,
  height = 24,
  fill = "black",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill={fill} >
      <G clipPath="url(#clip0_1_123)">
        <Path
          d="M22.9747 8.69518L15.8887 1.60919C13.7393 -0.534728 10.2602 -0.534728 8.11071 1.60919L1.02472 8.69518C0.366223 9.35016 -0.00286988 10.2413 -0.00029176 11.1702V21.5481C0.00191136 22.9028 1.1001 24 2.45473 24.0011H21.5447C22.8993 24.0001 23.9975 22.9028 23.9997 21.5481V11.1702C24.0023 10.2413 23.6332 9.35016 22.9747 8.69518ZM20.9997 21.0012H15.9997V17.8191C15.9997 15.7105 14.2903 14.0011 12.1817 14.0011H11.8177C9.7091 14.0011 7.99971 15.7105 7.99971 17.8191V21.0012H2.9997V11.1702C3.00003 11.0376 3.05244 10.9104 3.14572 10.8162L10.2317 3.73019C11.2079 2.75373 12.7908 2.75355 13.7672 3.72972C13.7674 3.72986 13.7676 3.73004 13.7677 3.73019L20.8537 10.8162C20.9469 10.9104 20.9994 11.0376 20.9997 11.1702V21.0012H20.9997Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_123">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default HomeIcon;
