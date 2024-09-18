import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import moment from 'moment';
import { Colors } from '@/constants/Colors';

export default function UserTripCard({ trip }: any) {
    const TripData = JSON.parse(trip.tripData)

    const TripImage = () => {
        if (process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY == 'YOUR API KEY') {
            return require('@/assets/images/Placeholder.jpg');
        }

        const url = 'https://maps.googleapis.com/maps/api/place/details/json'
            + '?placeid=' + TripData.locationInfo?.photoRef
            + '&key=' + process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

        return { uri: url };
    }

    return (
        <View style={styles.container}>
            <Image
                source={TripImage()}
                style={styles.image}
            />
            <View>
                <Text style={styles.destination}>{trip.tripPlan.trip.destination}</Text>
                <Text style={styles.text}>{moment(TripData.startDate).format('DD MMM yyyy')}</Text>
                <Text style={styles.text}>Traveling: {TripData.travelerOption}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
    },
    destination: {
        fontFamily: 'outfit-medium',
        fontSize: 20,
    },
    text: {
        fontFamily: 'outfit-regular',
        fontSize: 16,
        color: Colors.gray,
    },
});
