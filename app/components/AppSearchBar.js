import React, { useState } from "react";
import { ActivityIndicator } from "react-native";
import { Div } from "react-native-magnus";
import SearchBar from "react-native-platform-searchbar";

export default function AppSearchBar() {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <SearchBar
      value={value}
      onChangeText={setValue}
      placeholder="Search here"
      theme="light"
      platform="ios"
      inputStyle={{ borderRadius: 50 }}
      iconColor="#A1A1A1"
      placeholderTextColor="#A1A1A1"
    >
      {loading ? (
        <ActivityIndicator color="#A1A1A1" style={{ marginRight: 20 }} />
      ) : undefined}
    </SearchBar>
  );
}
