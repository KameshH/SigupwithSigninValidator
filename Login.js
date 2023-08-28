import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import  { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Login = () => {
  const navigation = useNavigation(); 

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const handleLogin = async () => {
    try {
      const data = await AsyncStorage.getItem('signupData');
      if (data) {
        const signupData = JSON.parse(data);
        
        // Find the user with the entered email
        const user = signupData.find((userData) => userData.Email === email);

        if (user && user.password === password) {
          // Login successful
          setLoginError(false);
          navigation.navigate('HomeScreen');
        } else {
          // Login failed
          setLoginError(true);
        }
      }
    } catch (error) {
      console.error('Error fetching signup data:', error);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.email}>
        <TextInput
          placeholder="Email or phone no"
          value={email}
          onChangeText={setEmail}
        />
      </View>
      <View style={styles.passwordcontainor}>
        <TextInput
          placeholder="password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
      <View style={styles.buttoncontainer}>
        <TouchableOpacity onPress={handleLogin}>
          <Text style={styles.button}>Login</Text>
        </TouchableOpacity>
      </View>
      {loginError && (
        <Text style={styles.errorText}>Invalid email or password</Text>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    // backgroundColor:'#3b5998',
    justifyContent: 'center',
  },
  email: {
    borderWidth: 1,
    width: 290,
    marginTop: 15,
    paddingLeft: 10,
    bottom: 80,
    borderRadius: 9,
  },

  passwordcontainor: {
    borderWidth: 1,
    width: 290,
    marginTop: 15,
    paddingLeft: 10,
    bottom: 80,
    borderRadius: 9,
  },
  buttoncontainer: {
    width: 280,
    top: 15,
    
  },
  stretch: {
    marginBottom: 50,
    width: 500,
    height: 150,
    resizeMode: 'center',
  },
 button:{
    bottom: 1,
    width: 290,

    backgroundColor: '#1D3D6F',

    borderRadius: 9,

    color: 'white',

    textAlign: 'center',

    padding: 10,
 },
 errorText: {
  color: 'red',
  marginTop: -100,
}

  
});
export default Login;
