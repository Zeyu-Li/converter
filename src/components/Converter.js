import React, {Component} from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

class Converter extends Component {
    render() {
        return (
            <View style={styles.convert}>
                <Text style={[styles.containerTitle]}>Convert!</Text>
                <Image style={[styles.image]} source={require('@expo/../../assets/img/spoon.svg')} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    convert: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerTitle: {
        fontSize: 32,
        color: '#ededed',
    },
    image: {
        width: 400/2,
        height: 264/2,
        resizeMode: 'stretch',
    },
});

export default Converter;
