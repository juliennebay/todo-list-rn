import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = props => {
  return (
    <TouchableOpacity
      style={{ borderRadius: 10 }}
      activeOpacity={0.8}
      onPress={() => props.onDelete(props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#f0f5f5",
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 3
  }
});

export default GoalItem;
