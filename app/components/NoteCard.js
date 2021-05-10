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
        <Div my={5} bg="GREY_COLOR_2" w="100%" rounded="lg" px={15}>
          {note.title.length === 0 ? null : (
            <Text
              numberOfLines={1}
              fontSize="4xl"
              fontWeight="bold"
              color="BLACK_COLOR_2"
              mt="md"
            >
              {note.title}
            </Text>
          )}

          <Text
            fontSize="2xl"
            color="BLACK_COLOR_3"
            mt={note.title.length === 0 ? "lg" : null}
            numberOfLines={1}
          >
            {note.content}
          </Text>

          <Text
            fontSize="xl"
            color="GREY_COLOR_1"
            mt={13}
            mb="lg"
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
