



// import { StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import {Formik} from 'formik'
// import * as Yup from 'yup'

//  const SignupSchema = Yup.object().shape({
//    name: Yup.string()
//      .min(2, 'Too Short!')
//      .max(50, 'Too Long!')
//      .required('Required'),

//  });

// export default function App() {
//   return (

//     <Formik initialValues={{
//        name:'',
//        email:'',
//        mobile:'',
//        password:'',
//        confirmPassword:'',
//     }}
//     validationSchema={SignupSchema}>
//       {({handleSubmit,errors  ,values,touched,handleChange,setFieldTouched,isValid}) =>{

//     
//       <Text style={styles.title}>sign up</Text>
//      
//       <TextInput style={styles.inputStyle} placeholder='Enter the Name'
//         name="name"
//         onChangeText={handleChange('name')}
//         onFocus={() => setFieldTouched('name')}
//         value={values.name}
//       />
//        {errors.name &&  touched.name && (
//         <Text style={styles.errorTxt}>{errors.name}</Text>
//   )}
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Enter your Email'/>
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Enter your Mobile no'/>
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Enter your password'/>
//       </View>
//       <View style={styles.inputWrapper}>
//       <TextInput style={styles.inputStyle} placeholder='Enter Confirm password'/>
//       </View>
//        <TouchableOpacity onPress={handleSubmit}>
//         <Text style={styles.submitBtn}>Sign up</Text>
//       </TouchableOpacity>
//     </View>
//    </View>
//       }}
//    </Formik>

//   );
// };

// const styles = StyleSheet.create({
//   wrapper:{
//     flex:1,
//     justifyContent:'center',
//     alignItems:'center',
//     backgroundColor:'#2C3333',
//     paddingHorizontal:15,
//   },
//   formContainer:{
//     backgroundColor:'#F5EDDC',
//     padding:20,
//     borderRadius:20,
//     width:'100%',
//   },
//   title:{
//     // backgroundColor:'#16213E',
//     fontSize:26,
//     fontWeight:'400',
//     marginBottom:15,

//   },
//   inputWrapper:{
//     marginBottom:15,
//   },
//   inputStyle:{
//     borderColor:'#16213E',
//     borderWidth:1,
//     borderRadius:10,
//     padding:10,
//   },
//   errorTxt:{
//     fontSize:12,
//     color:'#FF0D10',

//   },
//   submitBtn:{
//     backgroundColor:'#395B64',
//     padding:10,
//     borderRadius:15,

//   },
//   submitBtnTxt:{
//     color:'#fff',
//     textAlign:'center',
//     fontSize:18,
//     fontWeight:'700'

//   }
// })

// // // Formik x React Native example
// // // import React from 'react';
// // // import { Button, TextInput, View } from 'react-native';
// // // import { Formik } from 'formik';

// // // export default  MyReactNativeForm = props => (
// // //   <Formik
// // //     initialValues={{ email: '' }}
// // //     onSubmit={values => console.log(values)}
// // //   >
// // //     {({ handleChange, handleBlur, handleSubmit, values , errors }) => (
// // //       <View>
// // //         <TextInput
// // //           onChangeText={handleChange('email')}
// // //           onBlur={handleBlur('email')}
// // //           value={values.email}
// // //         />
// // //         {errors.email &&(
// // //         <Text style={styles.errorTxt}>{errors.email}</Text>
// // //    )}
// // //         <Button onPress={handleSubmit} title="Submit" />
// // //       </View>
// // //     )}
// // //   </Formik>
// // // );

// import React, {useState, useEffect} from 'react';

// // import {Picker} from '@react-native-picker/picker';

// import {
//   View,
//   Text,
//   TouchableOpacity,
//   StyleSheet,
//   Image,
//   Alert,
//   TextInput,
  
// } from 'react-native';

// // import {
// //   widthPercentageToDP as wp,
// //   heightPercentageToDP as hp,
// // } from 'react-native-responsive-screen';

// // import CheckBox from '@react-native-community/checkbox';



// // import {appStorage} from '../appStorage';

// // import {useNavigation} from '@react-navigation/native';

// import * as Yup from 'yup';

// import {Formik} from 'formik';

// import Input from './input';

// const signUpValidationSchema = Yup.object().shape({
//   // country: Yup

//   //     .string()

//   //     .matches(/(\w).+/, 'Enter correct Country')

//   //     .required('Full name is required'),

//   phoneNumber: Yup.string()

//     .matches(/^0|[1-9]\d*$/, 'Must be number')

//     .matches(/^\d{1,10}$/, 'Enter numbers only')

//     .min(10, 'Must be exactly 10 digits')

//     .max(10, 'Must be exactly 10 digits')

//     .required('Please enter your Mobile number'),

//   userName: Yup.string()

