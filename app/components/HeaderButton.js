import React from "react";
import { Button, Icon } from "react-native-magnus";

export default function HeaderButton({
  onPress,
  IconName,
  fontFamily = "Ionicons",
  ...props
}) {
  return (
    <Button bg="transparent" onPress={onPress} p={-10} pl="lg" {...props}>
      <Icon
        name={IconName}
        fontFamily={fontFamily}
        fontSize={30}
        color="LIGHT_BLUE_COLOR"
      />
    </Button>
  );
}
