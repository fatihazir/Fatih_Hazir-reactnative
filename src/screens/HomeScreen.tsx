import React from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import CategoryFlatlist from '../components/CategoriesFlatlist';
import ProductsFlatlist from '../components/ProductsFlatlist';
import StickyAddButton from '../components/StickyAddButton';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <CategoryFlatlist
                activeDefaultSelection={true}
                activatePaddingLeft={true}
                allowFiltering={true} />
            <ProductsFlatlist />
            <StickyAddButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 8,
    }
});

export default HomeScreen;
