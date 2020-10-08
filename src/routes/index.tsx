import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Connection from '../screens/Connection'

const AppStack = createStackNavigator()

const Routes: React.FC = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <AppStack.Screen name="Connection" component={Connection} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}

export default Routes