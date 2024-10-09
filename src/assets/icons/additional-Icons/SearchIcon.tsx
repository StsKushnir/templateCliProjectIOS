import React from "react";
import Svg, { Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const SearchIcon: React.FC<TabIconProps> = ({
  width = 24,
  height = 24,
  fill = "#3C2F2F",
}) => {
  return (
    <Svg width={width} height={height} viewBox="0 0 24 24" fill="none">
      <G clipPath="url(#clip0_1_61)">
        <Path
          d="M23.5612 21.4454L18.916 16.7983C22.3918 12.1535 21.444 5.57052 16.7993 2.0948C12.1545 -1.38092 5.5715 -0.433205 2.09578 4.21157C-1.37994 8.85634 -0.432228 15.4393 4.21255 18.9151C7.94361 21.7071 13.0682 21.7071 16.7993 18.9151L21.4464 23.5622C22.0304 24.1462 22.9772 24.1462 23.5611 23.5622C24.1451 22.9782 24.1451 22.0314 23.5611 21.4474L23.5612 21.4454ZM10.5446 18.0181C6.41658 18.0181 3.07017 14.6717 3.07017 10.5437C3.07017 6.4156 6.41658 3.06919 10.5446 3.06919C14.6727 3.06919 18.0191 6.4156 18.0191 10.5437C18.0147 14.6698 14.6709 18.0137 10.5446 18.0181Z"
          fill={fill}
        />
      </G>
      <Defs>
        <ClipPath id="clip0_1_61">
          <Rect width="24" height="24" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default SearchIcon;
