import React, { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, Alert, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles, colors } from "./styles";

export default function NoteDetail({ route, navigation }) {
  const { note } = route.params;
  const [title, setTitle] = useState(note.title || "");
  const [description, setDescription] = useState(note.description || "");

  const saveNote = async () => {
    if (!title.trim()) {
      Alert.alert("Error", "Title cannot be empty");
      return;
    }

    const storedNotes = await AsyncStorage.getItem("notes");
    let notes = storedNotes ? JSON.parse(storedNotes) : [];

    // Update note with new content and modified timestamp
    notes = notes.map((n) =>
      n.id === note.id
        ? { ...n, title, description, createdAt: new Date().toISOString() } // Updating createdAt to bring it to top, or we could add updatedAt
        : n
    );

    await AsyncStorage.setItem("notes", JSON.stringify(notes));
    navigation.goBack();
  };

  const deleteNote = async () => {
    const performDelete = async () => {
      try {
        const storedNotes = await AsyncStorage.getItem("notes");
        let notes = storedNotes ? JSON.parse(storedNotes) : [];
        notes = notes.filter((n) => n.id !== note.id);
        await AsyncStorage.setItem("notes", JSON.stringify(notes));
        navigation.goBack();
      } catch (error) {
        console.error("Error deleting note:", error);
        Alert.alert("Error", "Failed to delete note");
      }
    };

    if (Platform.OS === "web") {
      if (window.confirm("Are you sure you want to delete this note?")) {
        performDelete();
      }
    } else {
      Alert.alert(
        "Delete Note",
        "Are you sure you want to delete this note?",
        [
          { text: "Cancel", style: "cancel" },
          {
            text: "Delete",
            style: "destructive",
            onPress: performDelete,
          },
        ]
      );
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={title}
        onChangeText={setTitle}
        placeholder="Title"
        placeholderTextColor={colors.muted}
        style={[styles.input, { fontSize: 20, fontWeight: "bold" }]}
      />
      <TextInput
        value={description}
        onChangeText={setDescription}
        placeholder="Write your note here..."
        placeholderTextColor={colors.muted}
        style={[styles.input, { height: 200, textAlignVertical: "top" }]}
        multiline
      />

      <TouchableOpacity style={styles.button} onPress={saveNote}>
        <Text style={styles.buttonText}>Save Changes</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={deleteNote}>
        <Text style={styles.deleteText}>Delete Note</Text>
      </TouchableOpacity>
    </View>
  );
}
