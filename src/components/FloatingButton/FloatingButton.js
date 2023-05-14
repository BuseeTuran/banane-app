import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./FloatingButton.style";

const FloatingButton = ({ iconName, onPress }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={iconName} style={styles.icon} />
        </TouchableOpacity>
    )
}

export default FloatingButton