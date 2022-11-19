import React, { useContext, useState } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';
import CategoryFlatlist from '../components/CategoriesFlatlist';
import ErrorModal from '../components/ErrorModal';
import GoBackComponent from '../components/GoBackComponent';
import SuccessModal from '../components/SuccessModal';
import ApiBase from '../utils/apiBase/ApiBase';
import { links } from '../utils/apiBase/Links';
import { SharedContext } from '../utils/sharedContext/SharedContext';
import { ErrorResponseModel, ExceptionResponseModel, ProductsResponseModelPost, SharedContextModel } from '../utils/typescriptModels/TypeScriptModels';
import { useNavigation } from '@react-navigation/native';

const AddProductScreen = () => {
    const [productTitle, setProductTitle] = useState<string>()
    const [productPrice, setProductPrice] = useState<string>()
    const [productDesc, setProductDesc] = useState<string>()
    const [productPhotoLink, setProductPhotoLink] = useState<string>()
    const [selectedCategoryText, setSelectedCategoryText] = useState<string>()
    const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false)
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorModalAlertText, setErrorModalAlertText] = useState<string>("")

    const currentContext: SharedContextModel | any = useContext(SharedContext);

    const navigation = useNavigation()

    const Submit = () => {
        currentContext.setShowOverlay(true)
        currentContext.setShowGlobalLoading(true)
        ApiBase.Post({
            url: links.products,
            body: {
                "name": productTitle,
                "avatar": productPhotoLink,
                "description": productDesc,
                "price": productPrice,
                "category": selectedCategoryText,
                "developerEmail": "fatihhazirceng@gmail.com"
            },
            successFunction: (res: ProductsResponseModelPost) => {
                currentContext.setShowGlobalLoading(false)
                setShowSuccessModal(true)
            },
            errorFunction: (res: ErrorResponseModel) => {
                currentContext.setShowGlobalLoading(false)
                setErrorModalAlertText(res.message)
                setShowErrorModal(true)
            },
            exceptionFunction: (ex: ExceptionResponseModel) => {
                currentContext.setShowGlobalLoading(false)
                setErrorModalAlertText(ex.err)
                setShowErrorModal(true)
            }
        })
    }

    return (
        <ScrollView >
            <SuccessModal
                text={"Product Added!"}
                show={showSuccessModal}
                onSuccess={() => {
                    currentContext.setShowOverlay(false)
                    navigation.goBack()
                    currentContext.setForceProductsToRefresh(!currentContext.forceProductsToRefresh)
                    setShowSuccessModal(false)
                }}
            />
            <ErrorModal
                text={errorModalAlertText}
                show={showErrorModal}
                onSuccess={() => { currentContext.setShowOverlay(false), setShowErrorModal(false) }}
            />
            <GoBackComponent />
            <View style={styles.formContainer}>
                <View style={styles.inputTitleContainer}>
                    {productTitle && productTitle.length > 0 &&
                        <Text style={styles.inputTitle}>
                            Product Title
                        </Text>}
                </View>
                <TextInput
                    key={"1"}
                    style={styles.input}
                    onChangeText={(val) => { setProductTitle(val) }}
                    value={productTitle}
                    placeholder="Product Title" />
                <View style={styles.inputTitleContainer}>
                    {productPrice && productPrice.length > 0 &&
                        <Text style={styles.inputTitle}>
                            Price
                        </Text>}
                </View>
                <TextInput
                    key={"2"}
                    style={styles.input}
                    onChangeText={(val) => { setProductPrice(val) }}
                    value={productPrice}
                    placeholder="Price"
                    keyboardType='numeric' />

                <View style={styles.inputTitleContainer}>
                    {productDesc && productDesc.length > 0 &&
                        <Text style={styles.inputTitle}>
                            Description
                        </Text>}
                </View>
                <TextInput
                    key={"3"}
                    style={StyleSheet.flatten([styles.input, styles.multilineInput])}
                    onChangeText={(val) => { setProductDesc(val) }}
                    value={productDesc}
                    multiline
                    textAlignVertical='top'
                    textAlign='left'
                    placeholder="Description" />

                <View style={styles.inputTitleContainer}>
                    {productPhotoLink && productPhotoLink.length > 0 &&
                        <Text style={styles.inputTitle}>
                            Product Photo Link
                        </Text>}
                </View>
                <TextInput
                    key={"4"}
                    style={styles.input}
                    onChangeText={(val) => { setProductPhotoLink(val) }}
                    value={productPhotoLink}
                    placeholder="Product Photo Link" />

                <View style={StyleSheet.flatten([styles.inputTitleContainer, styles.categoryInputTitleAdditionalStyle])}>
                    {selectedCategoryText &&
                        <Text style={styles.inputTitle}>
                            Selected Category: {selectedCategoryText}
                        </Text>}
                </View>
                <View style={styles.categoryContainer}>
                    <CategoryFlatlist activatePaddingLeft={false} onSelectedCategoryChanged={(val) => setSelectedCategoryText(val)} />
                </View>

                <TouchableOpacity onPress={() => Submit()} style={styles.submitButtonContainer}>
                    <Text style={styles.submitButtonText}>Add product</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    formContainer: {
        paddingHorizontal: 8,
        marginTop: 16
    },
    inputTitleContainer: {
        minHeight: 16,
    },
    categoryInputTitleAdditionalStyle: {
        marginTop: 4
    },
    inputTitle: {
        marginLeft: 8,
        fontSize: 12,
        fontWeight: '500',
    },
    input: {
        borderColor: '#534C4C',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        height: 50,
        marginVertical: 6
    },
    multilineInput: {
        height: 150,
    },
    categoryContainer: {
        marginVertical: 12
    },
    submitButtonContainer: {
        minHeight: 50,
        backgroundColor: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        padding: 12,
        borderRadius: 10
    },
    submitButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        letterSpacing: 0.5
    }
});

export default AddProductScreen;
