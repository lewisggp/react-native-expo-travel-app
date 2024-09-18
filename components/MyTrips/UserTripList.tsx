import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '@/constants/Colors';
import UserTripCard from './UserTripCard';
import { useRouter } from 'expo-router';

export default function UserTripList({ userTrips }: { userTrips: any[] }) {
    const router = useRouter();

    const LatestTrip = JSON.parse(userTrips[0].tripData)

    const LatestTripImage = () => {
        if (process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY == 'YOUR API KEY') {
            return require('@/assets/images/Placeholder.jpg');
        }

        const url = 'https://maps.googleapis.com/maps/api/place/details/json'
            + '?placeid=' + LatestTrip.locationInfo?.photoRef
            + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

        return { uri: url };
    }

    return (
        <View style={styles.content}>
            <Image source={LatestTripImage()}
                style={styles.image} />
            <Text style={styles.destination}>{userTrips[0].tripPlan.trip.destination}</Text>

            <View style={styles.header}>
                <Text style={styles.text}>{moment(LatestTrip.startDate).format('DD MMM yyyy')}</Text>
                <Text style={styles.text}>{LatestTrip.travelerOption}</Text>
            </View>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={() => router.push({
                    pathname: '/trip-details',
                    params: {
                        trip: JSON.stringify(userTrips[0])
                    }
                })}
            >
                <Text style={styles.buttonText}>See your plan</Text>
            </TouchableOpacity>

            {userTrips.map(userTrip => <UserTripCard trip={userTrip} key={userTrip.docId} />)}
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
    },
    destination: {
        fontFamily: 'outfit-bold',
        fontSize: 25,
        marginTop: 10,
    },
    image: {
        width: '100%',
        height: 240,
        objectFit: 'cover',
        borderRadius: 15
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginTop: 10,
    },
    text: {
        fontFamily: 'outfit-regular',
        fontSize: 17,
        color: Colors.gray,
    },
    buttonContainer: {
        padding: 15,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        marginTop: 20,
    },
    buttonText: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: 'outfit-medium',
        fontSize: 20,
    },
});
