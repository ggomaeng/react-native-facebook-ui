/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';
import {Ionicons} from '@exponent/vector-icons';

const people = {
    bob: {
        name: 'Bob the Builder'
    }
}

export default class NewsFeedItem extends Component {
    state = {
        buttons: ['Like', 'Comment', 'Share'],
        icons: ['md-thumbs-up', 'md-chatbubbles', 'ios-share-alt']
    };

    renderAvatar() {
        return (
            <View style={styles.avatarContainer}>
                <View style={styles.profile} />
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>Name</Text>
                    <Text style={styles.time}>Time</Text>
                </View>
            </View>
        )
    }

    renderLikeBar() {
        const {buttons, icons} = this.state;
        return buttons.map((button, i) => {
            return (
                <View key={i} style={styles.buttonItem}>
                    <Ionicons name={icons[i]} size={16} color={Colors.like}/>
                    <Text style={styles.text}>{button}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    {this.renderAvatar()}
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus tincidunt massa, sit amet volutpat nisi imperdiet at. Morbi maximus, neque vitae posuere molestie, enim est posuere eros, at rutrum sem felis id nisl. Ut nec mi augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempor lectus facilisis, rutrum metus sed, volutpat felis. Fusce vitae dictum sapien, non facilisis nisl. Aenean elementum ante sed lectus sodales consequat in a mauris. Duis fermentum condimentum elit, vel suscipit purus lobortis in. Maecenas lorem quam, gravida in hendrerit pharetra, malesuada in elit.</Text>
                    <View style={styles.line} />
                </View>
                <View style={styles.buttonContainer}>
                    {this.renderLikeBar()}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginBottom: 10,
    },

    content: {
        padding: 16,
        paddingBottom: 0,
    },

    line: {
        paddingTop: 16,
        borderColor: '#ddd',
        borderBottomWidth: StyleSheet.hairlineWidth
    },

    avatarContainer: {
        flexDirection: 'row',
        marginBottom: 10,
    },

    nameContainer: {
        marginLeft: 10,
        justifyContent: 'space-around'
    },

    name: {
        fontSize: 16,
        color: 'black',
        fontWeight: '700'
    },

    time: {
        color: 'gray',
        fontSize: 12,
    },

    profile: {
        backgroundColor: 'black',
        height: 40,
        width: 40,
    },

    buttonContainer: {
        flexDirection: 'row',
        height: 36,
        borderBottomWidth: StyleSheet.hairlineWidth
    },


    buttonItem: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    text: {
        fontSize: 14,
        fontWeight: '700',
        marginLeft: 8,
        color: Colors.like
    }
})
