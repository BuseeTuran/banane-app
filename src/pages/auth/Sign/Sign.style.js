import { StyleSheet } from "react-native";

export default StyleSheet.create ({
    container: {
        flex: 1,
        margin: 5,
        padding: 5,
    },
    header: {
        fontSize: Platform.OS === 'android' ? 120 : 160,
        color: '#648cc7',
        fontWeight: 'bold',
    }
})