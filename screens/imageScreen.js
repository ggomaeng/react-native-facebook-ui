/**
 * Created by ggoma on 1/1/17.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';


export default class ImageScreen extends Component {

    render() {
        console.log(this.props);
        return (
            <View style={{backgroundColor: 'rgba(0,0,0,.5)'}}>
                <Text>Helloooo</Text>
            </View>
        )
    }
}