import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import moment from 'moment';
import FlightInfo from './FlightInfo';
import HotelList from './HotelList';
import PlannedTrip from './PlannedTrip';

export default function TripDetailCard({ trip }: any) {
    const LatestTrip = JSON.parse(trip.tripData);

    const LatestTripImage = () => {
        const apiKey = process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY;

        if (apiKey === 'YOUR API KEY') {
            return require('@/assets/images/Placeholder.jpg');
        }

        const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${trip.locationInfo?.photoRef}&key=${apiKey}`;
        return { uri: url };
    };

    const formatDate = (date: string) => moment(date).format('DD MMM yyyy');

    return (
        <View>
            <Image source={LatestTripImage()} style={styles.image} />
            <View style={styles.detailsContainer}>
                <Text style={styles.title}>{LatestTrip.locationInfo.query}</Text>
                <View style={styles.dateContainer}>
                    <Text style={styles.dateText}>{formatDate(trip.tripData.startDate)}</Text>
                    <Text>-</Text>
                    <Text style={styles.dateText}>{formatDate(trip.tripData.endDate)}</Text>
                </View>
                <Text style={styles.travelOption}>🚍 {LatestTrip.travelerOption}</Text>

                <FlightInfo flightData={trip.tripPlan.trip.flight} />
                <HotelList hotelData={trip.tripPlan.trip.hotels} />
                <PlannedTrip plannedData={trip.tripPlan.trip.dayPlan} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 330,
    },
    detailsContainer: {
        padding: 15,
        backgroundColor: Colors.white,
        marginTop: -30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    title: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
    },
    dateContainer: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 5,
    },
    dateText: {
        fontFamily: 'outfit-regular',
        fontSize: 18,
        color: Colors.gray,
    },
    travelOption: {
        fontFamily: 'outfit-regular',
        fontSize: 17,
        color: Colors.gray,
        marginTop: 5,
    },
});
