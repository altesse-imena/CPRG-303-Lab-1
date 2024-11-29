/**
 * width : 250
 * height: 250
 * padding: 10
 * title fonstisze 25
 * divider of width 2
 * text : 8 lines
 */

import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
} from 'react-native';

const SimpleCard = () : React.JSX.Element => {
    return (
        
            <View style={style.card}>
                <View style={style.head}>
                    <Text style={style.header}>
                        This is a header
                    </Text>
                </View>
                <Text numberOfLines={10} style={style.cardTXT}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                    Alias, quae mollitia. Est dicta corrupti, saepe porro dignissimos 
                    animi amet maxime ipsa libero temporibus cumque consectetur, 
                    ipsam assumenda sint quo ratione.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum beatae repellat explicabo illum rerum sequi tenetur cupiditate. Dolorum, ducimus. Officiis, distinctio eos. Exercitationem rerum laborum quaerat eaque recusandae dolore fugit.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magni rerum laudantium animi assumenda. Eligendi, delectus. Aliquam cumque veritatis vitae pariatur porro officia inventore ad, architecto mollitia. Impedit, similique vitae?
                </Text>
            </View>
        
    );
}

const style = StyleSheet.create({
    card: {
        width: 200,
        height: 200,
        padding: 10,
        borderRadius: 10, 
        backgroundColor: '#ECDFCC',
        alignItems: 'center',
    },
    cardTXT : {
    },
    header : {
        backgroundColor: '#697565',
        alignItems: 'center',
    },
    head : {
        width: 190,
    }
});

export default SimpleCard;