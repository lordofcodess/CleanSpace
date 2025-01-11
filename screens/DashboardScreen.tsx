import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TaskItem from '../components/TaskItem';
import LeaderboardItem from '../components/LeaderboardItem';

const DashboardScreen: React.FC = () => {
  // Mock data
  const tasks = [
    { id: '1', title: 'Clean kitchen', points: 50 },
    { id: '2', title: 'Vacuum living room', points: 30 },
  ];

  const leaderboard = [
    { id: '1', name: 'John', points: 500 },
    { id: '2', name: 'Jane', points: 450 },
    { id: '3', name: 'Bob', points: 400 },
  ];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={styles.statsContainer}>
        <Text style={styles.statsText}>Your Points: 350</Text>
        <Text style={styles.statsText}>Tasks Completed: 7</Text>
      </View>
      <Text style={styles.sectionTitle}>Ongoing Tasks</Text>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
      <Text style={styles.sectionTitle}>Leaderboard</Text>
      {leaderboard.map((user, index) => (
        <LeaderboardItem key={user.id} user={user} rank={index + 1} />
      ))}
    </ScrollView>
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
});

export default DashboardScreen;

