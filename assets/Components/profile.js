import { StyleSheet, Text, View, ImageBackground} from 'react-native';
import { footerTextSize, Themes, titleTextSize } from '../Themes';

export default function Profile(props){

return( <View style={[styles.container, Themes.light.shadows]}>
        <ImageBackground style={[styles.image]} source={props.url} />
        <Text style={styles.textHeader}>{props.profileName}</Text>
        <Text style={styles.textFooter}>{props.profileDistance}</Text>
        </View>
);
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      flexDirection: 'column',
      position: "relative",
      width: "70%",
      height: "50%",
      borderRadius: 10,
      borderWidth: 0,
      overflow: 'hidden',
      elevation: 3,
    },
    textFooter: {
        position: 'absolute',
        bottom: '0%',
        left: "2%",
        color: Themes.light.textSecondary,
        fontFamily: 'Sydney',
        fontSize: footerTextSize,
    },
    textHeader: {
      color: Themes.light.textSecondary,
       left: "2%",
       fontSize: titleTextSize,
       fontFamily: 'Sydney',
    },
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    }
  });