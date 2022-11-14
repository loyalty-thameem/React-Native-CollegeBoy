import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomeTextInput from '../../components/CustomeTextInput'

const LoginScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const emailHandleChange = (emailText) => {
        // Alert.alert('Email');
        setEmail(emailText);
    }
    const passwordHandleChange = (passwordText) => {
        // Alert.alert('Password');
        setPassword(passwordText);
    }
    let regex = new RegExp('^[a-z]+\@[^\s]+\.[^\s]+$');

    const signValidation = () => {
        if (email.length === 0) {
            Alert.alert('Please enter email address');
        }
        else if (password.length === 0) {
            Alert.alert('Please enter password');
        }
        else if (regex.test(email) === false) {
            Alert.alert(email + ' ' + 'is not a valid email address')
        }
        else if (email && password) {
            Alert.alert("Welcome");
            navigation.navigate('Home')
        }
        else {
            Alert.alert('Invalid login details')
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image
                    source={require('../../assets/images/ocean_soft_logo.png')}
                    style={styles.logo}
                />
            </View>
            <View style={styles.mainContainer}>
                <View style={styles.accountTypeTextContainer}>
                    <Text style={styles.accountTypeText}>Login to your Account</Text>
                </View>
                <CustomeTextInput
                    value={email}
                    placeholder='Email'
                    KeyboradType='email-address'
                    onChangeText={emailHandleChange}
                    autoComplete='email'
                    autoCorrect={false}
                    placeholderTextColor={'#4B4B4B'}
                    autoCapitalize='none'
                    textContentType='emailAddress'

                />
                <CustomeTextInput
                    value={password}
                    placeholder={'Password'}
                    KeyboradType={'email-address'}
                    onChangeText={passwordHandleChange}
                    autoCapitalize='none'
                    placeholderTextColor={'#4B4B4B'}
                    autoCorrectText={false}
                    secureTextEntryText={true}
                />
                <TouchableOpacity style={styles.signInContainer}
                    onPress={() => signValidation()}>
                    <Text style={styles.signInText}>Sign in</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.optionalLoginContainer}>
                <Text style={styles.optionalLoginText}>- Or sign in with -</Text>
            </TouchableOpacity>
            <View style={styles.socialLoginContainer}>
                <TouchableOpacity style={styles.googleLogoContainer}>
                    <Image
                        source={require('../../assets/images/google_logo1.png')}
                        style={styles.googleLogo}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.facebookLogoContainer}>
                    <Image
                        source={require('../../assets/images/facebook_logo2.jpg')}
                        style={styles.facebookLogo}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.twitterLogoContainer}>
                    <Image
                        source={require('../../assets/images/twitter_logo1.png')}
                        style={styles.twitterLogo}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red',

    },
    logoContainer: {
        marginHorizontal: 30,
        marginVertical: 20,
        // backgroundColor:'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        // width: '80%',
        // height: '10%',
        // borderRadius: 20,

    },
    mainContainer: {
        // backgroundColor: "green",
        // flex: 0.7,
    },
    accountTypeTextContainer: {
        marginHorizontal: 30,
        marginVertical: 30,
    },
    accountTypeText: {
        fontFamily: 'Arial',
        fontSize: 22,
        fontWeight: '700',
        color: '#4B4B4B'
    },
    signInContainer: {
        backgroundColor: "#1E319D",
        height: 60,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginHorizontal: 30,
        marginVertical: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signInText: {
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: '700',
        color: '#FFFFFF',

    },
    optionalLoginContainer: {
        // backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
    },
    optionalLoginText: {
        fontFamily: 'Arial',
        fontSize: 17,
        fontWeight: '700',
        color: 'gray',
    },
    socialLoginContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end',
        marginHorizontal: 10,
    },
    googleLogoContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        marginTop: 40,
    },
    googleLogo: {
        width: 35,
        height: 35,
    },
    facebookLogoContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    facebookLogo: {
        width: 35,
        height: 35,
        // borderRadius: 20,
    },
    twitterLogoContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    twitterLogo: {
        width: 35,
        height: 35,
        // borderRadius: 20,
    },


})