import React from 'react';
import { Text, View } from 'react-native';

function Login({ navigation }) {
  return (
    <View>
      <Text onPress={() => navigation.navigate('SignUp')}>Create an account</Text>
    </View>
  );
}

export default Login;
