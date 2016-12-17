/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet
} from 'react-native';

import Colors from '../../constants/Colors';
import {Ionicons} from '@exponent/vector-icons';
import {randomProfile} from '../helpers';
import moment from 'moment';

import Button from './button';

export default class NewsFeedItem extends Component {
    constructor() {
        super();
        this.state = {
            profile: randomProfile(),
            time: moment().format('hh:mm A MMM Do'),
            buttons: ['Like', 'Comment', 'Share'],
            icons: ['md-thumbs-up', 'md-chatbubbles', 'ios-share-alt'],
            likes: 0,
            comments: 0
        };
    }

    buttonOnPress(name) {
        console.log(name);
        switch(name) {
            case 'Like':
                this.setState({likes: this.state.likes + 1});
                break;
            case 'Dislike':
                this.setState({likes: this.state.likes - 1});
                break;
            case 'Comment':
                this.setState({comments: this.state.comments + 1});
                break;
            default:
                return
        }
    }

    renderAvatar() {
        const {profile, time} = this.state;
        return (
            <View style={styles.avatarContainer}>
                <Image style={styles.profile} source={profile.source}/>
                <View style={styles.nameContainer}>
                    <Text style={styles.name}>{profile.name}</Text>
                    <Text style={styles.time}>{time} <Ionicons name='md-globe'/></Text>
                </View>
            </View>
        )
    }

    renderLikesAndComments() {
        const {likes, comments} = this.state;

        if(likes == 0 && comments == 0) {
            return
        }

        return (
            <View style={styles.likesComments}>
                <Text style={styles.likeText}>{likes > 0 ? <Ionicons name='md-thumbs-up' color={Colors.main}/> : ''}{likes == 0 ? '' : ' ' + likes}</Text>
                <Text style={styles.likeText}>{comments == 0 ? '' : comments + ' Comments'}</Text>
            </View>
        )
    }

    renderLikeBar() {
        const {buttons, icons} = this.state;
        return buttons.map((button, i) => {
            return (
                <Button key={i} name={button} onPress={this.buttonOnPress.bind(this)} icon={icons[i]} />
            )
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.content}>
                    {this.renderAvatar()}
                    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dapibus tincidunt massa, sit amet volutpat nisi imperdiet at. Morbi maximus, neque vitae posuere molestie, enim est posuere eros, at rutrum sem felis id nisl. Ut nec mi augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tempor lectus facilisis, rutrum metus sed, volutpat felis. Fusce vitae dictum sapien, non facilisis nisl. Aenean elementum ante sed lectus sodales consequat in a mauris. Duis fermentum condimentum elit, vel suscipit purus lobortis in. Maecenas lorem quam, gravida in hendrerit pharetra, malesuada in elit.</Text>
                    {this.renderLikesAndComments()}
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
    },

    likeText: {
        fontSize: 12,
        color: Colors.grayText
    },

    likesComments: {
        paddingTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})
