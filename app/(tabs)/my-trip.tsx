import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from "@/constants/Colors";
import StartNewTripCard from "@/components/MyTrips/StartNewTripCard";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { auth, db } from "@/configs/Firebase";
import UserTripList from "@/components/MyTrips/UserTripList";

export default function MyTrip() {
    const insets = useSafeAreaInsets();

    const user = auth.currentUser;
    const [userTrips, setUserTrips] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    const GetMyTrips = async () => {
        const q = query(collection(db, 'UserTrips'), where('userEmail', '==', user?.email));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            setUserTrips(prev => [...prev, doc.data()]);
        });

        setLoading(false);
    }

    useEffect(() => {
        if (user) {
            GetMyTrips();
        }
    }, [user])

    return (
        <ScrollView style={[styles.content, { paddingTop: insets.top }]}>
            <View style={styles.header}>
                <Text style={styles.title}>My Trips</Text>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => alert('Add a new trip')}
                >
                    <Ionicons name="add-circle-outline" size={36} color={Colors.black} />
                </TouchableOpacity>
            </View>

            {loading && (<ActivityIndicator size={'large'} color={Colors.gray} />)}

            {userTrips?.length > 0 ? (
                <UserTripList userTrips={userTrips} />
            ) : <StartNewTripCard />}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        padding: 20,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.black,
    },
    addButton: {
        zIndex: 1,
    },
    noTripsText: {
        fontSize: 24,
        fontFamily: 'outfit-regular',
        color: Colors.black,
        marginTop: 20,
        textAlign: 'center',
    },
});
