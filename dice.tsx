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
    return (
      <View style={styles.dice}>
        <Text style={styles.diceText}>{diceNumber}</Text>
      </View>
    );
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
    height: '10%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  diceWrapper: {
    marginHorizontal: 10,
  },
  dice: {
    height: '80%',
    aspectRatio: 1,
    borderRadius: '5%',
    borderWidth: 1,
    backgroundColor: 'white',
    borderColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  diceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
