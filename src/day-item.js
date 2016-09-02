import React, { Component } from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

export default class DayItem extends Component {
    render() {
        return (
            <Text style={this.style()}>
                {this.props.day}
            </Text>
        )
    }
    style() {
        return {
            color: this.color(),
            fontWeight: this.fontWeight(),
            lineHeight: this.lineHeight(),
            fontSize: this.fontSize()
        }
    }
    fontWeight() {
        var weight = 7 - this.props.daysUntil;
        return (weight * 100).toString();
    }
    color(){
        var opacity = 1 / this.props.daysUntil;
        return 'rgba(0,0,0,'+opacity+')';
    }
    lineHeight() {
        return 70 - 4 * this.props.daysUntil;
    }
    fontSize() {
        return 60 - 6 * this.props.daysUntil;
    }
}
