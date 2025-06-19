import { FlatList, Pressable, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import HabitRenderItem from './Components/HabitItem';
import { Habit, HabitsStackParamList } from '@/types';

type Navigation = NativeStackNavigationProp<HabitsStackParamList, 'HabitsList'>;

const sample_data: Habit[] = [
    {
        title: "Morning Run",
        description: "Jog for at least 30 minutes around the park.",
        start_date: "2025-06-01",
        end_date: "2025-08-01",
        creation_date: "2025-05-20",
        recurrency: ["monday", "wednesday", "friday"],
        notification: true,
        type: "time amount",
        objective: 30 // in minutes
    },
    {
        title: "Drink Water",
        description: "Drink at least 2 liters of water daily.",
        start_date: "2025-06-10",
        end_date: undefined,
        creation_date: "2025-06-10",
        recurrency: ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"],
        notification: false,
        type: "amount",
        objective: 2000 // in milliliters
    },
    {
        title: "Read Books",
        description: "Read at least 20 pages of a book.",
        start_date: "2025-06-05",
        end_date: "2025-07-05",
        creation_date: "2025-06-01",
        recurrency: ["tuesday", "thursday", "saturday"],
        notification: true,
        type: "check",
        objective: true // just checked completion
    },
    {
        title: "Meditation",
        description: "Practice guided meditation.",
        start_date: "2025-06-15",
        end_date: undefined,
        creation_date: "2025-06-14",
        recurrency: ["sunday"],
        notification: true,
        type: "time amount",
        objective: 15 // in minutes
    }
];

export default function HabitsList() {
    const navigation = useNavigation<Navigation>();
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-slate-200">
            <View className='w-11/12 mx-auto rounded-xl overflow-hidden elevation-xl shadow-black drop-shadow-lg'>
                <FlatList  data={sample_data} renderItem={({ item }) => <HabitRenderItem habit={item} />}></FlatList>
            </View>
            <Pressable onPress={()=>navigation.navigate('HabitsForm')} android_ripple={{color: '#e2e8f0'}} className='bg-black w-4/12 p-3 rounded-full mx-auto bottom-10 absolute' style={{alignSelf: 'center'}}>
                <Text className='text-white text-xl mx-auto'>+ Create Habit</Text>
            </Pressable>
        </SafeAreaView>
    )
}