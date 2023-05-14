import React, {useState} from "react";
import { View, TextInput} from "react-native";
import Modal from "react-native-modal";

import styles from "./ContentInputModal.style";
import Button from "../../Button";

const ContentInputModal = ({visible, onClose, onSend}) => {
    const [text, setText] = useState(null)

    function handleSend () {
        if (!text) {
            return;
        }
        onSend(text)
        setText(null);
    }

    return (
        <Modal
            isVisible={visible}
            onBackdropPress={onClose}
            onSwipeComplete={onClose}
            onBackButtonPress={onClose}
            style={styles.modal}
            swipeDirection="down"
        >
            <View style={styles.container}>
                <View style={styles.input_container}>
                    <TextInput 
                        placeholder="Darla hadi milleti.." 
                        onChangeText={setText}
                        multiline
                    />
                </View>
                <Button text="Gönder" onPress={() => onSend(text)} />
            </View>
        </Modal>
    )
}

export default ContentInputModal