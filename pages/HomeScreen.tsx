import React from 'react';
import {
  Button, StyleSheet, Text, View,
} from 'react-native';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../types';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

type Props = NativeStackScreenProps<StackParamList, 'Home'>;

function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button
        title="View Schedule"
        onPress={() => navigation.navigate('Schedule')}
      />
    </View>
  );
}

export default HomeScreen;
