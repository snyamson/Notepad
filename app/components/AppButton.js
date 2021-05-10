import React from "react";
import { Div, Button, Icon } from "react-native-magnus";

export default function AppButton({ onPress }) {
  return (
    <Div
      position="absolute"
      bottom={20}
      alignSelf="center"
      rounded="circle"
      overflow="hidden"
      shadow="sm"
      shadowColor="LIGHT_BLUE_COLOR"
    >
      <Button onPress={onPress} bg="LIGHT_BLUE_COLOR" h={60} w={60} shadow="xs">
        <Icon name="plus" fontSize={30} color="white" />
      </Button>
    </Div>
  );
}
