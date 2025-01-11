import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import TaskItem from '../components/TaskItem';

type Task = {
  id: string;
  title: string;
  points: number;
};

type RootStackParamList = {
  TaskSubmission: { task: Task };
};

const TaskAssignmentScreen: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Mock data
  const tasks = [
    { id: '1', title: 'Clean kitchen', points: 50 },
    { id: '2', title: 'Vacuum living room', points: 30 },
    { id: '3', title: 'Do laundry', points: 40 },
    { id: '4', title: 'Clean bathroom', points: 60 },
  ];

  const handleTaskPress = (task: Task) => {
    navigation.navigate('TaskSubmission', { task });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Tasks</Text>
      <FlatList
        data={tasks}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleTaskPress(item)}>
            <TaskItem task={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TaskAssignmentScreen;

