import { Habit } from "@/types";
import { Pressable, Text, View } from "react-native";

interface HabitItemProps {
    habit: Habit;
}

export default function HabitRenderItem({ habit }: HabitItemProps) {
    return (
        <Pressable android_ripple={{ color: 'gray' /*customize with theme*/ }} className="w-full bg-slate-100 px-8 py-2">
            <View>
                <Text className="text-lg font-bold">{habit.title}</Text>
                <View className="flex flex-row">
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('monday') ? "bg-slate-950 text-white" : "")}>M</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('tuesday') ? "bg-slate-950 text-white" : "")}>T</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('wednesday') ? "bg-slate-950 text-white" : "")}>W</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('thursday') ? "bg-slate-950 text-white" : "")}>T</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('friday') ? "bg-slate-950 text-white" : "")}>F</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('saturday') ? "bg-slate-950 text-white" : "")}>S</Text>
                    <Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (habit.recurrency.includes('sunday') ? "bg-slate-950 text-white" : "")}>S</Text>
                </View>
            </View>
        </Pressable>
    )
}