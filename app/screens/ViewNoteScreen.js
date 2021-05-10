import React, { useState, useContext } from "react";
import { Modal, Div, Header, Text } from "react-native-magnus";
import moment from "moment";
import * as SQLite from "expo-sqlite";
import HeaderButton from "../components/HeaderButton";
import TextInput from "../components/TextInput";
import { deleteNote } from "../database/databaseApi";

const db = SQLite.openDatabase("notesDB.db");

export default function AddNoteScreen({
  isVisible,
  handleViewModal,
  note,
  onAddNote,
}) {
  const [active, setActive] = useState("");
  const [updateTitle, setUpdateTitle] = useState(note.title);
  const [updateContent, setUpdateContent] = useState(note.content);

  const updateNote = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "UPDATE note SET title=?, content=?, created_At=? WHERE id=?;",
        [
          updateTitle,
          updateContent,
          moment().format("LLL").toString(),
          note.id,
        ],
        (txObj, resultSet) => console.log(resultSet),
        (txObj, error) => console.error("Error Updating the note: ", error)
      );
    });
  };

  const cleanUp = () => {
    setActive("");
    setUpdateTitle("");
    setUpdateContent("");
  };

  return (
    <Modal
      onModalWillHide={() => {
        onAddNote(true);
      }}
      isVisible={isVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={0}
      onRequestClose={() => handleViewModal(false)}
    >
      <Div flex={1} bg="GREY_COLOR_3">
        <Header
          p="lg"
          alignment="left"
          bg="GREY_COLOR_3"
          shadow={0}
          prefix={
            <HeaderButton
              IconName="ios-arrow-back-sharp"
              onPress={() => handleViewModal(false)}
            />
          }
          suffix={
            active.length > 0 ? (
              <HeaderButton
                onPress={async () => {
                  updateNote();
                  handleViewModal(false);
                  await cleanUp();
                }}
                IconName="ios-checkmark-sharp"
                pr="lg"
              />
            ) : (
              <HeaderButton
                IconName="ios-trash-outline"
                onPress={async () => {
                  await handleViewModal(false);
                  await deleteNote(note.id);
                }}
              />
            )
          }
        >
          <Text ml="xl" fontSize="4xl" fontWeight="bold">
            Note
          </Text>
        </Header>
        <Text fontSize="3xl" ml="xl" py="lg" mb="lg">
          {note.created_At}
        </Text>
        <Div px="xl">
          <TextInput
            defaultValue={note.title}
            title="Title"
            multiline
            fontSize={32}
            onChangeText={(text) => setUpdateTitle(text)}
            onChange={({ nativeEvent: { text } }) => {
              setActive(text);
            }}
          />

          <TextInput
            defaultValue={note.content}
            multiline
            placeholderTextColor="gray800"
            title="Note something down"
            onChangeText={(text) => setUpdateContent(text)}
            onChange={({ nativeEvent: { text } }) => {
              setActive(text);
            }}
          />
        </Div>
      </Div>
    </Modal>
  );
}
