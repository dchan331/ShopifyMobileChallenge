import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import HomeScreen from './screen/HomeScreen';
import PriceScreen from './screen/PriceScreen';
import QuantityScreen from './screen/QuantityScreen';


export default StackNavigator({
  Home: {screen: HomeScreen},
  Price: {screen: PriceScreen},
  Quantity: {screen: QuantityScreen}
}, {initialRouteName: 'Home'});
// 
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   searchBar:{
//     borderWidth: 2,
//     width: 300,
//     marginTop: 50,
//   }
// });
