import { Alert, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import CustomButton from '../component/CustomButton';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // 1000 milliseconds = 1 second
    
    // Clean up the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/contactless.jpg')}
        style={styles.backgroundImage}>
        <CustomButton
          title={'Register Company'}
          onPress={() => navigation.navigate('RegisterCompany')}
        />
        <CustomButton
          title={'Alter Company'}
          onPress={() => console.log('clicked')}
        />
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});
