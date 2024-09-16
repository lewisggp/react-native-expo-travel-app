import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function StartNewTripCard() {
    const router = useRouter();

    return (
        <View style={styles.content}>
            <Ionicons name="location-outline" size={50} color={Colors.black} />
            <Text style={styles.noTripsText}>No trips planned yet</Text>
            <Text style={styles.description}>
                Looks like its time to plan a new travel experience! Get Started below
            </Text>

            <TouchableOpacity
                style={styles.startTripButton}
                onPress={() => router.push('/create-trip/searchplace')}
            >
                <Text style={styles.startTripButtonText}>Start a new trip</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    noTripsText: {
        fontSize: 24,
        fontFamily: 'outfit-regular',
        color: Colors.black,
        marginTop: 20,
        textAlign: 'center',
    },
    description: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        color: Colors.gray,
        textAlign: 'center',
        marginVertical: 10,
        paddingHorizontal: 20,
    },
    startTripButton: {
        backgroundColor: Colors.black,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
    },
    startTripButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'outfit-bold',
    },
});
