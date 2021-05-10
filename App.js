import { StatusBar } from "expo-status-bar";
import React from "react";
import { ThemeProvider, Div, Text } from "react-native-magnus";
import { theme } from "./app/config/theme";
import { NotesProvider } from "./app/contexts/NotesContext";
import HomeScreen from "./app/screens/HomeScreen";

export default function App() {
  return (
    <NotesProvider>
      <ThemeProvider theme={theme}>
        <HomeScreen />
      </ThemeProvider>
    </NotesProvider>
  );
}
