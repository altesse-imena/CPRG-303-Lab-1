import React from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

const AppHeader = () : React.JSX.Element => {
    return (
        <View style={style.appHeader}>
            <Text style={style.appHeaderTxt}>
                UI Demo......
            </Text>
        </View>
    );
}


const style = StyleSheet.create({
    appHeaderTxt: {
        fontSize: 30,
        fontWeight: '600',
        color: '#697565',
        borderColor: '#697565',
        textDecorationLine: 'underline'
    },
    appHeader: {
        alignItems: 'center',
    }
})

export default AppHeader;