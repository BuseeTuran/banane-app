import React, {useState} from "react";
import { View, Text } from "react-native";
import auth from "@react-native-firebase/auth";
import { Formik } from "formik";
import { showMessage } from "react-native-flash-message";

import styles from "./Sign.style";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import authErrorMessageParser from "../../../utils/authErrorMessageParser";

const initialFormValues = {
    usermail: '',
    password: '',
    repassword: '',
}

const Sign = ({navigation}) => {

    function handleLogin () {
        navigation.goBack();
    }

    const [loading, setLoading] = useState(false);

    async function handleFormSubmit (formValues) {
        if (formValues.password !== formValues.repassword) {
            showMessage ({
                message: "Şifreler uyuşmuyor",
                type: "info",
            })
            return;
        }
        try {
            setLoading(true);
            await auth().createUserWithEmailAndPassword (
                formValues.usermail,
                formValues.password,
            );
            showMessage ({
                message: "Kullanıcı oluşturuldu",
                type: "success",
            })
            navigation.navigate('LoginPage')
            setLoading(false);
        } catch (error) {
            showMessage ({
                message: authErrorMessageParser(error.code),
                type: 'info',
            })
            setLoading(false);
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
                {({values, handleSubmit, handleChange}) => (
                    <>
                        <Input 
                            placeholder="E-Posta"
                            iconName='calendar-account'
                            onType={handleChange('usermail')}
                            value={values.usermail}
                        />
                        <Input 
                            placeholder="Şifre"
                            isSecure
                            iconName='lock-outline'
                            onType={handleChange('password')}
                            value={values.password}
                        />
                        <Input 
                            placeholder="Şifre tekrar"
                            isSecure
                            iconName='lock-check-outline'
                            onType={handleChange('repassword')}
                            value={values.repassword}
                        />
                        <Button text="Kayıt Ol" onPress={handleSubmit} loading={loading} />
                    </>
                )}
            </Formik>
            <Button text="Geri"theme="secondary" onPress={handleLogin}/>
        </View>
    )
}

export default Sign