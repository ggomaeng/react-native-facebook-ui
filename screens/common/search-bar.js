/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';

import {Ionicons} from '@exponent/vector-icons';

export default class SearchBar extends Component {
    constructor() {
        super();
        this.state = {
            height: null,
            animating: false,
        };

        this.measureView = this.measureView.bind(this);
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

    render() {
        const {height} = this.state;
        return (
            <View ref='container'>
                <Animated.View style={[styles.container, {height}]}>
                    <TouchableOpacity style={styles.icon}>
                        <Ionicons name='ios-chatbubbles' size={24} color='white'/>
                    </TouchableOpacity>

                    <View style={styles.searchBarContainer}>
                        <View style={styles.searchIcon}>
                            <Ionicons name='ios-search' color='#7585AE' size={18} />
                        </View>

                        <TextInput placeholderTextColor={'#7585AE'} placeholder={'Search'} style={styles.searchBar}/>
                    </View>

                    <TouchableOpacity style={styles.icon} onPress={this.props.openChat}>
                        <Ionicons name='ios-people' size={32} color='white'/>
                    </TouchableOpacity>
                </Animated.View>

            </View>
        )

    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 60,
        padding: 16,
        paddingTop: 24,
        paddingBottom: 10,
        backgroundColor: Colors.main,
    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 28,
        backgroundColor: Colors.searchBar,
        borderRadius: 5,
        padding: 8,
        marginLeft: 8,
        marginRight: 8,
    },

    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    searchBar: {
        flex: 1,
        color: 'white',
        fontSize: 14,
        marginLeft: 8
    }
})