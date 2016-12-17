/**
 * Created by ggoma on 12/17/16.
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    RefreshControl,
    ScrollView,
    StyleSheet
} from 'react-native';

import Colors from '../constants/Colors';
import SearchBar from './common/search-bar';
import ButtonBar from './common/button-bar';
import OnYourMind from './common/onYourMind';
import NewsFeedItem from './common/newsfeed-item';

export default class Landing extends Component {
    state = {
        refreshing: false,
    };

    _onRefresh() {
        this.setState({refreshing: true});
        setTimeout(() => {
            this.setState({refreshing: false});
        }, 1500)
    }


    render() {
        return (
            <View style={styles.container}>
                <SearchBar/>
                <ButtonBar/>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this._onRefresh.bind(this)}
                        />
                    }>
                    <OnYourMind/>
                    <NewsFeedItem/>
                    <NewsFeedItem/>

                </ScrollView>
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