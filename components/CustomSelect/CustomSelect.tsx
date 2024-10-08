import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';


interface CustomSelectProps {
  data: any[];
  onSelect?: (option: string[] | null) => void;
  radio: boolean;
  type: 'PRIMARY' | 'SECONDARY';
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  data,
  onSelect,
  radio = false,
  type = 'PRIMARY',
}) => {
  type UserOptionType = string[] | null;

  const [userOption, setUserOption] = useState<UserOptionType>(
    radio ? null : []
  );

  const colors = { PRIMARY: '#6D828F', SECONDARY: '#457F9D' };

  const handleSelect = (selectItem: string) => {
    if (radio) {
      if (userOption && userOption.includes(selectItem)) {
        setUserOption(userOption.filter((item) => item !== selectItem));
      } else {
        setUserOption(userOption ? [...userOption, selectItem] : [selectItem]);
      }
    } else {
      setUserOption([selectItem]);
    }
  };

  useEffect(() => {
    onSelect?.(userOption);
  }, [userOption, onSelect]);

  const unselected = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    color: colors[type],
    borderColor: colors[type],
  };

  const selected = {
    backgroundColor: colors[type],
    color: '#FFF',
    borderColor: colors[type],
  };

  const getStyle = (
    item: string,
    baseStyle: StyleProp<ViewStyle | TextStyle>
  ) => {
    return userOption !== null && userOption.includes(item)
      ? [baseStyle, selected]
      : [baseStyle, unselected];
  };

  return (
    <View style={styles.container}>
      {data.map((item: string, index: number) => {
        return (
          <Pressable
            onPress={() => handleSelect(item)}
            style={getStyle(item, styles[`button_${type}`])}
            key={index}
          >
            <Text style={getStyle(item, styles[`text_${type}`])}>{item}</Text>
          </Pressable>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button_PRIMARY: {
    minWidth: 100,
    height: 50,
    margin: 10,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_PRIMARY: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button_SECONDARY: {
    minWidth: 50,
    height: 50,
    margin: 10,
    paddingHorizontal: 5,
    borderWidth: 3,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text_SECONDARY: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export { CustomSelect };
