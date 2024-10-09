import React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, Circle } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const AssistantLogoIcon: React.FC<TabIconProps> = ({
  width = 50,
  height = 50,
  fill = "",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 50" fill="none">
      <Circle cx="25" cy="25" r="25" fill="#3C2F2F" />
      <G clipPath="url(#clip0_1_628)">
        <Path
          d="M24.4524 27.0188C20.1906 27.404 16.9438 31.0051 17.0004 35.2838V35.5008C17.0004 36.3292 17.6719 37.0008 18.5004 37.0008C19.3288 37.0008 20.0004 36.3292 20.0004 35.5008V35.2238C19.9553 32.5967 21.894 30.3564 24.5004 30.0238C27.2516 29.751 29.7031 31.7601 29.9759 34.5114C29.9921 34.674 30.0002 34.8373 30.0003 35.0008V35.5008C30.0003 36.3292 30.6719 37.0008 31.5003 37.0008C32.3288 37.0008 33.0003 36.3292 33.0003 35.5008V35.0008C32.9955 30.5775 29.4057 26.9957 24.9825 27.0006C24.8057 27.0008 24.6288 27.0069 24.4524 27.0188Z"
          fill="white"
        />
        <Path
          d="M25.0004 25C28.3141 25 31.0004 22.3137 31.0004 19C31.0004 15.6863 28.3141 13 25.0004 13C21.6867 13 19.0004 15.6863 19.0004 19C19.0037 22.3123 21.6881 24.9967 25.0004 25ZM25.0004 16C26.6573 16 28.0004 17.3432 28.0004 19C28.0004 20.6568 26.6573 22 25.0004 22C23.3436 22 22.0004 20.6568 22.0004 19C22.0004 17.3432 23.3436 16 25.0004 16Z"
          fill="white"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_628">
          <Rect width="24" height="24" fill="white" transform="translate(13 13)" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default AssistantLogoIcon;
