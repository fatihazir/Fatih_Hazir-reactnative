import React, { useContext } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import SvgPlus from '../assets/svgs/SvgPlus';
import { useNavigation } from '@react-navigation/native';
import Routes from './../utils/routes/index';
import { SharedContextModel } from '../utils/typescriptModels/TypeScriptModels';
import { SharedContext } from '../utils/sharedContext/SharedContext';


const StickyAddButton = () => {
    const navigation = useNavigation()

    const currentContext: SharedContextModel | any = useContext(SharedContext);

    if (currentContext.showAddProductButton) {
        return (
            <TouchableOpacity style={styles.container}
                //@ts-ignore
                onPress={() => navigation.navigate(Routes.AddProduct)}>
                <SvgPlus />
            </TouchableOpacity>
        );
    }
    else {
        return (null)
    }

};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 20,
        right: 20,
        height: 70,
        width: 70,
        borderRadius: 100,
        borderColor: 'black',
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'

    }
});

export default StickyAddButton;
