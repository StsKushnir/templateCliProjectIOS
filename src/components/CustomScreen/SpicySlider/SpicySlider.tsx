import MultiSlider from "@ptomasroos/react-native-multi-slider"
import { Text, View } from "react-native"
import {s} from './SpicySlider.style';
import { useState } from "react";

const SpicySlider = () => {
  const [spiceLevel, setSpiceLevel] = useState([0]); 

  const onSpiceLevelChange = (values: number[]) => {
    setSpiceLevel(values);
  };

  return (
    <View style={s.spicy}>
    <Text style={s.spicyTitle}>Spicy</Text>
    <MultiSlider
      values={spiceLevel}
      onValuesChange={onSpiceLevelChange}
      min={0}
      max={100}
      step={1}
      allowOverlap={false}
      snapped={true}
      trackStyle={s.trackStyle} 
      selectedStyle={s.selectedStyle}
      markerStyle={s.markerStyle}
      unselectedStyle={s.unselectedStyle}
      sliderLength={168}
    />
    <View style={s.typesSpicy}>
      <Text style={s.mild}>Mild</Text>
      <Text style={s.hot}>Hot</Text>
    </View>
  </View>
  )
}
export default SpicySlider;