//     .matches(/^[a-zA-Z]+$/, 'avoid Numeric')

//     .matches(/^[^\s]+(\s+[^\s]+)*$/, 'Avoid whitespaces Enter correctly')

//     .required('Full name is required'),

//   Email: Yup.string()

//     .matches(/[^\s]*@[a-z0-9.-]*\./, 'Please Enter Valid Email Address')

//     .matches(/@[^\\.\\s@]/, 'valid')

//     .email('Please enter valid email')

//     .required('Email is required'),

//   password: Yup.string()

//     .matches(/\w*[a-z]\w*/, 'Password must have a small letter')

//     .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')

//     .matches(/\d/, 'Password must have a number')

//     .matches(
//       /[!@#$%^&*()\-_"=+{}; :,<.>]/,
//       'Password must have a special character',
//     )

//     .min(8, ({min}) => `Password must be at least ${min} characters`)

//     .required('Password is required'),

//   confirmpassword: Yup.string()

//     .oneOf([Yup.ref('password')], 'Passwords do not match')

//     .required('Confirm password is required'),
// });

// const App= () => {
//   // const navigation = useNavigation();

//   // const [values, setValues] = useState({country: "",phoneNumber: "",userName: "",Email: "",password: "" });

//   // const [toggleCheckBox, setToggleCheckBox] = useState(false);

//   // const [selectedLanguage, setSelectedLanguage] = useState();

//   // const drop = [
//   //   {
//   //     label: 'select the country',
//   //     value: '',
//   //   },

//   //   {
//   //     label: 'India',
//   //     value: 'java',
//   //   },

//   //   {
//   //     label: 'America',
//   //     value: 're',
//   //   },
//   //   {
//   //     label: 'China',
//   //     value: 'html',
//   //   },
//   // ];

//   // const validData = appStorage.getAllKeys();

//   // let validAll = validData.map(e => JSON.parse(appStorage.getString(e)));

//   // console.log(validAll);

//   // const numValid = validAll.map(e => e.phoneNumber);

//   // const emailValid = validAll.map(e => e.Email);

//   // console.log(numValid, emailValid);

//   // //    const valid = appStorage.clearAll()

//   // console.log(validData);

//   return (
    
//       <View style={styles.box}>
       
       
      

//       <Formik
//         initialValues={{
//           phoneNumber: '',

//           userName: '',

//           Email: '',

//           password: '',

//           confirmpassword: '',
//         }}
//         validationSchema={signUpValidationSchema}
//         // onSubmit={values => {
//         //   const hasUsername = appStorage.contains(values.userName);

//         //   if (hasUsername) {
//         //     Alert.alert(
//         //       'User Already Exist',
//         //       'Please signup another username',
//         //       [{text: 'OK'}],
//         //     );
//         //   } else if (numValid.includes(values.phoneNumber)) {
//         //     Alert.alert(
//         //       'Phone number Already Exist',
//         //       'Please signup another phonenumber',
//         //       [{text: 'OK'}],
//         //     );
//         //   } else if (emailValid.includes(values.Email)) {
//         //     Alert.alert('Email Already Exist', 'Please signup another Email', [
//         //       {text: 'OK'},
//         //     ]);
//         //   } else {
//         //     const drop = {Country: selectedLanguage};

//         //     const userData = values;

//         //     Object.assign(userData, drop);

//         //     console.log(drop);

//         //     setSelectedLanguage('');

//         //     let json = JSON.stringify(userData);

//         //     appStorage.set(values.userName, json);

//         //     Alert.alert('Successfully', 'SignUp', [
//         //       {text: 'OK', onPress: () => navigation.navigate('home')},
//         //     ]);

//         //     console.log(userData);
//         //   }
//         // }}
//         >
//         {({setFieldTouched, handleChange,
//           handleSubmit,
//           isValid,
//           values,
//           errors,
//           touched,
         
//         }) => (
//           <View>
//             {/* <Input placeholder='Country / Region'

//                         name={"country"}

//                         onChangeText={handleChange('country')}

 

//                         onBlur={()=> setFieldTouched('country')}

//                         value={values.country}

//                         secureTextEntry={false}

//                     />

 

//                     {touched.country&& errors.country &&

//                         <Text style={{ fontSize: 10, color: 'red' }}>{errors.country}</Text>

//                     } */}

//             <View >
//              <TextInput style={styles.all}
//                 placeholder="Phone number"
//                 name="phoneNumber"
//                 onChangeText={handleChange('phoneNumber')}
//                 onFocus={() => setFieldTouched('phoneNumber')}
//                 value={values.phoneNumber}
//                 secureTextEntry={false}
//             />

//               {errors.phoneNumber && touched.phoneNumber && (
//                 <Text style={{fontSize: 10, color: 'red'}}>
//                   {errors.phoneNumber}
//                 </Text>
//               )}
//             </View>

