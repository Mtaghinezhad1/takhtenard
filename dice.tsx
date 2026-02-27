import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dice = ({ dice }) => {

  const renderDice = (diceNumber) => {
    return (
      <View style={styles.dice}>
        <Text style={styles.diceText}>{diceNumber}</Text>
      </View>
    );
  };

  return (
    <View style={styles.diceContainer}>
      <View style={styles.dice}>
        <Text style={styles.diceText}>{dice[0]}</Text>
      </View>
      <View style={styles.dice}>
        <Text style={styles.diceText}>{dice[1]}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  diceContainer: {
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dice: {
    height: '80%',
    marginHorizontal: '5%',
    aspectRatio: 1,
    borderRadius: '10%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  diceText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Dice;
