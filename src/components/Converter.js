import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Dimensions, Button } from 'react-native';

class Converter extends Component {
    render() {
        return (
            <View style={styles.convert}>
                <View style={[styles.button]}>
                    <Button title="Change"/>
                </View>
                <TextInput placeholder="ml" style={[styles.containerInput]} />
                <Image style={[styles.image]} source={require('@expo/../../assets/img/spoon.svg')} />
                <TextInput placeholder="teaspoon" style={[styles.containerInput]} />
                <View style={[styles.button]}>
                    <Button title="Change" style={[styles.button]}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    convert: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerInput: {
        fontSize: 30,
        color: '#ededed',
        width: Dimensions.get('window').width / 1.5,
        padding: 10,
        borderRadius: 8,
        backgroundColor: '#474747',

        // drop shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.55,
        shadowRadius: 5,

        elevation: 19,
    },
    image: {
        width: Dimensions.get('window').width / 2.5 ,
        height: Dimensions.get('window').width / 2.5 * (264/400),
        maxHeight: Dimensions.get('window').height / 2.5 * (264/400),
        resizeMode: 'stretch',
        margin: 25,
    },
    button: {
        margin: 10,
        padding: 10,
        // drop shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        // shadowOpacity: 0.55,
        // shadowRadius: 5,

        // elevation: 19,
    }
});

export default Converter;
