/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TextInput,
    Image,
    StyleSheet
} from 'react-native';

export default class onYourMind extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../img/me.png')} style={styles.profile}/>
                <TextInput onFocus={this.props.onFocus} placeholder={"What's on your mind?"} style={styles.input}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 64,
        padding: 16,
        backgroundColor: 'white',
        marginTop: 10,
        marginBottom: 10,
    },

    input: {
        flex: 1,
        fontSize: 14,
        marginLeft: 10
    },

    profile: {
        backgroundColor: 'black',
        height: 40,
        width: 40,
    }
})