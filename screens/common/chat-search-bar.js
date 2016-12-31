/**
 * Created by ggoma on 12/21/16.
 */
import React from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet
} from 'react-native';

import {Ionicons} from '@exponent/vector-icons';
import Colors from '../../constants/Colors';

export default () => {
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchBarContainer}>
                    <View style={styles.searchIcon}>
                        <Ionicons name='ios-search' color='#61636B' size={18} />
                    </View>
                    <TextInput style={styles.search} placeholderTextColor={'#61636B'} placeholder={"Search"}/>
                </View>

                <View style={styles.icon}>
                    <Ionicons name='ios-settings' color={'#72757A'} size={24} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 8,
        padding: 12,

    },

    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },


    searchContainer: {
        height: 28,
        flexDirection: 'row'
    },

    search: {
        flex: 1,
        backgroundColor: '#292C34',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        fontSize: 12,
        color: 'white',
        borderRadius: 5,
    },

    searchBarContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        height: 28,
        backgroundColor: '#292C34',
        borderRadius: 5,
        padding: 8,
    },

    searchIcon: {
        justifyContent: 'center',
        alignItems: 'center',
    },

})