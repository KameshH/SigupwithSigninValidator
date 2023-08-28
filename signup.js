import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  TextInput,
 
} from 'react-native';
import * as Yup from 'yup';

import {Formik} from 'formik';
import AsyncStorage from '@react-native-async-storage/async-storage';



const signUpValidationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .matches(/^0|[1-9]\d*$/, 'Must be number')
    .matches(/^\d{1,10}$/, 'Enter numbers only')
    .min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
    .required('Please enter your Mobile number'),
  userName: Yup.string()
    .matches(/^[a-zA-Z]+$/, 'avoid Numeric')
    .matches(/^[^\s]+(\s+[^\s]+)*$/, 'Avoid whitespaces Enter correctly')
    .required('Full name is required'),
  Email: Yup.string()
    .matches(/[^\s]*@[a-z0-9.-]*\./, 'Please Enter Valid Email Address')
    .matches(/@[^\\.\\s@]/, 'valid')
    .email('Please enter valid email')
    .required('Email is required'),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      'Password must have a special character',
    )
    .min(8, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required'),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref('password')], 'Passwords do not match')
    .required('Confirm password is required'),
});

const Signup = ({navigation}) => {

  const [signupData, setSignupData] = useState([]);
  const [isEmailTaken, setIsEmailTaken] = useState(false);


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

   const handleSignup = async (values) => {
    if (signupData.some((data) => data.Email === values.Email)) {
      setIsEmailTaken(true);
      return;
    } else {
      setIsEmailTaken(false); 
    }
    
    const newSignupData = [...signupData, values];
    try {
      await AsyncStorage.setItem('signupData', JSON.stringify(newSignupData));
      setSignupData(newSignupData);
       console.log('New SignUp Data:', newSignupData);

      Alert.alert('Signup Successful', 'You have successfully signed up!', [
        { text: 'OK', onPress: () => navigation.navigate('Login') },
      ]);
    } catch (error) {
      console.error('Error saving signup data:', error);
    }
  };
  
  return (
   
      <Formik
        initialValues={{
          phoneNumber: '',

          userName: '',

          Email: '',

          password: '',

          confirmpassword: '',
        }}
        validationSchema={signUpValidationSchema}
        onSubmit={handleSignup}>
        {({
          setFieldTouched,
          handleChange,
          handleSubmit,
          isValid,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.box}>
            
              <TextInput
                style={styles.all}
                placeholder="Phone number"
                name="phoneNumber"
                onChangeText={handleChange('phoneNumber')}
                onFocus={() => setFieldTouched('phoneNumber')}
                value={values.phoneNumber}
              />
               {errors.phoneNumber && touched.phoneNumber && (
                <Text style={{ color: 'red', top:80,fontSize:12}}>
                  {errors.phoneNumber}
                </Text>
              )}
           
           
              <TextInput
                style={styles.all}
                placeholder="User name"
                name={'userName'}
                onChangeText={handleChange('userName')}
                onFocus={() => setFieldTouched('userName')}
                value={values.userName}
                secureTextEntry={false}
              />

              {errors.userName && touched.userName && (
                <Text style={{color: 'red',top:80,fontSize:12}}>
                  {errors.userName}
                </Text>
              )}
           
            
              <TextInput
                style={styles.all}
                placeholder="Email"
                name={'Email'}
                onChangeText={handleChange('Email')}
                // onChangeText={(e) => handleChange("Email", e)}

                onFocus={() => setFieldTouched('Email')}
                value={values.Email}
                secureTextEntry={false}
               
              />
               {isEmailTaken && (
                  <Text style={{fontSize: 10, color: 'red',top:80,fontSize:12}}>
                    This email is already taken. Please use a different email.
                  </Text>
                )}

              
            
            
              <TextInput
                style={styles.all}
                placeholder="password"
                name={'password'}
                onChangeText={handleChange('password')}
                onFocus={() => setFieldTouched('password')}
                value={values.password}
                secureTextEntry={true}
              />

              {errors.password && touched.password && (
                <Text style={{ color: 'red',top:80,fontSize:12}}>
                  {errors.password}
                </Text>
              )}
            
           
              <TextInput
                style={styles.all}
                placeholder="confirm password"
                name={'confirmpassword'}
                onChangeText={handleChange('confirmpassword')}
                onFocus={() => setFieldTouched('confirmpassword')}
                value={values.confirmpassword}
                secureTextEntry={true}
              />

              {errors.confirmpassword && touched.confirmpassword && (
                <Text style={{ color: 'red',top:80,fontSize:12}}>
                  {errors.confirmpassword}
                </Text>
              )}
            
           
            <TouchableOpacity onPress={handleSubmit}>
  <Text style={styles.button}>Sign up</Text>
</TouchableOpacity>
            </View>
            
         
        )}
      </Formik>

      
    
  );
};
const styles = StyleSheet.create({
  button: {
    top: 100,
    width: 290,

    backgroundColor: '#1D3D6F',

    borderRadius: 9,

    color: 'white',

    textAlign: 'center',

    padding: 10,
  },
  box: {
    paddingTop: 80,
    left: 30,
  },
  all: {
    borderWidth: 1,
    width: 290,
    marginTop: 15,
    paddingLeft: 10,
    top: 80,
    borderRadius: 9,
  },
});
export default Signup;
