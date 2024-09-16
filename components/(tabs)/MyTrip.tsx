import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function MyTrip() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <View style={[styles.header, { top: insets.top + 20 }]}>
                <Text style={styles.title}>My Trips</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => alert('Add a new trip')}
                >
                    <Ionicons name="add-circle-outline" size={36} color={Colors.black} />
                </TouchableOpacity>
            </View>

            <View style={styles.content}>
                <Ionicons name="location-outline" size={50} color={Colors.black} />
                <Text style={styles.noTripsText}>No trips planned yet</Text>
                <Text style={styles.description}>
                    Looks like its time to plan a new travel experience! Get Started below
                </Text>

                <TouchableOpacity
                    style={styles.startTripButton}
                    onPress={() => alert('Start a new trip')}
                >
                    <Text style={styles.startTripButtonText}>Start a new trip</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        left: 20,
        right: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.black,
    },
    addButton: {
        zIndex: 1,
    },
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
