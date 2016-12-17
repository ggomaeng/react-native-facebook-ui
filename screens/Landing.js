/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    Animated,
    View,
    Text,
    Dimensions,
    RefreshControl,
    ScrollView,
    ListView,
    StyleSheet
} from 'react-native';

const {width, height} = Dimensions.get('window');

import Colors from '../constants/Colors';
import SearchBar from './common/search-bar';
import ButtonBar from './common/button-bar';
import OnYourMind from './common/onYourMind';
import NewsFeedItem from './common/newsfeed-item';
import _ from 'lodash';

const data = ['0', '1', '1', '1'];

export default class Landing extends Component {
    constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            refreshing: false,
            loading: false,
            header_height: new Animated.Value(96),
            content_height: 0,
            dataSource: ds.cloneWithRows(data)
        };

        this.offsetY = 0;
        this._onScroll = this._onScroll.bind(this);
        this.loadMore = _.debounce(this.loadMore, 300);
    }

    componentDidMount() {
        setTimeout(() => {this.measureView()}, 0);
    }

    measureView() {
        this.refs.view.measure((a, b, w, h, px, py) => {
            this.setState({content_height: h});
        });

        this.refs.header.measure((a, b, w, h, px, py) => {
            console.log(h);
            this.setState({header_height: h})
        });
    }


    _onRefresh() {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 1500)
    }

    _renderRow(data) {

        if (data == '0') {
            return <OnYourMind/>
        }

        return <NewsFeedItem/>
    }

    loadMore() {
        console.log('should load more');
        this.setState({loading: true});
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        data.push('1');
        data.push('1');
        this.setState({dataSource: ds.cloneWithRows(data)});

    }

    _onScroll(event) {
        const {content_height} = this.state;
        const e = event.nativeEvent;
        const l_height = e.contentSize.height;
        const offset = e.contentOffset.y;

        if(offset > this.offsetY) {
            console.log('scrolling down');
            //if
        } else {
            console.log('scrolling up');
        }

        this.offsetY = offset;


        if(offset + content_height >= l_height) {
            console.log('end');
            this.loadMore();
        }

        // console.log(e);
    }

    render() {
        return (
            <View ref='view' style={styles.container}>
                <View ref='header'>
                    <SearchBar/>
                    <ButtonBar/>
                </View>
                <ListView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }

                    onScroll={this._onScroll}
                    dataSource={this.state.dataSource}
                    renderRow={(data) => this._renderRow(data)}
                />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.gray
    }
})