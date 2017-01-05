/**
 * Created by ggoma on 1/2/17.
 */
import React, {Component} from 'react';
import {
    Animated,
    PanResponder,
    View,
    Dimensions,
    Image,
    Text,
    Modal,
    TouchableWithoutFeedback,
    StyleSheet
} from 'react-native';

import {getImage} from '../helpers';
import Main from '../../main';
const {width, height} = Dimensions.get('window');

export default class SingleImage extends Component {
    state = {
        pan: new Animated.ValueXY(),
        open: false,

    };

    py = 0;


    componentWillMount() {
        let panMove = Animated.event([
            null, {dx: this.state.pan.x, dy: this.state.pan.y},
        ]);

        this._panResponder = PanResponder.create({
            onMoveShouldSetResponderCapture: () => true,
            onMoveShouldSetPanResponderCapture: () => true,
            onPanResponderGrant: (e, gestureState) => {

            },
            onPanResponderMove: (e, g) => {
                if(!this.open) return;
                return panMove(e, g);
            },
            onPanResponderRelease: () => {
                // this.state.pan.setOffset({x: 0, y: 0});
            }
        });
    }

    openImage() {
        //calculate center of image

        this.refs.view.measure((a, b, w, h, px, py) => {
           console.log('offset:', py, 'height:', height);
           const toY = height/2 - (py + 100);
           this.py = py;

            this.setState({open: true});

        });


    }

    closeImage() {

    }

    toggleLike() {

    }

    getStyle() {
        return [
            {
                flex: 1,
                transform: [
                    {
                        translateX: this.state.pan.x
                    },
                    {
                        translateY: this.state.pan.y
                    },
                ]
            },
        ];
    }

    renderModal() {
        const {image} = this.props;
        const {open} = this.state;
        return (
            <Modal
                transparent={true}>
                <View style={{flex: 1}}>
                <Animated.View {...this._panResponder.panHandlers} style={this.getStyle()}>
                    <View ref="view" style={{flex: 1, backgroundColor: 'rgba(0,0,0,.5)'}}>
                        <Image style={{top: this.py, height: height/2.5, width}} source={getImage(image)} />
                    </View>
                </Animated.View>
                </View>
            </Modal>
        )

    }

    render() {
        const {image} = this.props;
        const {open} = this.state;
        if(!open) {
            return (
                <View ref="view" style={{flex: 1}}>
                    <TouchableWithoutFeedback onPress={this.openImage.bind(this)}>
                        <Image style={{flex: 1, height: null, width}} source={getImage(image)} />
                    </TouchableWithoutFeedback>
                </View>
            )
        }
        return this.renderModal();
    }
}