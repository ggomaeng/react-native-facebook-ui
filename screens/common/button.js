/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';
import {Ionicons} from '@exponent/vector-icons';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pressed: false,
            name: props.name,
            icon: props.icon
        }
    }

    pressed(name) {
        if(name == 'Like') {
            this.setState({pressed: !this.state.pressed});
            if(!this.state.pressed) {
                this.props.onPress('Like');
            } else {
                this.props.onPress('Dislike');
            }


        }






    }

    render() {
        const {pressed, name, icon} = this.state;

        return (
            <TouchableOpacity onPress={() => this.pressed(name)} style={styles.buttonItem}>
                    <Ionicons name={icon} size={16} color={pressed ? Colors.liked : Colors.like}/>
                    <Text style={[styles.text, {color: pressed ? Colors.liked : Colors.like}]}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        flexDirection: 'row',
        height: 36,
        borderBottomWidth: StyleSheet.hairlineWidth
    },


    buttonItem: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        backgroundColor: 'transparent',
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
    }
})