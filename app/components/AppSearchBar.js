import React from "react";
import { ActivityIndicator } from "react-native";
import SearchBar from "react-native-platform-searchbar";

export default function AppSearchBar({ value, onFilter, loading }) {
  if (value.trim().length > 0) loading = true;

  return (
    <SearchBar
      value={value}
      onChangeText={(text) => onFilter(text)}
      onClear={(text) => onFilter("")}
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
