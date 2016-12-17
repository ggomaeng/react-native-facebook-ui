/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Ionicons} from '@exponent/vector-icons'
import Colors from '../../constants/Colors';

export default class ButtonBar extends Component {
    state = {
        buttons: ['Live', 'Photo', 'Check In'],
        icons: ['ios-videocam', 'ios-camera', 'ios-pin']
    };

    renderButtons() {
        const {buttons, icons} = this.state;
        return buttons.map((button, i) => {
            return (
                <View key={i} style={styles.buttonItem}>
                    <Ionicons name={icons[i]} size={16} color={Colors.black}/>
                    <Text style={styles.text}>{button}</Text>
                </View>
            )
        })

    }

    render() {
        return (
            <View style={styles.container}>
                {this.renderButtons()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 36,
        backgroundColor: Colors.lightGray,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    buttonItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
    },

    text: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
        color: Colors.black
    }
});