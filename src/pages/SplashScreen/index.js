import React from 'react';
import { View, Image } from 'react-native';
import Logo from '../../assets/illustration/LogoDriver.png';

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: '#3B1E54',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image source={Logo} style={{ width: 200, height: 200 }} /> {/* Adjust size as needed */}
    </View>
  );
};

export default SplashScreen;
