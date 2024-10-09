declare module 'react-native-shadow' {
  import { ViewStyle } from 'react-native';
  
  interface ShadowProps {
    setting: {
      width: number;
      height: number;
      color: string;
      border: number;
      radius: number;
      opacity: number;
      x: number;
      y: number;
    };
    children?: React.ReactNode;
    style?: ViewStyle;
  }

  export class BoxShadow extends React.Component<ShadowProps> {}
}
