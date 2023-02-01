import React from "react";
import { Text, View } from "react-native";

export type Props = {
  name: string;
};

const Cat = (props: Props) => {
  return (
    <View>
      <Text>Hello, I am {props.name}!</Text>
    </View>
  );
};

export default Cat;
