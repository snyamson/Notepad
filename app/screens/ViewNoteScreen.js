import React, { useState, useContext } from "react";
import { Modal, Div, Header, Text } from "react-native-magnus";
import moment from "moment";
import * as SQLite from "expo-sqlite";
import { HeaderButton, TextInput } from "../components";
import { NotesContext } from "../contexts/NotesContext";

const db = SQLite.openDatabase("notesDB.db");

export default function AddNoteScreen({
  isVisible,
  handleViewModal,
  note,
  onAddNote,
}) {
  const [setNotes] = useContext(NotesContext);
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

  return (
    <Modal
      onModalHide={() => {
        onAddNote(true);
        setActive("");
        setUpdateTitle("");
        setUpdateContent("");
      }}
      isVisible={isVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
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
                onPress={() => {
                  updateNote();
                  handleViewModal(false);
                }}
                IconName="ios-checkmark-sharp"
                pr="lg"
              />
            ) : (
              <HeaderButton
                IconName="ios-trash-outline"
                onPress={() => console.log("delete this note", note.id)}
              />
            )
          }
        >
          <Text ml="xl" fontSize="4xl" fontWeight="bold">
            Note
          </Text>
        </Header>
        <Text fontSize="2xl" ml="xl" py="lg" mb="lg">
          {moment().format("LLL")}
        </Text>
        <Div px="xl">
          <TextInput
            defaultValue={note.title.length > 0 ? note.title : "Title"}
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
            onChangeText={(text) => setUpdateContent(text)}
          />
        </Div>
      </Div>
    </Modal>
  );
}
