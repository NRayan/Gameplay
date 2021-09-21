import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { theme } from "../global/theme";

import { Home } from "../screens/Home";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: theme.colors.secondary100 },
                presentation: 'transparentModal',
            }}>
            <Screen name="SignIn" component={SignIn} />
            <Screen name="Home" component={Home} />
        </Navigator>
    )
}