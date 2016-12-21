/**
 * Created by ggoma on 12/21/16.
 */
import React from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';
import {randomProfile} from '../helpers';
import {Ionicons} from '@exponent/vector-icons';

export default () => {

    const avatar = randomProfile();

    return (
        <View style={styles.container}>
            <View>
                <Image style={styles.img} source={avatar.source}/>
            </View>
            <View style={styles.desc}>
                <Text style={styles.text}>{avatar.name}</Text>
                {avatar.online ?
                    <View style={styles.phone}><Text style={{color: '#42B72A', fontSize: 64, backgroundColor: 'transparent'}}>·</Text></View>
                    :
                    <View style={styles.phone}>
                        <Text style={styles.descText}>30m</Text>
                        <Ionicons name='md-phone-portrait' size={16} color={Colors.chat_line}/>
                    </View>
                }

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 12,
        flexDirection: 'row',
        alignItems: 'center',
        height: 48,
        borderBottomColor: Colors.chat_line,
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    desc: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    descText: {
        color: Colors.chat_line,
        fontSize: 12,
        marginRight: 8,

    },

    phone: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 12,
    },

    text: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 14,
        fontWeight: '500'
    },

    img: {
        height: 40,
        width: 40
    }
});