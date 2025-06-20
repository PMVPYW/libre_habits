import { useState } from "react";
import { KeyboardAvoidingView, ScrollView, TextInput, Text, View, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const pressable_color = { color: 'gray' /*customize with theme*/ }

export default function CreateHabit() {
    const [recurrency, setRecurrency] = useState<string[]>([]);
    return (
        <SafeAreaView style={{ flex: 1 }} className="bg-slate-200">
            <KeyboardAvoidingView className="w-11/12 mx-auto">
                <ScrollView contentContainerStyle={{ flexGrow: 1 }} className='w-full bg-slate-100 mx-auto rounded-xl overflow-hidden elevation-xl shadow-black drop-shadow-sm mt-4 flex'>
                    <TextInput className="w-11/12 bg-gray-200 mx-auto rounded-xl mt-2 px-2" maxLength={255} placeholder="Title" />

                    <TextInput className="w-11/12 bg-gray-200 mx-auto rounded-xl mt-2 px-2 h-40" style={{ textAlignVertical: 'top' }} multiline numberOfLines={200} placeholder="Description" />

                    <View className="flex flex-row m-4">
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'monday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('monday') ? "bg-slate-950 text-white" : "")}>M</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'tuesday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('tuesday') ? "bg-slate-950 text-white" : "")}>T</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'wednesday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('wednesday') ? "bg-slate-950 text-white" : "")}>W</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'thursday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('thursday') ? "bg-slate-950 text-white" : "")}>T</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'friday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('friday') ? "bg-slate-950 text-white" : "")}>F</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'saturday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('saturday') ? "bg-slate-950 text-white" : "")}>S</Text></Pressable>
                        <Pressable onPress={()=>setRecurrency(array_toogle(recurrency, 'sunday'))}><Text className={"w-8 h-8 border-2 border-slate-950 rounded-full mx-1 items-center justify-center flex text-center " + (recurrency.includes('sunday') ? "bg-slate-950 text-white" : "")}>S</Text></Pressable>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

function array_toogle(array: string[], toogle: string) {
    if (array.includes(toogle))
    {
        return array.filter((item) => item != toogle)
    }
    return [...array, toogle]
}