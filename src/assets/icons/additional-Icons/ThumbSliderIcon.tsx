import React from "react";
import Svg, { G, Rect, Defs, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const ThumbSliderIcon: React.FC<TabIconProps> = ({
  width = 66, 
  height = 70,
  fill = "#EF2A39",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 66 70" fill="none">
      <G filter="url(#filter0_d_1_151)">
        <Rect x="28" y="26" width="10" height="14" rx="4" fill={fill} />
        <Rect x="26.5" y="24.5" width="13" height="17" rx="5.5" stroke="white" strokeWidth="3" />
      </G>
      <Defs>
        <Filter id="filter0_d_1_151" x="0" y="0" width="66" height="70" filterUnits="userSpaceOnUse">
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
          <FeOffset dy="2" />
          <FeGaussianBlur stdDeviation="12.5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.6 0 0 0 0 0 0 0 0 0.25 0" />
          <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_151" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_151" result="shape" />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default ThumbSliderIcon;
