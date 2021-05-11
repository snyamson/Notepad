import React, { useContext, useState } from "react";
import { Modal, Text, Header, Div, Image } from "react-native-magnus";
import { FlatList, Keyboard } from "react-native";
import HeaderButton from "../components/HeaderButton";
import AppSearchBar from "../components/AppSearchBar";
import { NotesContext } from "../contexts/NotesContext";

export default function SearchNoteScreen({
  isVisible,
  handleSearchModal,
  onAddNote,
}) {
  const [notes] = useContext(NotesContext);
  const [value, setValue] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(false);

  const renderItem = ({ item }) => (
    <NoteCard
      note={item}
      title={item.title}
      content={item.content}
      onAddNote={onAddNote}
    />
  );

  const toggleModal = () => {
    handleSearchModal(false);
    setValue("");
  };

  const searchFilterFunction = (text) => {
    if (text) {
      const newData = notes.filter((note) => {
        const itemData = note.title
          ? note.title.toUpperCase()
          : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredNotes(newData);
      setValue(text);
    } else {
      setFilteredNotes(notes);
      setValue(text);
    }
  };

  return (
    <Modal
      animationIn="zoomInUp"
      animationOut="fadeOut"
      backdropOpacity={0}
      isVisible={isVisible}
      onRequestClose={() => {
        Keyboard.dismiss();
        toggleModal();
      }}
      bg="GREY_COLOR_3"
    >
      <Header
        p="lg"
        bg="GREY_COLOR_3"
        shadow={0}
        prefix={
          <HeaderButton
            onPress={() => {
              Keyboard.dismiss();
              toggleModal();
            }}
            IconName="ios-arrow-back-sharp"
            pl="sm"
            mr="xl"
          />
        }
      >
        <AppSearchBar
          value={value}
          onFilter={searchFilterFunction}
          loading={loading}
        />
      </Header>
      <Div flex={1} mt="xl" px={10}>
        {filteredNotes.length === 0 ? (
          <Div flex={1} alignItems="center">
            <Image
              source={require("../assets/search.png")}
              h={100}
              w={100}
              mb="xl"
              mt={60}
            />
            <Text fontSize="xl">No search results</Text>
          </Div>
        ) : (
          <FlatList
            data={filteredNotes}
            keyExtractor={(note) => note.id.toString()}
            renderItem={renderItem}
            showsVerticalScrollIndicator={false}
          />
        )}
      </Div>
    </Modal>
  );
}
