import SelectTravelerCard from "@/components/MyTrips/SelectTravelerCard";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchTraveler() {
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
            <SelectTravelerCard />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
