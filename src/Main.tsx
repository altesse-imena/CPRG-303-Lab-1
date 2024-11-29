import React, { ScrollView } from "react-native"
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
} from 'react-native';
import SimpleCard from "./SimpleCard"
import AppHeader from "./AppHeader";

export default function Main() {
    return (
        <SafeAreaView>
            <View>
                <AppHeader />
            </View>
            <ScrollView>
                <View style ={style.card}>
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                    <SimpleCard />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const style = StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        rowGap: 4,
    }
})