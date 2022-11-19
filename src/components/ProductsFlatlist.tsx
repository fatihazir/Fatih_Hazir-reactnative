import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator,
    Dimensions,
    Image
} from 'react-native';
import SvgDetail from '../assets/svgs/SvgDetail';
import ApiBase from '../utils/apiBase/ApiBase';
import { links } from '../utils/apiBase/Links';
import { ErrorResponseModel, ExceptionResponseModel, ProductModel, ProductsResponseModelGet, RenderItemModel, SharedContextModel } from './../utils/typescriptModels/TypeScriptModels';
import Routes from './../utils/routes/index';
import { SharedContext } from '../utils/sharedContext/SharedContext';
import ErrorModal from './ErrorModal';
import { height_screen, width_screen } from '../utils/dimensions';

const ProductsFlatlist = () => {
    const [products, setProducts] = useState<Array<ProductModel>>()
    const [productsToDisplay, setProductsToDisplay] = useState<Array<ProductModel>>()
    const [showLoading, setShowLoading] = useState<boolean>(false)
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorModalAlertText, setErrorModalAlertText] = useState<string>("")

    const navigation = useNavigation();
    const currentContext: SharedContextModel | any = useContext(SharedContext);

    useEffect(() => {
        GetProducts()
    }, [])

    useEffect(() => {
        if (products && products.length > 0) {
            GetProducts()
        }
    }, [currentContext.forceProductsToRefresh])

    useEffect(() => {
        if (currentContext.selectedCategory == "All") {
            setProductsToDisplay(products)
        }
        else {
            setProductsToDisplay(products?.filter(p => p.category == currentContext.selectedCategory))
        }
    }, [currentContext.selectedCategory])


    const GetProducts = async () => {
        setShowLoading(true)
        ApiBase.Get({
            url: links.products,
            successFunction: (res: ProductsResponseModelGet) => {
                setProducts(res.products)
                setProductsToDisplay(res.products)
                setShowLoading(false)
                currentContext.setShowAddProductButton(true)
            },
            errorFunction: (res: ErrorResponseModel) => {
                currentContext.setShowOverlay(true)
                setErrorModalAlertText(res.message)
                setShowErrorModal(true)
            },
            exceptionFunction: (ex: ExceptionResponseModel) => {
                currentContext.setShowOverlay(true)
                setErrorModalAlertText(ex.err)
                setShowErrorModal(true)
            }
        })
    }
    const renderItemForProduct = (data: RenderItemModel) => {
        return (
            <TouchableOpacity
                style={styles.eachProductContainer}
                key={data.index.toString()}
                //@ts-ignore
                onPress={() => { navigation.navigate(Routes.ProductDetail, { data }) }}
            >

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
                    <Text numberOfLines={1} style={styles.productInfoText}>{data.item.name}</Text>
                    <View style={styles.productPriceAndIconContainer}>
                        <Text style={styles.productInfoText}>${data.item.price}</Text>
                        <SvgDetail />
                    </View>
                </View>
            </TouchableOpacity>
        );
    };

    // if (products && currentContext.selectedCategory && currentContext.selectedCategory !== "All") {
    //     setFilteredProducts(products.filter(p => p.category == currentContext.selectedCategory))
    // }
    return (
        <View style={styles.container}>
            <ErrorModal
                text={errorModalAlertText}
                show={showErrorModal}
                onSuccess={() => { currentContext.setShowOverlay(false), setShowErrorModal(false) }}
            />
            <View style={styles.productsSection}>
                {showLoading ?
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="#323232" />
                    </View>
                    :
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={productsToDisplay}
                        numColumns={2}
                        // extraData={updateCategoryFlatlist}
                        renderItem={renderItemForProduct}
                        keyExtractor={(item: any, index: number) => index.toString()}
                        initialNumToRender={4}
                        maxToRenderPerBatch={8}
                        ListFooterComponent={(() => <View style={{ height: 80 }}></View>)}
                    />
                }
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 12
    },
    productsSection: {
        alignItems: 'center',
    },
    loadingContainer: {
        //to adjust it somewhere near to middle.(I did not prefer to make it absolute)
        height: height_screen / 1.5,
        justifyContent: 'center'
    },
    eachProductContainer: {
        //22 is the padding value for both left and right.
        width: (width_screen - (2 * 22)) / 2,
        height: height_screen / 3,
        backgroundColor: 'white',
        alignItems: 'center',
        borderRadius: 10,
        margin: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 10,
        justifyContent: 'space-between',
    },
    photoContainer: {
        height: '60%',
        width: '100%',
    },
    photo: {
        height: '100%',
        width: '100%',
        marginTop: 8
    },
    infoContainer: {
        height: '25%',
        width: '100%',
        backgroundColor: 'black',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'space-between'
    },
    productInfoText: {
        color: 'white',
        fontWeight: '600',
        fontSize: 15
    },
    productPriceAndIconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    noPhotoSection: {
        alignItems: 'center'
    }
});

export default ProductsFlatlist;
