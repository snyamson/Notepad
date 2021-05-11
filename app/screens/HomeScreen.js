import React, { useContext, useEffect, useState } from "react";
import { Div, Text, Image } from "react-native-magnus";
import { FlatList } from "react-native";
import { NotesContext } from "../contexts/NotesContext";
import NoteCard from "../components/NoteCard";
import AppButton from "../components/AppButton";
import SearchBarButton from "../components/SearchBarButton";
import AddNoteScreen from "./AddNoteScreen";
import { setUpDatabase } from "../database/databaseApi";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("notesDB.db");

export default function HomeScreen() {
  const [notes, setNotes] = useContext(NotesContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [addedNote, setAddedNote] = useState(false);

  const renderItem = ({ item }) => (
    <NoteCard
      note={item}
      title={item.title}
      content={item.content}
      onAddNote={checkAddedNote}
    />
  );

  const handleModal = (Boolean) => {
    setModalVisible(Boolean);
  };

  const checkAddedNote = () => {
    setAddedNote(!addedNote);
  };

  useEffect(() => {
    setUpDatabase();
    fetchNotes();
  }, [addedNote]);

  const fetchNotes = () => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM note ORDER BY id DESC",
        null,
        (txObj, { rows: { _array } }) => {
          setNotes(_array);
        },
        (txObj, error) => console.log("Error ", error)
      );
    });
  };

  return (
    <>
      <Div flex={1} bg="GREY_COLOR_3" py={20} px={15} pb={5}>
        <Div h="15%">
          <Text fontSize={40} fontWeight="bold" mt="17%">
            Notepad
          </Text>
        </Div>
        {notes.length === 0 ? (
          <Div flex={1} alignItems="center">
            <Image
              source={require("../assets/notebook.png")}
              h={250}
              w={350}
              mt={60}
              mb="2xl"
            />
            <Text fontSize="xl">
              A record of your past path and a reminder of your future steps
            </Text>
          </Div>
        ) : (
          <Div>
            <SearchBarButton onAddNote={checkAddedNote} />
            <FlatList
              data={notes}
              keyExtractor={(note) => note.id.toString()}
              renderItem={renderItem}
              showsVerticalScrollIndicator={false}
            />
          </Div>
        )}

        <AppButton onPress={() => handleModal(true)} />
      </Div>
      <AddNoteScreen
        isVisible={modalVisible}
        handleModal={handleModal}
        onAddNote={checkAddedNote}
      />
    </>
  );
}
