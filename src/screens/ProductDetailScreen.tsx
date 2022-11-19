import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import GoBackComponent from '../components/GoBackComponent';
import { ProductModel } from '../utils/typescriptModels/TypeScriptModels';

interface NavigationDataModel {
    route: {
        params: {
            data: {
                index: number,
                item: ProductModel
            }
        }
    }
}

const ProductDetailScreen = (props: NavigationDataModel | any) => {
    const { data } = props.route.params

    return (
        <View style={styles.container}>
            <GoBackComponent absolute />
            <View style={styles.productContainer}>

                <View style={styles.photoContainer}>
                    {data.item.avatar.length > 10 ?
                        <Image
                            source={{ uri: data.item.avatar }}
                            style={styles.photo}
                            resizeMode={'contain'} />
                        :
                        <View style={styles.noPhotoSection}>
                            <Text>No photo</Text>
                        </View>}

                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.productNameAndPriceContainer}>
                        <Text style={styles.productNameText}>{data.item.name}</Text>
                        <Text style={styles.productPriceText}>${data.item.price}</Text>
                    </View>
                    <ScrollView style={styles.scrollViewStyle}>
                        <Text style={styles.productDescText}>{data.item.description}</Text>
                    </ScrollView>
                </View>
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    productContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    photoContainer: {
        height: '45%',
        width: '100%',
        marginTop: 20
    },
    infoContainer: {
        height: '40%',
        width: '100%',
        backgroundColor: 'black',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        paddingHorizontal: 20,
        paddingTop: 40
    },
    photo: {
        height: '100%',
        width: '100%',
    },
    noPhotoSection: {
        alignItems: 'center',
    },
    productNameAndPriceContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    productNameText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        maxWidth: '80%'
    },
    productPriceText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        letterSpacing: 1
    },
    productDescText: {
        color: 'white',
        letterSpacing: 1
    },
    scrollViewStyle: {
        marginTop: 20
    }
});

export default ProductDetailScreen;
