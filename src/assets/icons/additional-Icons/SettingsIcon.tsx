import React from "react";
import Svg, { Path } from "react-native-svg";
import { TabIconProps } from "../../../types/TabsIcon";

const SettingsIcon: React.FC<TabIconProps> = ({
  width = 24,
  height = 24,
  fill = "#FFFFFF",
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none" 
    >
      <Path
        d="M1.60679 18C2.43395 19.4356 4.26831 19.9288 5.7039 19.1017C5.70488 19.1011 5.70582 19.1005 5.70681 19.1L6.15179 18.843C6.99179 19.5616 7.95732 20.119 8.99977 20.487V21C8.99977 22.6568 10.3429 24 11.9998 24C13.6566 24 14.9998 22.6568 14.9998 21V20.487C16.0424 20.1184 17.0079 19.5604 17.8478 18.841L18.2948 19.099C19.7307 19.9274 21.5664 19.4349 22.3948 17.999C23.2232 16.563 22.7307 14.7274 21.2948 13.899L20.8508 13.643C21.0506 12.5554 21.0506 11.4405 20.8508 10.353L21.2948 10.097C22.7307 9.26855 23.2232 7.43292 22.3948 5.99695C21.5664 4.56103 19.7307 4.06852 18.2948 4.89694L17.8498 5.15395C17.0089 4.43616 16.0427 3.87984 14.9998 3.513V3C14.9998 1.34316 13.6566 0 11.9998 0C10.3429 0 8.99977 1.34316 8.99977 3V3.513C7.95718 3.88158 6.9916 4.43958 6.15179 5.15902L5.70479 4.90003C4.26882 4.07156 2.4332 4.56408 1.60477 6C0.776353 7.43592 1.26882 9.27159 2.70479 10.1L3.14879 10.356C2.94892 11.4435 2.94892 12.5584 3.14879 13.646L2.70479 13.902C1.27281 14.7326 0.781931 16.5647 1.60679 18ZM11.9998 8.00002C14.2089 8.00002 15.9998 9.79088 15.9998 12C15.9998 14.2091 14.2089 16 11.9998 16C9.79065 16 7.99979 14.2091 7.99979 12C7.99979 9.79088 9.79065 8.00002 11.9998 8.00002Z"
        fill={fill} 
      />
    </Svg>
  );
};

export default SettingsIcon;
