import { StyleSheet, Dimensions } from 'react-native';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default StyleSheet.create({
    preview: {
        height: winHeight,
        width: winWidth,
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
    },
    container: { 
        flex: 1
    },
    capture: { 
        color: "#ff5c5c"
    },
    text: { 
        marginTop: 12,
        textAlign: 'center',
        fontSize: 12,
        color: 'black',
        fontWeight: "bold"
    },
    button: {
        backgroundColor: '#fff',
        borderRadius: 25, 
        alignItems: 'center', 
        margin: 15,
        height: 40,
        width: 200,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6
      },
    clickMe: {
        alignItems: 'center',
        marginTop: 540
    }
});