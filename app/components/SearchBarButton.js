import React, { useState } from "react";
import { Div, Text, Button, Icon } from "react-native-magnus";
import SearchNoteScreen from "../screens/SearchNoteScreen";

export default function SearchBarButton({ onAddNote }) {
  const [modalVisible, setModalVisible] = useState(false);
  const handleSearchModal = (Boolean) => {
    setModalVisible(Boolean);
  };
  return (
    <>
      <Div>
        <Button
          onPress={() => handleSearchModal(true)}
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
      <SearchNoteScreen
        isVisible={modalVisible}
        handleSearchModal={handleSearchModal}
        onAddNote={onAddNote}
      />
    </>
  );
}
