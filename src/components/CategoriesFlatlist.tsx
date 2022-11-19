import React, { useContext, useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    FlatList,
    ActivityIndicator
} from 'react-native';
import ApiBase from '../utils/apiBase/ApiBase';
import { links } from '../utils/apiBase/Links';
import { SharedContext } from '../utils/sharedContext/SharedContext';
import { CategoriesResponseModel, CategoryModel, ErrorResponseModel, ExceptionResponseModel, RenderItemModel, SharedContextModel } from '../utils/typescriptModels/TypeScriptModels';
import ErrorModal from './ErrorModal';

interface CategoryFlatlistProps {
    activatePaddingLeft?: boolean,
    activeDefaultSelection?: boolean,
    onSelectedCategoryChanged?: (arg0: string) => void,
    allowFiltering?: boolean
}

const CategoryFlatlist = (props: CategoryFlatlistProps) => {
    const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>()
    const [updateCategoryFlatlist, setUpdateCategoryFlatlist] = useState<boolean>(false)
    const [categories, setCategories] = useState<Array<CategoryModel>>([{ _id: "415", name: "All" }])
    const [showErrorModal, setShowErrorModal] = useState<boolean>(false)
    const [errorModalAlertText, setErrorModalAlertText] = useState<string>("")
    const [showLoading, setShowLoading] = useState<boolean>(false)

    const currentContext: SharedContextModel | any = useContext(SharedContext);

    useEffect(() => {
        setUpdateCategoryFlatlist(!updateCategoryFlatlist)
        if (props.onSelectedCategoryChanged && selectedCategoryIndex != undefined && categories) {
            props.onSelectedCategoryChanged(categories[selectedCategoryIndex].name)
        }
        //Filter trigger
        if (props.allowFiltering && selectedCategoryIndex != undefined && categories) {
            currentContext.setselectedCategory(categories[selectedCategoryIndex].name);
        }
    }, [selectedCategoryIndex])

    useEffect(() => {
        if (props.activeDefaultSelection) {
            setSelectedCategoryIndex(0)
        }
    }, [props.activeDefaultSelection])

    useEffect(() => {
        GetCategories()
    }, [])

    const GetCategories = async () => {
        setShowLoading(true)
        ApiBase.Get({
            url: links.categories,
            successFunction: (res: CategoriesResponseModel) => {
                setCategories(categories.concat(res.categories))
                setShowLoading(false)
            },
            errorFunction: (res: ErrorResponseModel) => {
                setShowLoading(false)
                currentContext.setShowOverlay(true)
                setErrorModalAlertText(res.message)
                setShowErrorModal(true)
            },
            exceptionFunction: (ex: ExceptionResponseModel) => {
                setShowLoading(false)
                currentContext.setShowOverlay(true)
                setErrorModalAlertText(ex.err)
                setShowErrorModal(true)
            }
        })
    }
    const renderItemForCategory = (data: RenderItemModel) => {
        return (
            <TouchableOpacity
                key={data.index.toString()}
                onPress={() => { setSelectedCategoryIndex(data.index) }}
                style={selectedCategoryIndex == data.index ?
                    [styles.selectedCategory, styles.eachCategoryContainer] :
                    [styles.notSelectedCategory, styles.eachCategoryContainer]}>
                <Text
                    style={selectedCategoryIndex == data.index ?
                        [styles.selectedCategoryText, styles.eachCategoryText] :
                        [styles.notSelectedCategoryText, styles.eachCategoryText]}>{data.item.name}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <View>
            <ErrorModal
                text={errorModalAlertText}
                show={showErrorModal}
                onSuccess={() => { currentContext.setShowOverlay(false), setShowErrorModal(false) }}
            />
            <View style={styles.categoriesSection}>
                {showLoading ?
                    <ActivityIndicator size="large" color="#323232" />
                    :
                    <FlatList
                        style={props.activatePaddingLeft ? styles.flatlistStyle : { paddingLeft: 0 }}
                        showsHorizontalScrollIndicator={false}
                        data={categories}
                        horizontal={true}
                        extraData={updateCategoryFlatlist}
                        renderItem={renderItemForCategory}
                        keyExtractor={(item: any, index: number) => index.toString()}
                    />}
            </View>
        </View>

    );
};

const styles = StyleSheet.create({
    categoriesSection: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    },
    flatlistStyle: {
        paddingLeft: 22
    },
    eachCategoryContainer: {
        marginRight: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 15
    },
    notSelectedCategory: {
        backgroundColor: 'black',
        height: 50,
        alignSelf: 'flex-end'
    },
    selectedCategory: {
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 3,
        height: 55
    },
    eachCategoryText: {
        fontWeight: 'bold',
        letterSpacing: 1,
    },
    notSelectedCategoryText: {
        color: 'white',
    },
    selectedCategoryText: {
        color: 'black',
    }
});

export default CategoryFlatlist;
