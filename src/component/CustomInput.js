import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constant/Colors';

const CustomInput = ({
  placeholder,
  iconName,
  secureTextEntry,
  onChangeText,
  value,
  keyboardType,
  label,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <>
      <Text
        style={{
          color: Colors.primary,
          textTransform: 'uppercase',
          fontWeight: '400',
          marginTop: 10,
        }}>
        {label}
      </Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputContainerFocused,
        ]}>
        <Icon name={iconName} size={20} style={styles.icon} />
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          value={value}
          keyboardType={keyboardType}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={styles.input}
          cursorColor={Colors.textColor}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: Colors.borderColor,
    borderRadius: 8,
    // paddingHorizontal: 12,
    // paddingVertical: 5,
    marginBottom: 5,
  },
  inputContainerFocused: {
    borderColor: Colors.textColor,
  },
  icon: {
    marginRight: 10,
    color: Colors.textColor,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: Colors.textColor,
  },
});

export default CustomInput;
