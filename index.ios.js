import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import DayItem from './src/day-item';
import Moment from 'moment';

//const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday','fridary', 'saturday'];

class weekdays extends Component {
    render (){
        return (
            <View style={styles.container}>
                {this.days()}
            </View>
        );
    }
    days(){
        let daysItems = [];
        for(let i=0; i<7; i++){
            var day = Moment().add(i,'days').format('dddd');
            daysItems.push(
                <DayItem day={day} daysUntil={i} />
            )
        }
        return daysItems
    }
}
//styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        //flexDirection: 'column',
        justifyContent: 'center', //height
        alignItems: 'center', //width
    },
    textStyle: {

    },
});


//show reqct component on the screen
AppRegistry.registerComponent('weekdays',() => weekdays);