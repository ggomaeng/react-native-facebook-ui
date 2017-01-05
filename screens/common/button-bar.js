/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    StyleSheet
} from 'react-native';

import {Ionicons} from '@exponent/vector-icons'
import Colors from '../../constants/Colors';

export default class ButtonBar extends Component {
    constructor() {
        super();
        this.state = {
            height: new Animated.Value(36),
            buttons: ['Live', 'Photo', 'Check In'],
            icons: ['ios-videocam', 'ios-camera', 'ios-pin']
        };
    }

    componentDidMount() {
        setTimeout(() => {this.measureView()}, 0)
    }

    measureView() {
        console.log('measuring view');
        this.refs.container.measure((a, b, w, h, x, y) => {
            this.setState({height: new Animated.Value(h), original: h});
        });
    }

    hide() {

        if(this.state.animating) {
            return;
        }
        console.log('animating');

        this.setState({animating: true});
        Animated.timing(
            this.state.height,
            {toValue: 0}
        ).start();
    }

    show() {
        if(!this.state.animating) {
            return;
        }
        console.log('animating');
        this.setState({animating: false});
        Animated.timing(
            this.state.height,
            {toValue: this.state.original}
        ).start();
    }

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

    getStyle() {
        const {height} = this.state;


        return {height, opacity: height.interpolate({
            inputRange: [0, 36],
            outputRange: [0, 1],
        })}
    }

    render() {

        return (
            <View ref='container'>
                <Animated.View style={[styles.container, this.getStyle()]}>
                    {this.renderButtons()}
                </Animated.View>
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
        backgroundColor: 'transparent',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderColor: '#ddd'
    },

    text: {
        fontSize: 14,
        backgroundColor: 'transparent',
        fontWeight: '700',
        marginLeft: 8,
        color: Colors.black
    }
});