//             <View  >
//               <TextInput style={styles.all}
//                 placeholder="User name"
//                 name={'userName'}
//                 onChangeText={handleChange('userName')}
//                 onFocus={() => setFieldTouched('userName')}
//                 value={values.userName}
//                 secureTextEntry={false}
//               />

//               {errors.userName && touched.userName && (
//                 <Text style={{fontSize: 10, color: 'red'}}>
//                   {errors.userName}
//                 </Text>
//               )}
//             </View>

//             <View >
//               <TextInput style={styles.all}
//                 placeholder="Email"
//                 name={'Email'}
//                 onChangeText={handleChange('Email')}
//                 // onChangeText={(e) => handleChange("Email", e)}

//                 onFocus={() => setFieldTouched('Email')}
//                 value={values.Email}
//                 secureTextEntry={false}
//               />

//               {errors.Email && touched.Email && (
//                 <Text style={{fontSize: 10, color: 'red'}}>{errors.Email}</Text>
//               )}
//             </View>

//             <View  >
//               <TextInput style={styles.all}
//                 placeholder="password"
//                 name={'password'}
//                 onChangeText={handleChange('password')}
//                 onFocus={() => setFieldTouched('password')}
//                 value={values.password}
//                 secureTextEntry={true}
//               />

//               {errors.password && touched.password && (
//                 <Text style={{fontSize: 10, color: 'red'}}>
//                   {errors.password}
//                 </Text>
//               )}
//             </View>

//             <View >
//               <TextInput style={styles.all}
//                 placeholder="confirm password"
//                 name={'confirmpassword'}
//                 onChangeText={handleChange('confirmpassword')}
//                 onFocus={() => setFieldTouched('confirmpassword')}
//                 value={values.confirmpassword}
//                 secureTextEntry={true}
//               />

//               {errors.confirmpassword && touched.confirmpassword && (
//                 <Text style={{fontSize: 10, color: 'red'}}>
//                   {errors.confirmpassword}
//                 </Text>
//               )}
//             </View>

           
//               {/* <CheckBox
//                 disabled={false}
//                 value={toggleCheckBox}
//                 onValueChange={newValue => setToggleCheckBox(newValue)}
//                 tintColors={{true: '#1D3D6F'}}
//                 style={{
//                   marginLeft: wp(4.059999999999958),

//                   marginTop: hp(1.8800000000000014),
//                 }}
//               /> */}

//               {/* <Text
//                 style={{
//                   fontWeight: 600,
//                   fontSize: 16,
//                   marginLeft:10,
//                   marginTop: 'auto',
//                 }}>
//                 I accept the{' '}
//               </Text> */}
// {/* 
//               <Text
//                 style={{
//                   fontWeight: 600,
//                   fontSize: 16,
//                   color: '#275296',
//                   textDecorationLine: 'underline',
                 
//                 }}>
//                 Terms and Conditions
//               </Text> */}
           

//             <View>
//               <TouchableOpacity onPress={handleSubmit}>
//                 <Text style={styles.button}>Sign up</Text>
//               </TouchableOpacity>
//             </View>

//             <View
//               // style={{
//               //   display: 'flex',
//               //   flexDirection: 'row',
//               //   marginTop: 'auto',
//               //   justifyContent: 'center',
//               //   alignItems: 'center',
//               // }}
//               >
//               {/* <Text
//                 style={{fontWeight: 600, fontSize: 16, marginLeft: 'auto'}}>
//                 Already a user?
//               </Text> */}

//               {/* <Text
//                 style={{
//                   fontWeight: 600,
//                   fontSize: 16,
//                   color: '#275296',
//                   textDecorationLine: 'underline',
//                 }}>
//                 Sign in 
//               </Text> */}
//             </View>

//             {/* <Image
//               source={require('../assets/logo.png')}
//               style={styles.img}></Image> */}
//           </View>
//         )}
//       </Formik>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   button: {
   
    
//     top:100,
//     width:280,

//     backgroundColor: '#1D3D6F',

//     borderRadius: 9,

//     color: 'white',

//     textAlign: 'center',

//     padding: 10,
//   },

 
//   box: {
   

//     paddingTop: 80,

//     // paddingBottom: 18,

//     // width:'auto',

//     // height: 'auto',

//      left:30,

//     // marginTop: 'auto',

//     // marginLeft:'auto',

//     // // marginRight: 16,

//     // backgroundColor: '#ffffff',

//     // borderColor: '#C4C4C4',

  
//   },
//   all:{
//     borderWidth:1,
//     width:280,
//     marginTop:15,
//     paddingLeft:10,
//     top:80
    
  
    
    
//   }
// });

// export default App;
