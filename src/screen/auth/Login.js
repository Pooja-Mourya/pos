import React, {useState} from 'react';
import {StyleSheet, Text, View, Alert, StatusBar} from 'react-native';
import CustomInput from '../../component/CustomInput';
import CustomButton from '../../component/CustomButton';
import {Colors} from '../../constant/Colors';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/UserSlice';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch()
  const user = useSelector(state => state.user)


  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    dispatch(setUser({
      token: 'sample_token',
      userInfo: {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
      },
    }))
    console.log('Email:', email);
    console.log('Password:', password);
    setEmail('');
    setPassword('');
    navigation.navigate('RegisterCompany');
  };

  return (
    <View style={styles.container}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
      <Text style={styles.title} onPress={()=>navigation.navigate("Dashboard")}>Login</Text>
      <CustomInput
        label="Email"
        placeholder="Enter your email"
        iconName="mail-outline"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <CustomInput
        label="Password"
        placeholder="Enter your password"
        iconName="lock-closed-outline"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton
        title="Not Registered? Sign Up"
        onPress={() => navigation.navigate('Register')}
        style={styles.registerButton}
      />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: Colors.backColor,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primary,
    marginBottom: 20,
  },
  registerButton: {
    backgroundColor: Colors.secondary,
  },
});
