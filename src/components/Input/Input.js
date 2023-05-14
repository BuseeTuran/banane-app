import React from "react";
import { View, TextInput } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import styles from "./Input.style";

const Input = ({placeholder, iconName, value, onType, isSecure}) => {
    return (
        <View style={styles.container}>
            <TextInput 
                style={styles.input}
                placeholder={placeholder}
                autoCapitalize="none"
                onChangeText={onType}
                value={value}
                secureTextEntry={isSecure}
            />
            <Icon style={styles.icon} name={iconName} />

        </View>
    )
}

export default Input