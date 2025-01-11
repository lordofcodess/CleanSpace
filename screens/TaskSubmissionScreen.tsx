import React from 'react';
import { View, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';

type Props = NativeStackScreenProps<RootStackParamList, 'TaskSubmission'>;

const TaskSubmissionScreen: React.FC<Props> = ({ route }) => {
  const { task } = route.params;
  
  return (
    <View>
      <Text>Submit Task: {task.title}</Text>
    </View>
  );
};

export default TaskSubmissionScreen;

