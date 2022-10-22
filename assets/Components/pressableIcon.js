import { StyleSheet, Text, View, Pressable, Image} from 'react-native';
import { navBarTextSize, Themes } from '../Themes';

export default function PressableIcon(props){
    const styles = createStyles(props.theme);
    
    return( <Pressable onPress={props.onPress} style={styles.container}>
        <Image style={{ aspectRatio: 1,
    height: '50%'}} source={props.url}/>
        { props.text && <Text style={styles.text}>
        {props.text}
        </Text> }
        </Pressable>
    );
}

function createStyles(globalTheme) {return StyleSheet.create({
    container: {
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center'
    }, 
    text: {
        color: globalTheme.bgSecondary,
        fontSize: navBarTextSize,
    }
  });
}
  