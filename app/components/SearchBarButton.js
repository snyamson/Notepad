import React from "react";
import { Div, Text, Button, Icon } from "react-native-magnus";
import SearchBar from "react-native-platform-searchbar";

export default function SearchBarButton({ onPress }) {
  return (
    <Div>
      <Button
        onPress={onPress}
        block
        prefix={
          <Icon
            position="absolute"
            left={8}
            name="ios-search-outline"
            color="GREY_COLOR_1"
            fontFamily="Ionicons"
            fontSize="2xl"
          />
        }
        bg="GREY_COLOR_2"
        p={12}
        rounded="circle"
        mb="md"
      >
        <Text fontSize="2xl" ml="-50%" color="GREY_COLOR_1">
          Search notes
        </Text>
      </Button>
    </Div>
  );
}
