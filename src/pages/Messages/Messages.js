import React, {useState, useEffect} from "react";
import { View, FlatList, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";

import styles from "./Messages.style";
import FloatingButton from "../../components/FloatingButton";
import MessageCard from "../../components/MessageCard";
import ContentInputModal from "../../components/modal/ContentInputModal";
import parseContentData from "../../utils/parseContentData";

const Messages = () => {

    const [contentList, setContentList] = useState([]);
    const [inputModalVisible, setInputModalVisible] = useState(false);

    function handleInputToggle () {
        setInputModalVisible(!inputModalVisible) //Açıksa kapat, kapalıysa aç..
    }

    function handleSendContent (content) { //yorumu gönderdik, gönderdikten sonra Input temızlendi..
        handleInputToggle();
        sendContent(content);
    }

    function sendContent (content) {
        const userMail = auth().currentUser.email;

        const contentObject ={
            text: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
            dislike: 0,
        };
        database().ref('messages/').push(contentObject);
    }

    useEffect(() => {
        database().ref('messages/')
        .on('value', snapshot => {
            const contentData = snapshot.val();

            const parsedData = parseContentData(contentData || {});
            setContentList(parsedData);
        })
    }, [])

    function handleBanane (item) {
        database()
            .ref(`messages/${item.id}/`)
            .update({dislike: item.dislike + 1});
    }

    const renderContent = ({item}) => (
        <MessageCard message={item} onBanane={() => handleBanane(item)} />
    );

    return (
        <View style={styles.container}>
            <FlatList 
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton iconName='chat-plus-outline' onPress={handleInputToggle} />
            <ContentInputModal 
                visible={inputModalVisible} 
                onClose={handleInputToggle} 
                onSend={handleSendContent}
            />
        </View>
    )
}

export default Messages