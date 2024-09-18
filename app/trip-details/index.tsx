import TripDetailCard from "@/components/MyTrips/TripDetailCard";
import { Colors } from "@/constants/Colors";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function ReviewTrip() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    const { trip } = useLocalSearchParams();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    }, []);

    return (
        <ScrollView style={styles.content}>
            {typeof trip === 'string' ? (
                <TripDetailCard trip={JSON.parse(trip)} />
            ) : (
                <Text>Error: Invalid trip data</Text>
            )}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
    },
});
