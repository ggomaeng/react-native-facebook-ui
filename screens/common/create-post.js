/**
 * Created by ggoma on 12/21/16.
 */
import React, {Component} from 'react';
import {
    View,
    Image,
    Dimensions,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    StatusBar,
    StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');



import Colors from '../../constants/Colors';
import {Ionicons} from '@exponent/vector-icons';

export default class CreatePost extends Component{
    constructor() {
        super();
        this.state = {
            visibleHeight: Dimensions.get('window').height,
            k_visible: false,
        }
    }

    componentDidMount () {
        Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
        Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
    }

    componentWillUnmount() {
        Keyboard.removeListener('keyboardWillShow');
        Keyboard.removeListener('keyboardWillHide');
    }

    keyboardWillShow (e) {
        let newSize = Dimensions.get('window').height - e.endCoordinates.height
            this.setState({visibleHeight: newSize, k_visible: true})
    }

    keyboardWillHide (e) {
        if(this.componentDidMount) {
            this.setState({visibleHeight: Dimensions.get('window').height, k_visible: false})
        }

    }


    renderHeader() {
        return (
            <View style={{backgroundColor: '#F6F7F9', paddingTop: 36, borderBottomWidth:StyleSheet.hairlineWidth,
                borderBottomColor: Colors.gray, flexDirection: 'row',
                justifyContent: 'space-between', alignItems: 'center', padding: 16}}>
                <TouchableOpacity onPress={this.props.closeModal}>
                    <Text style={{color: '#4080FF'}}>Cancel</Text>
                </TouchableOpacity>
                <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>Update Status</Text>
                <Text style={{color: '#4080FF', fontWeight: '700'}}>Post</Text>
            </View>
        )
    }

    renderAvatar() {
        return (
            <View style={{flexDirection: 'row', padding: 16, alignItems: 'center'}}>
                <Image source={require('../img/me.png')} style={styles.img}/>
                <View style={{paddingLeft: 8}}>
                    <Text style={{color: 'black', fontWeight: '600'}}>Sung Woo Park</Text>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{padding: 2, paddingLeft: 4, paddingRight: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                        marginTop: 4, borderColor: Colors.gray, borderWidth: 1, borderRadius: 5}}>
                            <Ionicons name='md-globe' color={'gray'}/>
                            <Text style={{color: 'gray', marginLeft: 4, marginRight: 4}}>Public</Text>
                            <Ionicons name='md-arrow-dropdown' color={'gray'} size={16}/>
                        </View>
                        <View style={{padding: 2, paddingLeft: 4, paddingRight: 4, marginLeft: 4, flexDirection: 'row', alignItems: 'center', justifyContent: 'center',
                            marginTop: 4, borderColor: Colors.gray, borderWidth: 1, borderRadius: 5}}>
                            <Ionicons name='md-navigate' color={'gray'}/>
                            <Text style={{color: 'gray', marginLeft: 4, marginRight: 4}}>Seoul</Text>
                            <Ionicons name='ios-close' color={'gray'} size={16}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    renderText() {
        return (
            <View style={{flex: 1, padding: 16, paddingTop: 0}}>
                <TextInput autoFocus={true} style={{height: 20, fontSize: 16}} placeholderTextColor={'gray'} placeholder={"What's on your mind?"}/>
            </View>
        )
    }

    renderMenu() {
        const {k_visible} = this.state;
        if(k_visible) {
            return (
                <TouchableOpacity
                    onPress={() => {Keyboard.dismiss()}}
                    style={{height: 56, borderTopWidth: StyleSheet.hairlineWidth, borderColor: Colors.chat_line,
                    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16}}>
                    <Text style={{color: Colors.black, fontSize: 16, fontWeight: '500'}}>Add to your post</Text>
                    <View style={{flexDirection: 'row', paddingRight: 16}}>
                        <Ionicons style={styles.icon} name='md-camera' color='#93B75F' size={24} />
                        <Ionicons style={styles.icon} name='md-videocam' color='#E7404E' size={24} />
                        <Ionicons style={styles.icon} name='md-pin' color='#D8396F' size={24} />
                        <Ionicons style={styles.icon} name='ios-happy' color='#EDC370' size={24} />

                    </View>
                </TouchableOpacity>
            )
        }

        return (
            this.renderList()
        )
    }

    renderList() {
        const objs =
            [
                {
                    icon: 'md-camera',
                    color: '#93B75F',
                    name: 'Photo/Video'
                },
                {
                    icon: 'md-videocam',
                    color: '#E7404E',
                    name: 'Live Video'
                },
                {
                    icon: 'md-pin',
                    color: '#D8396F',
                    name: 'Check In'
                },
                {
                    icon: 'ios-happy',
                    color: '#EDC370',
                    name: 'Feeling/Activity'
                },
                {
                    icon: 'ios-person-add',
                    color: '#628FF6',
                    name: 'Tag Friends'
                }
            ];

        return objs.map((o, i) => {
            return (
                <View key={i} style={{flexDirection: 'row', height: 56, alignItems: 'center', paddingLeft: 16,
                    borderTopColor: Colors.chat_line, borderTopWidth: StyleSheet.hairlineWidth}}>
                    <Ionicons name={o.icon} color={o.color} size={24}/>
                    <Text style={{color: 'gray', fontSize: 16, fontWeight: '500', paddingLeft: 16}}>{o.name}</Text>
                </View>
            )
        })
    }

    render() {
        return (
            <View style={{height: this.state.visibleHeight}}>
                <StatusBar barStyle={'default'} animated={true}/>
                {this.renderHeader()}
                {this.renderAvatar()}
                {this.renderText()}
                {this.renderMenu()}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    img: {
        width: 40,
        height: 40
    },

    icon: {
        marginLeft: 10
    }
});