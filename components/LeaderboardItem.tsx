import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type LeaderboardItemProps = {
  user: {
    name: string;
    points: number;
  };
  rank: number;
};

const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ user, rank }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.rank}>{rank}</Text>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.points}>{user.points} points</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  name: {
    fontSize: 16,
    flex: 1,
  },
  points: {
    fontSize: 14,
    color: '#4CAF50',
  },
});

export default LeaderboardItem;

