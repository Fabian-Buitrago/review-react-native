import React from "react";
import { View } from "react-native";
import Cat from "./Cat";

const CatsCafe = () => {
  return (
    <View>
      <Cat name="Maru" />
      <Cat name="Jellylorum" />
      <Cat name="Spot" />
    </View>
  );
};

export default CatsCafe;
