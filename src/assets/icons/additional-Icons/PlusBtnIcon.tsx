import React from "react";
import Svg, { Path, G, Defs, Rect, Filter, FeFlood, FeColorMatrix, FeOffset, FeGaussianBlur, FeComposite, FeBlend } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const PlusBtnIcon: React.FC<TabIconProps> = ({
  width,
  height,
  fill = '',
}) => {
  return (
<Svg width="20" height="20" viewBox="0 0 14 14" fill="none">
<Path d="M2 7H12" stroke="white" stroke-width="3" stroke-linecap="round"/>
<Path d="M7 12L7 2" stroke="white" stroke-width="3" stroke-linecap="round"/>
</Svg>
  );
};

export default PlusBtnIcon;
