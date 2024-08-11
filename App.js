import React from "react";
import { Text, View, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';
import AntDesign from '@expo/vector-icons/AntDesign'; //dm
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'; //notif
import { Image } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Octicons from '@expo/vector-icons/Octicons';

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
      <FontAwesome5 name="heart" size={24} color="black" style={[styles.icon, {left: 325}]} />

      <Image source={require('./assets/profile/glasses.jpg')} style={[styles.story]} />
      <Text style={[styles.textstory, {left: 12}]}>Your story</Text>

      <Image source={require('./assets/profile/pragoscerah.jpg')} style={[styles.story, {left:85}]} />
      <Text style={[styles.textstory, {left: 90}]}>pragos satu</Text>

      <Image source={require('./assets/profile/pragos dua.png')} style={[styles.story, {left:170}]} />
      <Text style={[styles.textstory, {left: 176}]}>pragos dua</Text>

      <Image source={require('./assets/profile/pragos tiga.png')} style={[styles.story, {left:255}]} />
      <Text style={[styles.textstory, {left: 262}]}>pragos tiga</Text>

      <Image source={require('./assets/profile/vigros.png')} style={[styles.story, {left:340}]} />
      <Text style={[styles.textstory, {left: 362}]}>vigros</Text>

      <Image source={require('./assets/profile/vigros.png')} style={[styles.feed]} />
      <Text style={[styles.textfeed]}>vigros</Text>
      <Text style={[styles.textfeedesc]}>los pollos hermanos</Text>
      <Image source={require('./assets/profile/birthday.png')} style={[styles.feedimg]} />
      <FontAwesome5 name="heart" size={24} color="black" style={[styles.feedreact, {}]} />
      <Feather name="message-circle" size={24} color="black" style={[styles.feedreact, {left:35}]}/>
      <SimpleLineIcons name="paper-plane" size={24} color="black" style={[styles.feedreact, {left:65}]}/>
      <Text style={[styles.feedlike, {top:185}]}>20 like</Text>
      <Text style={[styles.capname, {fontWeight: 'bold'}, {top:180}]}>vigros</Text>
      <Text style={[styles.cap, {}, {top:160}]}>           Today is my birthday, thanks all! </Text>

      <MaterialCommunityIcons name="home" size={35} color="black" style={[styles.menu, {left:20}]}/>
      <Octicons name="search" size={35} color="black" style={[styles.menu, {left:60}]}/>

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
    top: 20, // Adjust the value to position the icon vertically
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
  feed: {
    position: 'absolute',
    top: 170, // Adjust the value to position the icon vertically
    width: 40,
    height: 40,
    borderRadius: 20, // Make the image circular
    marginTop: 5, // Add space from the top
    borderWidth: 2,
    borderColor: 'blue',
    left:4
  },
  textfeed: {
    position: 'absolute',
    top: 175, 
    fontSize: 13,
    left:47,
    fontWeight: 'bold'
  },
  textfeedesc: {
    position: 'absolute',
    top: 190,   
    fontSize: 13,
    left:47
  },
  feedimg:
  {
    top:155
  },
  feedreact:
  {
    position: 'absolute',
    top:650,
    left:4
  },
  feedlike:
  {
    fontWeight: 'bold',
    left:7,
  },
  capname:
  {
    fontWeight: 'bold',
    left:7,
  },
  cap:
  {
    left:7,
  },
  menu:
  {
    flex: 1,
    justifyContent: 'space-between', // Menjadikan elemen berada di paling atas dan paling bawah halaman
    alignItems: 'flex-end', // Mengatur posisi elemen ke kanan halaman
    paddingTop: 20,
    position: 'relative',
    top:220,
  }
});

export default App;