import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type TaskItemProps = {
  task: {
    title: string;
    points: number;
  };
};

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{task.title}</Text>
      <Text style={styles.points}>{task.points} points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 14,
    color: '#4CAF50',
  },
});

export default TaskItem;



