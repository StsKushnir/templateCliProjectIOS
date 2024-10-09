import { ms, ScaledSheet } from 'react-native-size-matters';

export const s = ScaledSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    top: ms(282 * 0.8), 
  },
  bigBurg: {
    position: 'absolute',
    bottom: '0@vs', 
    left: '-6@s', 
  },
  smallBurg: {
    position: 'absolute',
    bottom: '-14@vs', 
  },
});
