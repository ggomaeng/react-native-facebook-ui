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
    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={styles.icon}>
                    <Ionicons name='ios-chatbubbles' size={24} color='white'/>
                </TouchableOpacity>

                <View style={styles.searchBarContainer}>
                    <View style={styles.searchIcon}>
                        <Ionicons name='ios-search' color='#7585AE' size={18} />
                    </View>

                    <TextInput placeholderTextColor={'#7585AE'} placeholder={'Search'} style={styles.searchBar}/>
                </View>

                <TouchableOpacity style={styles.icon}>
                    <Ionicons name='ios-people' size={32} color='white'/>
                </TouchableOpacity>
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