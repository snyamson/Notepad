import React from "react";
import { Button, Icon } from "react-native-magnus";

export default function HeaderButton({
  onPress,
  IconName,
  fontFamily = "Ionicons",
  fontSize = 30,
  ...props
}) {
  return (
    <Button bg="transparent" onPress={onPress} p={-10} pl="lg" {...props}>
      <Icon
        name={IconName}
        fontFamily={fontFamily}
        fontSize={fontSize}
        color="LIGHT_BLUE_COLOR"
      />
    </Button>
  );
}
