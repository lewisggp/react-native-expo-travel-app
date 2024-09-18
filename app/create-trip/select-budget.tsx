import SelectBudgetCard from "@/components/CreateTrip/SelectBudgetCard";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SelectBudget() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    return (
        <View style={[styles.content, { paddingTop: insets.top + 50 }]}>
            <SelectBudgetCard />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
