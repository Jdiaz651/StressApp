import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface CustomInputProps {
  value: string;
  setValue?: (text: string) => void;
  placeholder: string;
  secureTextEntry: boolean;
}

const CustomInput: React.FC<CustomInputProps> = ({
  value,
  setValue,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D6CBCB',
    width: '89%',
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginVertical: 8,
  },
  input: {
    fontWeight: '900',
    fontSize: 15,
    color: '#736468',
    paddingHorizontal: 10,
    flex: 1,
    justifyContent: 'center',
  },
});

export {CustomInput};
