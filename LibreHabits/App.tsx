import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import HabitsList from '@/pages/Habits/HabitsList';
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


const BottomTab = createBottomTabNavigator({
  screens: {
    Habits: HabitsList
  }
})

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <StatusBar style="auto" />
          <BottomTab.Navigator screenOptions={({ route }) => ({
            tabBarStyle: {
              borderRadius: 10,
              marginHorizontal: 10,
              elevation: 5,
              shadowColor: 'rgb(255,125,72)',       // TODO --> Update with theme color
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
              height: 60,
              bottom: 10,
            },
            headerShown: false,
            animation: 'fade',
            tabBarIcon: ({ focused, color, size }) => {
              let iconName: string = '';

              switch (route.name) {
                case 'Habits':
                  iconName = focused ? 'list' : 'list-outline';
                  break;
                default:
                  iconName = focused ? 'alert-circle' : 'alert-circle-outline';
                  break;
              }


              // Return the icon component
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: 'tomato',
            tabBarInactiveTintColor: 'gray',
          })}
          >
            <BottomTab.Screen name="Habits" component={HabitsList} />
            <BottomTab.Screen name="Habits2" component={HabitsList} />
          </BottomTab.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
