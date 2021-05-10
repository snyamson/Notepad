import React from "react";
import { Input } from "react-native-magnus";

export default function TextInput({
  placeholderTextColor = "GREY_COLOR_1",
  title,
  fontSize = "2xl",
  ...props
}) {
  return (
    <Input
      borderWidth={0}
      bg="GREY_COLOR_3"
      color="BLACK_COLOR_2"
      pl={0}
      placeholderTextColor={placeholderTextColor}
      placeholder={title}
      fontSize={fontSize}
      {...props}
    />
  );
}
