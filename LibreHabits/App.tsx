import "./global.css"
import { StatusBar } from 'expo-status-bar';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from '@expo/vector-icons';

import HabitsList from '@/pages/Habits/HabitsList';
import { SafeAreaProvider } from "react-native-safe-area-context";
import CreateHabit from "./pages/Habits/CreateHabit";
import { HabitsStackParamList } from "./types";


const BottomTab = createBottomTabNavigator()



export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer >

        <StatusBar style="auto" />
        <BottomTab.Navigator screenOptions={({ route }) => ({
          tabBarStyle: {
            backgroundColor: "#e2e8f0",
            borderRadius: 0,
            marginHorizontal: 0,
            elevation: 0,
            shadowColor: '#000',       // TODO --> Update with theme color
            shadowOffset: { width: 0, height: -3 },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            height: 60,
            bottom: 0,
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
          tabBarActiveTintColor: '#000',
          tabBarInactiveTintColor: '#444',
        })}
        >
          <BottomTab.Screen name="Habits" component={HabitsStack} />
          <BottomTab.Screen name="Habits2" component={HabitsList} />
        </BottomTab.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}



function HabitsStack() {
  const Stack = createNativeStackNavigator<HabitsStackParamList>();
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
      <Stack.Screen name="HabitsList" component={HabitsList}></Stack.Screen>
      <Stack.Screen name="HabitsForm" component={CreateHabit}></Stack.Screen>
    </Stack.Navigator>
  )
}