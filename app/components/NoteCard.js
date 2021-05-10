import React, { useState } from "react";
import { TouchableWithoutFeedback } from "react-native";
import { Div, Text } from "react-native-magnus";
import ViewNoteScreen from "../screens/ViewNoteScreen";

export default NoteCard = ({ note, onAddNote }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const handleViewModal = (Boolean) => {
    setModalVisible(Boolean);
  };
  return (
    <>
      <TouchableWithoutFeedback onPress={() => handleViewModal(true)}>
        <Div my={7} bg="GREY_COLOR_2" py={10} w="100%" rounded="lg" px={15}>
          <Text
            numberOfLines={1}
            fontSize="4xl"
            fontWeight="bold"
            color="BLACK_COLOR_2"
            mt="lg"
            mb="xs"
          >
            {note.title}
          </Text>
          <Text fontSize="2xl" color="BLACK_COLOR_3" numberOfLines={1}>
            {note.content}
          </Text>
          <Text
            fontSize="3xl"
            color="GREY_COLOR_1"
            mt="xl"
            mb="md"
            numberOfLines={1}
          >
            {note.created_At}
          </Text>
        </Div>
      </TouchableWithoutFeedback>
      <ViewNoteScreen
        isVisible={modalVisible}
        handleViewModal={handleViewModal}
        note={note}
        onAddNote={onAddNote}
      />
    </>
  );
};
