import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Routes from './../utils/routes/index';
import HomeScreenHeader from '../components/HomeScreenHeader';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import AddProductScreen from './../screens/AddProductScreen';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={Routes.Home} component={HomeScreen}
                    options={{ header: (() => <HomeScreenHeader />) }} />
                <Stack.Screen name={Routes.ProductDetail} component={ProductDetailScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen name={Routes.AddProduct} component={AddProductScreen}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )

};


export default MainStackNavigator;
