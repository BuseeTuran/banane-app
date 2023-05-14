import { StyleSheet } from "react-native";

import colors from "../../styles/colors";

export default StyleSheet.create ({
    container: {
        position: 'absolute',
        width: 60,
        height: 60,
        backgroundColor: colors.babyblue,
        justifyContent: 'center',
        alignItems: 'center',
        right: 20,
        borderRadius: 50,
        bottom: 20,
       
        
    },
    icon: {
        fontSize: 30,
        color: 'white'
    }
})