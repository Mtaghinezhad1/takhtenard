import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Dice = () => {
  const [currentDice1, setCurrentDice1] = useState(1);
  const [currentDice2, setCurrentDice2] = useState(1);
  const [randomNumber1, setRandomNumber1] = useState(1);
  const [randomNumber2, setRandomNumber2] = useState(1);
  const diceNumbers = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    // انتخاب اعداد رندوم بین ۱ تا ۶ برای دو تاس
    const random1 = Math.floor(Math.random() * 6) + 1;
    const random2 = Math.floor(Math.random() * 6) + 1;
    setRandomNumber1(random1);
    setRandomNumber2(random2);
    
    let index = 0;
    
    // نمایش تمام تاس‌ها با فاصله نیم ثانیه
    const interval = setInterval(() => {
      if (index < diceNumbers.length) {
        setCurrentDice1(diceNumbers[index]);
        setCurrentDice2(diceNumbers[diceNumbers.length - 1 - index]); // تاس دوم برعکس می‌چرخه
        index++;
      } else {
        clearInterval(interval);
        // بعد از اتمام، تاس مربوط به اعداد رندوم رو نشون بده
        setCurrentDice1(random1);
        setCurrentDice2(random2);
      }
    }, 100);

    // پاکسازی interval
    return () => clearInterval(interval);
  }, []);

  const renderDice = (diceNumber) => {
    switch (diceNumber) {
      case 1:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.centerDot]} />
          </View>
        );
      
      case 2:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.topLeftDot]} />
            <View style={[styles.dot, styles.bottomRightDot]} />
          </View>
        );
      
      case 3:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.centerDot]} />
            <View style={[styles.dot, styles.topLeftDot]} />
            <View style={[styles.dot, styles.bottomRightDot]} />
          </View>
        );
      
      case 4:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.topLeftDot]} />
            <View style={[styles.dot, styles.topRightDot]} />
            <View style={[styles.dot, styles.bottomLeftDot]} />
            <View style={[styles.dot, styles.bottomRightDot]} />
          </View>
        );
      
      case 5:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.centerDot]} />
            <View style={[styles.dot, styles.topLeftDot]} />
            <View style={[styles.dot, styles.topRightDot]} />
            <View style={[styles.dot, styles.bottomLeftDot]} />
            <View style={[styles.dot, styles.bottomRightDot]} />
          </View>
        );
      
      case 6:
        return (
          <View style={styles.dice}>
            <View style={[styles.dot, styles.topLeftDot]} />
            <View style={[styles.dot, styles.topRightDot]} />
            <View style={[styles.dot, styles.middleLeftDot]} />
            <View style={[styles.dot, styles.middleRightDot]} />
            <View style={[styles.dot, styles.bottomLeftDot]} />
            <View style={[styles.dot, styles.bottomRightDot]} />
          </View>
        );
      
      default:
        return null;
    }
  };

  return (
      <View style={styles.diceContainer}>
        <View style={styles.diceWrapper}>
          {renderDice(currentDice1)}
        </View>
        <View style={styles.diceWrapper}>
          {renderDice(currentDice2)}
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  diceContainer: {
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceWrapper: {
    marginHorizontal: 10,
  },
  dice: {
    width: 50,
    height: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#333',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  dot: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#333',
    position: 'absolute',
  },
  centerDot: {
    top: '50%',
    left: '50%',
    marginTop: -9,
    marginLeft: -9,
  },
  topLeftDot: {
    top: 15,
    left: 15,
  },
  topRightDot: {
    top: 15,
    right: 15,
  },
  middleLeftDot: {
    top: '50%',
    left: 15,
    marginTop: -9,
  },
  middleRightDot: {
    top: '50%',
    right: 15,
    marginTop: -9,
  },
  bottomLeftDot: {
    bottom: 15,
    left: 15,
  },
  bottomRightDot: {
    bottom: 15,
    right: 15,
  },
  label: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  total: {
    marginTop: 5,
    fontSize: 16,
    color: '#666',
  },
});

export default Dice;
