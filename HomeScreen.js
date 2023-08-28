// HomeScreen.js
import React from 'react';
import  { useState, useEffect } from 'react';
import { View, Text, StyleSheet,ScrollView} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




const HomeScreen = () => {
    const [signupData, setSignupData] = useState([]);
  
    useEffect(() => {
      async function fetchSignupData() {
        try {
          const data = await AsyncStorage.getItem('signupData');
          if (data) {
            setSignupData(JSON.parse(data));
          }
        } catch (error) {
          console.error('Error fetching signup data:', error);
        }
      }
      fetchSignupData();
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
          {/* <Text>Welcome to the Home Screen!</Text> */}
          {signupData.map((user, index) => (
            <View key={index} style={styles.userData}>
              <Text>Email: {user.Email}</Text>
              <Text>User Name: {user.userName}</Text>
              <Text>Phone Number: {user.phoneNumber}</Text>
              <Text>Password: {user.password}</Text>
              <Text>confirmPassword: {user.confirmpassword}</Text>
              
            </View>
          ))}
          </ScrollView>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
      scrollView: {
        width: '100%',
        alignContent:'center',
        padding:10,
        left:30
        
      },
      userData: {
        borderWidth: 1,
        padding: 10,
        marginVertical: 5,
        width: '80%',
        bottom:25,
        top:10,
        backgroundColor:'yellow'
        
      },
    });
    
    export default HomeScreen;