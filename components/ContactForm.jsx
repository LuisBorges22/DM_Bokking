import React from 'react'

import { View, Text, TextInput, StyleSheet, Button } from "react-native"

const ContactForm = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contact Form</Text>
            <TextInput placeholder={"Name"} style={styles.input}></TextInput>
            <TextInput placeholder={"youremail@ipb.pt"} style={styles.input}></TextInput>
            <TextInput placeholder={"Message"} style={styles.textArea}></TextInput>
            <Button onPress={() => {}} title={"Submit"}/>
        </View>
    )
}

export default ContactForm;

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'aliceblue'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 40,
        marginTop: 40
    },
    input: {
        width: 250,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        flex: 1
    },
    textArea: {
        width: 250,
        height: 250,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        flex: 6
    }   
});