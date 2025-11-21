import React, { useState } from "react";
import { View, TextInput, Button, TouchableOpacity, Text, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from "uuid";
import { styles, colors } from "./styles";

export default function AddNote({ navigation }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const saveNote = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Please enter a title for your note");
      return;
    }

    try {
      const storedNotes = await AsyncStorage.getItem("notes");
      let notes = storedNotes ? JSON.parse(storedNotes) : [];
      const newNote = {
        id: uuidv4(),
        title,
        description,
        createdAt: new Date().toISOString(),
      };
      notes.push(newNote);
      await AsyncStorage.setItem("notes", JSON.stringify(notes));
      navigation.goBack();
    } catch (error) {
      console.error("Error saving note:", error);
      Alert.alert("Error", "Failed to save note");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Title"
        placeholderTextColor={colors.muted}
        value={title}
        onChangeText={setTitle}
        style={[styles.input, { fontSize: 20, fontWeight: "bold" }]}
      />
      <TextInput
        placeholder="Write your note here..."
        placeholderTextColor={colors.muted}
        value={description}
        onChangeText={setDescription}
        style={[styles.input, { height: 200, textAlignVertical: "top" }]}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Note</Text>
      </TouchableOpacity>
    </View>
  );
}
