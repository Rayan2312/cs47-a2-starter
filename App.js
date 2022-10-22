import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View, StatusBar , Image} from 'react-native';
import { useFonts } from 'expo-font';
import { Themes, navBarHeight, navBarTextSize } from './assets/Themes';
import {PressableIcon, AudioPlayer, Profile} from './assets/Components';
import defaultIcons from './assets/Icons/index.js';
import defaultProfiles from './assets/Profiles/index.js';
import { useEffect, useState } from 'react';


export default function App() {
  const [currTheme, setCurrThem] = useState(Themes.light);
  const [styles, setStyles] = useState(createStyle(Themes.light));

  useEffect(()=>{
    setStyles(createStyle(currTheme));
  }, [currTheme])
  let [fontsLoaded] = useFonts({
    Sydney: require('./assets/Fonts/Sydney-Serial-Regular.ttf'),
    SydneyBold: require('./assets/Fonts/Sydney-Serial-Bold.ttf'),
  });


  if (!fontsLoaded) return <AppLoading />;
  /* ^Don't mind/edit the code above, it's there to load the font for you! */
  StatusBar.setBarStyle(Themes.dark.statusBar);
  /* ^Don't mind/edit this one either unless you decide to do the dark theme one, in that case, you will have to change it accordingly*/
  /* insert your code here */

  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.header}>
      <PressableIcon theme={currTheme} url={currTheme === Themes.light? defaultIcons.menu.light : defaultIcons.menu.dark}/>
      <Text style={styles.text}>ensom</Text>
      <PressableIcon theme={currTheme}  url={currTheme === Themes.light? defaultIcons.sun : defaultIcons.moon} onPress={()=>{ currTheme === Themes.light? setCurrThem(Themes.dark) : setCurrThem(Themes.light)}} />
      </View>
      <Profile url={defaultProfiles.mtl.image} profileName={defaultProfiles.mtl.name} profileDistance={defaultProfiles.mtl.caption} />
      <AudioPlayer theme={currTheme} trackTitle={"My Hot Takes"} playerButtonUrl={currTheme === Themes.light? defaultIcons.player.light : defaultIcons.player.dark} playerUrl={currTheme === Themes.light? defaultIcons.audioWave.light : defaultIcons.audioWave.dark} />
      <View style={styles.toolbar}>
      <PressableIcon theme={currTheme}  text={"Discover"} url={currTheme === Themes.light? defaultIcons.discover.light : defaultIcons.discover.dark} onPress={()=>{}}/>
      <PressableIcon theme={currTheme}  text={"Matches"} url={currTheme === Themes.light? defaultIcons.heart.light : defaultIcons.discover.dark} onPress={()=>{}}/>
      <PressableIcon theme={currTheme}  text={"DMs"} url={currTheme === Themes.light? defaultIcons.messages.light : defaultIcons.discover.dark} onPress={()=>{}}/>
      </View>
    </View>
  );
}

function createStyle(globalTheme){
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: globalTheme.bg,
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    text: {
      color: globalTheme.text,
      fontFamily: 'SydneyBold',
      fontSize: navBarTextSize,
    },
    toolbar: {
      height: navBarHeight,
      width: "100%",
      flexDirection: 'row',
      backgroundColor: globalTheme.bgNavBar,
      justifyContent: 'space-around'
    },
    header: {
      height: "5%",
      width: "100%",
      flexDirection: 'row',
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'space-around',
      marginTop: 8
    },
    headerIcon: {
      height: "100%",
      aspectRatio: 1,
    }
  });
}


