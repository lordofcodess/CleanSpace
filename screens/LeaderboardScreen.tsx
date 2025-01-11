import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LeaderboardItem from '../components/LeaderboardItem';

type User = {
  id: string;
  name: string;
  points: number;
};

const LeaderboardScreen: React.FC = () => {
  // Mock data
  const users: User[] = [
    { id: '1', name: 'John', points: 500 },
    { id: '2', name: 'Jane', points: 450 },
    { id: '3', name: 'Bob', points: 400 },
    { id: '4', name: 'Alice', points: 350 },
    { id: '5', name: 'Charlie', points: 300 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Leaderboard</Text>
      <FlatList
        data={users}
        renderItem={({ item, index }) => (
          <LeaderboardItem user={item} rank={index + 1} />
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

export default LeaderboardScreen;

