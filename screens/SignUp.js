import React from 'react';
import { Text, View } from 'react-native';

function SignUp({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('Login')}>Login</Text>
    </View>
  );
}

export default SignUp;
