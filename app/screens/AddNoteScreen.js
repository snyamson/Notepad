import React, { useState } from "react";
import { Modal, Div, Header, Text } from "react-native-magnus";
import { Keyboard } from "react-native";
import moment from "moment";
import { insertNewNote } from "../database/databaseApi";
import HeaderButton from "../components/HeaderButton";
import TextInput from "../components/TextInput";

export default function AddNoteScreen({ isVisible, handleModal, onAddNote }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [active, setActive] = useState("");
  return (
    <Modal
      onModalWillHide={() => {
        onAddNote(true);
      }}
      onModalWillShow={() => {
        setActive("");
        setTitle("");
        setContent("");
      }}
      isVisible={isVisible}
      animationIn="slideInRight"
      animationOut="slideOutRight"
      backdropOpacity={0}
      onRequestClose={() => handleModal(false)}
    >
      <Div flex={1} bg="GREY_COLOR_3">
        <Header
          p="lg"
          alignment="left"
          bg="GREY_COLOR_3"
          shadow={0}
          prefix={
            <HeaderButton
              onPress={() => handleModal(false)}
              IconName="ios-arrow-back-sharp"
            />
          }
          suffix={
            active.trim().length > 0 ? (
              <HeaderButton
                onPress={() => {
                  Keyboard.dismiss();
                  handleModal(false);
                  insertNewNote(title, content);
                }}
                IconName="ios-checkmark-sharp"
                pr="lg"
              />
            ) : null
          }
        >
          <Text ml="xl" fontSize="4xl" fontWeight="bold">
            Note
          </Text>
        </Header>
        <Text fontSize="2xl" ml="xl" py="lg" mb="lg">
          {moment().format("LLL")}
        </Text>
        <TextInput
          ml="xl"
          title="Title"
          p={10}
          fontSize={32}
          onChange={({ nativeEvent: { text } }) => {
            setActive(text);
          }}
          onChangeText={(text) => setTitle(text)}
        />
        <TextInput
          ml="xl"
          title="Note something down"
          p={10}
          placeholderTextColor="gray800"
          onChange={({ nativeEvent: { text } }) => {
            setActive(text);
          }}
          onChangeText={(text) => setContent(text)}
        />
      </Div>
    </Modal>
  );
}
