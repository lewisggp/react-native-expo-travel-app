import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/contexts/CreateTripContext";
import { useRouter } from "expo-router";
import { useContext } from "react";
import { View, Image, Text, StyleSheet } from "react-native";

export default function GenerateTripCard() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please Wait...</Text>
            <Text style={styles.subtitle}>We are working to generate your dream trip</Text>
            <Image style={styles.icon} source={require('@/assets/images/plane.gif')} />
            <Text style={styles.subtitle}>Do not go back</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
    },
    title: {
        fontSize: 35,
        fontFamily: 'outfit-bold',
        textAlign: 'center',
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        marginBottom: 20,
        textAlign: 'center',
        color: Colors.gray,
    },
    icon: {
        width: '100%',
        height: 200,
        objectFit: 'contain',
    }
});
