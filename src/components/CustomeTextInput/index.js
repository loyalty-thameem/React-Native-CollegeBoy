import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const CustomeTextInput = (props) => {
    // console.log('props',props);
    // const { value, placeholderText, KeyboradType, onChangeValue, autoCapitalizeText, autoCompleteText, autoCorrectText, secureTextEntryText } = props;
    return (
        <View style={styles.textInputContainer}>
            <TextInput
                // placeholder={placeholderText}
                // placeholderTextColor={'#4B4B4B'}
                // keyboardType={KeyboradType}
                // autoCapitalize={autoCapitalizeText}
                // autoComplete={autoCompleteText}
                // // textContentType='emailAddress'
                // autoCorrect={autoCorrectText}
                // // onChangeText={(usernameTextValue) => {
                // //     // console.log('usernameTextValue', usernameTextValue);
                // //     setSignupEmail(usernameTextValue);
                // // }}
                // secureTextEntry={secureTextEntryText}
                // onChangeText={onChangeValue}
                // value={value}
                style={styles.textInput}
                {...props}
            />
        </View>
    )
}

export default CustomeTextInput

const styles = StyleSheet.create({
    textInputContainer: {
        // backgroundColor: 'yellow',
        marginHorizontal: 30,
        marginVertical:10,
    },
    textInput: {
        backgroundColor: "white",
      
        paddingHorizontal: 20,
        paddingVertical: 10,
        // paddingVertical: 15,
        fontSize: 15,
        borderRadius:8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
})