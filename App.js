import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

import CustomDrawer from './navigation/CustomDrawer';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { useFonts } from 'expo-font';
import thunk from "redux-thunk";
import rootReducer from "./stores/rootReducer";

import {
    OnBoarding,

    SignIn,
    SignUp,
    ForgotPassword,
    Otp,
    FoodDetail,
    MyCart,
    Checkout,
    Success,

    MyCard,
    AddCard,

    DeliveryStatus,
    
    Map,
    Order,
    Review,
    Coupon,

    MyAccount,
    MyAccountEdit,

    Settings,
    ChangePassword,
    NotificationSetting
} from "./screens";

const Stack = createStackNavigator();

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

const App = () => {

    const [loaded] = useFonts({
        "Poppins-Black": require('./assets/fonts/Poppins-Black.ttf'),
        "Poppins-Bold": require('./assets/fonts/Poppins-Bold.ttf'),
        "Poppins-SemiBold": require('./assets/fonts/Poppins-SemiBold.ttf'),
        "Poppins-Regular": require('./assets/fonts/Poppins-Regular.ttf'),
    })

    if (!loaded) {
        return null;
    }
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false
                    }}
                    initialRouteName={'OnBoarding'}
                >
                    <Stack.Screen
                        name="OnBoarding"
                        component={OnBoarding}
                    />

                    <Stack.Screen
                        name="SignIn"
                        component={SignIn}
                    />

                    <Stack.Screen
                        name="SignUp"
                        component={SignUp}
                    />

                    <Stack.Screen
                        name="ForgotPassword"
                        component={ForgotPassword}
                    />

                    <Stack.Screen
                        name="Otp"
                        component={Otp}
                    />

                    <Stack.Screen
                        name="Home"
                        component={CustomDrawer}
                    />

                    <Stack.Screen
                        name="FoodDetail"
                        component={FoodDetail}
                    />

                    <Stack.Screen
                        name="MyCart"
                        component={MyCart}
                    />

                    <Stack.Screen
                        name="MyCard"
                        component={MyCard}
                    />

                    <Stack.Screen
                        name="AddCard"
                        component={AddCard}
                    />

                    <Stack.Screen
                        name="Checkout"
                        component={Checkout}
                    />

                    <Stack.Screen
                        name="Success"
                        component={Success}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="DeliveryStatus"
                        component={DeliveryStatus}
                        options={{ gestureEnabled: false }}
                    />

                    <Stack.Screen
                        name="Map"
                        component={Map}
                    />
                    <Stack.Screen
                        name="Order"
                        component={Order}
                    />

                    <Stack.Screen
                        name="Review"
                        component={Review}
                    />

                    <Stack.Screen
                        name="Coupon"
                        component={Coupon}
                    />

                    <Stack.Screen
                        name="MyAccount"
                        component={MyAccount}
                    />

                    <Stack.Screen
                        name="MyAccountEdit"
                        component={MyAccountEdit}
                    />

                    <Stack.Screen
                        name="Settings"
                        component={Settings}
                    />

                    <Stack.Screen
                        name="ChangePassword"
                        component={ChangePassword}
                    />

                    <Stack.Screen
                        name="NotificationSetting"
                        component={NotificationSetting}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App