import { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import { Themes, titleTextSize } from '../Themes';

export default function AudioPlayer(props){
    const styles = createStyles(props.theme);

    return(<View style={[styles.container, Themes.light.shadows]}>
        <View style={styles.header}>
        <Text style={styles.text}>{props.trackTitle}</Text>
        </View>
        <View style={styles.footer}>
            <Image style={styles.playerButtonImg} source={props.playerButtonUrl}/>
            <Image style={styles.playerImg} source={props.playerUrl}/>
        </View>   
    </View>
    );
}

function createStyles(globalTheme) { return StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: 'column',
        justifyContent: 'space-around',
        width: "70%",
        height: "20%",
        borderRadius: 30,
        borderWidth: 0,
        overflow: 'hidden',
        padding: "3%",
        backgroundColor: globalTheme.bgSecondary,
        elevation: 3,
    },
    text: {
        color: globalTheme.text,
        fontFamily: 'Sydney',
        fontSize: titleTextSize,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        width: "100%",
        marginBottom: "0.5%",
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: "100%",
        height: "60%",
    },
    playerButtonImg: {
        width: "20%",
        aspectRatio: 1, 
        marginRight: "3%",
        alignSelf: 'center',
    },
    playerImg: {
        width: "70%",
        height: "40%",
        alignSelf: 'center',
    }
  });
}