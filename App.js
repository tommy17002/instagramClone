import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign'; //dm
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; //notif
import { Image } from 'react-native';

const App = () => {
  const [loaded] = useFonts({
    Lobster: require('./assets/fonts/Lobster-Regular.ttf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textinsta}>Instagram</Text>

      <AntDesign name="message1" size={24} color="black" style={[styles.icon, {top:20}]}/>
      <FontAwesome5 name="heart" size={24} color="black" style={[styles.icon, {left: 325}, {top:20}]} />

      <Image source={require('./assets/profile/glasses.jpg')} style={[styles.story]} />
      <Text style={[styles.textstory, {left: 12}]}>Your story</Text>

      <Image source={require('./assets/profile/pragoscerah.jpg')} style={[styles.story, {left:85}]} />
      <Text style={[styles.textstory, {left: 90}]}>pragos satu</Text>

      <Image source={require('./assets/profile/pragos dua.png')} style={[styles.story, {left:170}]} />
      <Text style={[styles.textstory, {left: 176}]}>pragos dua</Text>

      <Image source={require('./assets/profile/pragos tiga.png')} style={[styles.story, {left:255}]} />
      <Text style={[styles.textstory, {left: 255}]}>pragos tiga</Text>

      <Image source={require('./assets/profile/vigros.png')} style={[styles.story, {left:340}]} />
      <Text style={[styles.textstory, {left: 362}]}>vigros</Text>

      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingTop: 20,
    position: 'relative',
  },
  icon: {
    position: 'absolute',
    top: 10, // Adjust the value to position the icon vertically
    right: 10, // Adjust the value to position the icon horizontally
  },
  textinsta: {
    fontFamily: 'Lobster',
    fontSize: 30,
  },
  story: {
    position: 'absolute',
    top: 60, // Adjust the value to position the icon vertically
    width: 80,
    height: 80,
    borderRadius: 40, // Make the image circular
    marginTop: 5, // Add space from the top
    borderWidth: 2,
    borderColor: 'blue'
  },
  textstory: {
    position: 'absolute',
    top: 140, 
    fontSize: 13,
  },

});

export default App;