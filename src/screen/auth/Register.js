import {StyleSheet, Text, View, Alert, ScrollView, StatusBar} from 'react-native';
import React, {useState} from 'react';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import {Colors} from '../../constant/Colors';

const Register = ({navigation}) => {
  const [form, setForm] = useState({
    businessName: '',
    userName: '',
    address: '',
    contact: '',
    password: '',
    businessType: '',
  });

  const handleInputChange = (name, value) => {
    setForm({...form, [name]: value});
  };

  const handleSubmit = () => {
    if (
      !form.businessName ||
      !form.userName ||
      !form.address ||
      !form.contact ||
      !form.password ||
      !form.businessType
    ) {
      Alert.alert('Validation Error', 'All fields are required.');
      return;
    }
    console.log('Form submitted with values:', form);
    navigation.navigate('Login');
  };

  return (
    
      <View style={styles.container}>
        <ScrollView>
          <StatusBar translucent={true} backgroundColor={'transparent'}/>
        <Text style={styles.header}>Register</Text>
        <CustomInput
          label="Business Name"
          placeholder="Enter your business name"
          iconName="business-outline"
          value={form.businessName}
          onChangeText={text => handleInputChange('businessName', text)}
        />
        <CustomInput
          label="User Name"
          placeholder="Enter your user name"
          iconName="person-outline"
          value={form.userName}
          onChangeText={text => handleInputChange('userName', text)}
        />
        <CustomInput
          label="Address"
          placeholder="Enter your address"
          iconName="home-outline"
          value={form.address}
          onChangeText={text => handleInputChange('address', text)}
        />
        <CustomInput
          label="Contact"
          placeholder="Enter your contact"
          iconName="call-outline"
          value={form.contact}
          onChangeText={text => handleInputChange('contact', text)}
          keyboardType="phone-pad"
        />
        <CustomInput
          label="Password"
          placeholder="Enter your password"
          iconName="lock-closed-outline"
          value={form.password}
          onChangeText={text => handleInputChange('password', text)}
          secureTextEntry
        />
        <CustomInput
          label="Business Type"
          placeholder="Enter your business type"
          iconName="briefcase-outline"
          value={form.businessType}
          onChangeText={text => handleInputChange('businessType', text)}
        />
        <CustomButton title="Register" onPress={handleSubmit} />
        <CustomButton
          title="Already have an account? Login"
          onPress={() => navigation.navigate('Login')}
          style={styles.loginButton}
        /></ScrollView>
      </View>
    
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.backColor,
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginVertical: 30,
  },
  loginButton: {
    backgroundColor: Colors.secondary,
  },
});
