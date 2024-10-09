import React from "react";
import Svg, {
  Path,
  G,
  Defs,
  Rect,
  Filter,
  FeFlood,
  FeColorMatrix,
  FeOffset,
  FeGaussianBlur,
  FeComposite,
  FeBlend,
} from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const MinusBtnIcon: React.FC<TabIconProps> = ({
  width = 40,
  height = 40,
  fill = "",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 66 66" fill="none">
      <G filter="url(#filter0_d_1_159)">
        <Rect x="13" y="6" width="40" height="40" rx="10" fill="#EF2A39" />
      </G>
      <Path d="M28 26H38" stroke="white" strokeWidth="3" strokeLinecap="round" />
      <Defs>
        <Filter
          id="filter0_d_1_159"
          x="0"
          y="0"
          width="66"
          height="66"
          filterUnits="userSpaceOnUse"
        >
          <FeFlood floodOpacity="0" result="BackgroundImageFix" />
          <FeColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <FeOffset dy="7" />
          <FeGaussianBlur stdDeviation="6.5" />
          <FeComposite in2="hardAlpha" operator="out" />
          <FeColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 0.6 0 0 0 0 0 0 0 0 0.31 0"
          />
          <FeBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_159" />
          <FeBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_159" result="shape" />
        </Filter>
      </Defs>
    </Svg>
  );
};

export default MinusBtnIcon;
