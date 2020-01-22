import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDirectionBasics extends Component {
    render() {
        return (
            // Try setting 'flexDirection' to 'column'
            <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{flex: 2, width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{flex: 1, width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}
