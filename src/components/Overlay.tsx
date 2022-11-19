import React, { memo, useContext } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { SharedContext } from '../utils/sharedContext/SharedContext';
import { SharedContextModel } from './../utils/typescriptModels/TypeScriptModels';

var { width } = Dimensions.get('window');

const Overlay = memo(() => {

    const currentContext: SharedContextModel | any = useContext(SharedContext);

    return (
        <>
            {currentContext.showOverlay && <View style={styles.overlay}></View>}
        </>
    );

});

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        opacity: 0.5,
        backgroundColor: 'black',
        width: width,
        zIndex: 5
    }
});

export default Overlay;
