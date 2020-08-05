//import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, View, Button, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = enteredGoal => {
    if (enteredGoal.length === 0) {
      return;
    }
    setGoalList([...goalList, { key: enteredGoal, value: enteredGoal }]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalKey => {
    setGoalList(currentGoalList => {
      return currentGoalList.filter(goal => goal.value !== goalKey);
    });
  };

  const cancelGoalAddition = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Items" onPress={() => setIsAddMode(true)} />
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAddition}
      />
      <FlatList
        data={goalList}
        renderItem={itemData => (
          <GoalItem
            id={itemData.item.key}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
