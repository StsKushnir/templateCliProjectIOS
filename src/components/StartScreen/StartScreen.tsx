import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { s } from "./StartScreen.styles";
import { NavigationProps } from "../../types/NavigationTypes";
import StartLogoIcon from "../../assets/icons/startScreen-icons/StartLogoIcon";
import { StartBigBurg } from "../../assets/icons/startScreen-icons/StartBigBurg";
import { StartSmallBurg } from "../../assets/icons/startScreen-icons/StartSmallBurg";
import { ms } from "react-native-size-matters";

const StartScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const bigBurgOpacity = useRef(new Animated.Value(0)).current;
  const smallBurgOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(logoOpacity, {
      toValue: 1,
      duration: 900,
      useNativeDriver: true,
    }).start(() => {
      Animated.timing(bigBurgOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        Animated.timing(smallBurgOpacity, {
          toValue: 1,
          duration: 700,
          useNativeDriver: true,
        }).start();
      });
    });

    const timer = setTimeout(() => {
      navigation.replace("Main");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation, logoOpacity, bigBurgOpacity, smallBurgOpacity]);

  return (
    <LinearGradient
      colors={["#FF939B", "#EF2A39"]}
      start={{ x: 0.1, y: 0 }}
      end={{ x: 0.6, y: 1 }}
      style={s.gradient}
    >
      <View style={s.container}>
        <Animated.View style={[s.logo, { opacity: logoOpacity }]}>
          <StartLogoIcon width={ms(172)} height={ms(75)} fill="#FFFFFF" />
        </Animated.View>
        <Animated.View style={[s.bigBurg, { opacity: bigBurgOpacity }]}>
          <StartBigBurg width={ms(246 * 0.8)} height={ms(288 * 0.8)} />
        </Animated.View>
        <Animated.View style={[s.smallBurg, { opacity: smallBurgOpacity }]}>
          <StartSmallBurg width={ms(202 * 0.8)} height={ms(202 * 0.8)} />
        </Animated.View>
      </View>
    </LinearGradient>
  );
};

export default StartScreen;
