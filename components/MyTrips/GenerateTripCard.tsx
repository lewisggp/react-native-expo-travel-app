import { useState, useContext, useEffect } from "react";
import { View, Image, Text, StyleSheet, Alert } from "react-native";
import { AI_PROMPT } from "@/constants/AiOptions";
import { Colors } from "@/constants/Colors";
import { CreateTripContext } from "@/contexts/CreateTripContext";
import { useRouter } from "expo-router";
import { chatSession } from "@/configs/AiModal";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "@/configs/Firebase";

export default function GenerateTripCard() {
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();
    const user = auth.currentUser;
    const [tripGenerated, setTripGenerated] = useState(false);

    useEffect(() => {
        if (tripData && !tripGenerated) {
            GenerateAiTrip();
        }
    }, [tripData]);

    const GenerateAiTrip = async () => {
        if (!tripData) {
            Alert.alert("Error", "Trip Data is Empty");
            return;
        }

        const FINAL_PROMPT = AI_PROMPT.replace('{location}', tripData?.locationInfo?.name)
            .replace('{totalDays}', tripData?.totalDays)
            .replace('{totalNights}', (tripData?.totalDays ? tripData.totalDays - 1 : 0).toString())
            .replace('{traveler}', tripData?.travelerOption)
            .replace('{budget}', tripData?.budgetOption);

        const docId = (Date.now()).toString();
        const result = await chatSession.sendMessage(FINAL_PROMPT);
        const tripPlan = result.response.text();

        await setDoc(doc(db, 'UserTrips', docId), {
            userEmail: user?.email,
            tripPlan: JSON.parse(tripPlan),
            tripData: JSON.stringify(tripData),
            docId: docId
        });

        setTripGenerated(true);
        router.push('/(tabs)/my-trip');

        setTripData(undefined)
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Please Wait...</Text>
            <Text style={styles.subtitle}>We are working to generate your dream trip</Text>
            <Image style={styles.icon} source={require('@/assets/images/plane.gif')} />
            <Text style={styles.subtitle}>Do not go back</Text>
        </View>
    );
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
    },
});
