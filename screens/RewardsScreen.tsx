import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

type Reward = {
  id: string;
  title: string;
  points: number;
};

const RewardsScreen: React.FC = () => {
  // Mock data
  const rewards: Reward[] = [
    { id: '1', title: 'Free Coffee', points: 100 },
    { id: '2', title: 'Movie Ticket', points: 200 },
    { id: '3', title: 'Restaurant Voucher', points: 500 },
  ];

  const renderRewardItem = ({ item }: { item: Reward }) => (
    <View style={styles.rewardItem}>
      <Text style={styles.rewardTitle}>{item.title}</Text>
      <Text style={styles.rewardPoints}>{item.points} points</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rewards</Text>
      <Text style={styles.subtitle}>Redeem your points for these awesome rewards!</Text>
      <FlatList
        data={rewards}
        renderItem={renderRewardItem}
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
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  rewardItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  rewardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rewardPoints: {
    fontSize: 16,
    color: '#4CAF50',
  },
});

export default RewardsScreen;

