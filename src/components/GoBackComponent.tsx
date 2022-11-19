import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import SvgLeftArrow from '../assets/svgs/SvgLeftArrow';


const GoBackComponent = (props: { absolute?: boolean }) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity style={[props.absolute ? { position: 'absolute', ...styles.goBackContainer } : styles.goBackContainer]} onPress={() => navigation.goBack()}>
            <SvgLeftArrow />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    goBackContainer: {
        left: 15,
        top: 15,
        padding: 10,
        zIndex: 2
    }
});

export default GoBackComponent;
