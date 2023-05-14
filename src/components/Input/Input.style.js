import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create ({
    container: {
        margin: 10,
        backgroundColor: '#e4e3e6',
        borderRadius: 5,
        flexDirection: 'row'

    },
    input: {
        flex: 1,
        padding: Platform.OS === 'android' ? 10 : 15,
    },
    icon: {
        fontSize: 18,
        marginRight: 8,
        marginVertical: 15
    }
})