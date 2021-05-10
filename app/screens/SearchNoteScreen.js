import React from "react";
import { Modal, Text, Header } from "react-native-magnus";
import HeaderButton from "../components/HeaderButton";
import AppSearchBar from "../components/AppSearchBar";

export default function SearchNoteScreen({ isVisible, handleSearchModal }) {
  return (
    <Modal
      animationIn="zoomInUp"
      animationOut="fadeOut"
      backdropOpacity={0}
      isVisible={isVisible}
      onRequestClose={() => handleSearchModal(false)}
    >
      <Header
        p="lg"
        bg="GREY_COLOR_3"
        shadow={0}
        prefix={
          <HeaderButton
            onPress={() => handleSearchModal(false)}
            IconName="ios-arrow-back-sharp"
            pl="sm"
            mr="xl"
          />
        }
      >
        <AppSearchBar />
      </Header>
    </Modal>
  );
}
