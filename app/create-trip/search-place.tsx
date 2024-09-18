import SearchTripCard from "@/components/CreateTrip/SearchTripCard";
import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function SearchPlace() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    }, [])

    return (
        <View style={[styles.content, { paddingTop: insets.top + 50 }]}>
            <SearchTripCard />
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
