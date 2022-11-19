import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import SvgSearch from '../assets/svgs/SvgSearch';

const HomeScreenHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.rowParent}>
                <Text style={styles.headerText}>UPayments Store</Text>
                <TouchableOpacity onPress={() => { }}>
                    <SvgSearch />
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: 'white'
    },
    rowParent: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 22,
        alignItems: 'center'
    },
    headerText: {
        fontSize: 22,
        fontWeight: '800',
        letterSpacing: 2,
        color: 'black',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    }
});

export default HomeScreenHeader;
