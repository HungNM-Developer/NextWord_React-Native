// import { StatusBar } from 'expo-status-bar';
// import React from 'react';
// import { ImageBackground, Image, StyleSheet, Text, View } from 'react-native';

// export default function App() ext {
//   return (
//     <View style={styles.container}>
//     <ImageBackground source={require('./src/images/logo-small.png')} style={{width: '100%', height: '100%', backgroundColor:'#6777ef'}}/>
//   </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: "column"
//   },
//   // image: {
//   //   flex: 1,
//   //   resizeMode: "cover",
//   //   justifyContent: "center"
//   // },
//   text: {
//     color: "white",
//     fontSize: 42,
//     fontWeight: "bold",
//     textAlign: "center",
//     backgroundColor: "#009387"
//   }
// });

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/navigations/Navigator'
import * as Font from 'expo-font';
import {AppLoading} from 'expo'

export default class App extends React.Component{
  state = {
    isFontLoaded : false
  }
  async componentDidMount(){
    await Font.loadAsync({
      'MontserratBlack' : require('./src/fonts/Montserrat-Black.ttf'),
      'MontserratMedium' : require('./src/fonts/Montserrat-Medium.ttf'),
      'RobotoBlack': require('./src/fonts/Roboto-Black.ttf'),
      'RobotoBold': require('./src/fonts/Roboto-Bold.ttf'),
      'RobotoMedium': require('./src/fonts/Roboto-Medium.ttf'),
      'OpenSansBold': require('./src/fonts/OpenSans-Bold.ttf'),
      'OpenSansExtraBold': require('./src/fonts/OpenSans-ExtraBold.ttf'),
      'OpenSansSemiBold': require('./src/fonts/OpenSans-SemiBold.ttf'),
    });
    this.setState({isFontLoaded:true})
  }
  render(){
    return(
      (this.state.isFontLoaded === true) ? (<AppNavigator/>):(<AppLoading/>)
    );
  }
}
