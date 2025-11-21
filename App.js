import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NotesList from "./NotesList";
import NoteDetail from "./NoteDetail";
import "react-native-get-random-values";
import AddNote from "./AddNote";
import { colors } from "./styles";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: colors.background,
            elevation: 0, // Android remove shadow
            shadowOpacity: 0, // iOS remove shadow
            borderBottomWidth: 0,
          },
          headerTintColor: colors.primary,
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 28,
            color: colors.text,
          },
        }}
      >
        <Stack.Screen
          name="Notes"
          component={NotesList}
          options={{ title: "My Notes" }}
        />
        <Stack.Screen
          name="NoteDetail"
          component={NoteDetail}
          options={{ title: "Edit Note" }}
        />
        <Stack.Screen
          name="AddNote"
          component={AddNote}
          options={{ title: "Add Note" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
