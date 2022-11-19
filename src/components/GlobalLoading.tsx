import React, { memo, useContext } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import { SharedContext } from '../utils/sharedContext/SharedContext';
import { SharedContextModel } from './../utils/typescriptModels/TypeScriptModels';

const GlobalLoading = memo(() => {

    const currentContext: SharedContextModel | any = useContext(SharedContext);

    return (
        <>
            {currentContext.showGlobalLoading &&
                <View style={styles.container}>
                    <ActivityIndicator size="large" color="#323232" />
                </View>}
        </>
    );

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        zIndex: 6,
        position: 'absolute',
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default GlobalLoading;
