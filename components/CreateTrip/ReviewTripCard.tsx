import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { CreateTripContext } from '@/contexts/CreateTripContext';
import { Link } from 'expo-router';
import moment from 'moment';

export default function ReviewTripCard() {
    const { tripData, setTripData } = useContext(CreateTripContext);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Review your Trip</Text>
            <Text style={styles.subtitle}>Before generating your trip, please review your selection</Text>

            <View style={styles.infoContainer}>
                <View style={styles.infoItem}>
                    <Text style={styles.icon}>📍</Text>
                    <View style={styles.textGroup}>
                        <Text style={styles.infoLabel}>Destination</Text>
                        <Text style={styles.infoText}>{tripData.locationInfo?.query}</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.icon}>📅</Text>
                    <View style={styles.textGroup}>
                        <Text style={styles.infoLabel}>Travel Date</Text>
                        <Text style={styles.infoText}>
                            {moment(tripData.startDate).format('DD MMM ')}
                            {moment(tripData.endDate).format('to DD MMM ')}
                            ({tripData.totalDays} days)
                        </Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.icon}>🚍</Text>
                    <View style={styles.textGroup}>
                        <Text style={styles.infoLabel}>Who is Traveling</Text>
                        <Text style={styles.infoText}>{tripData.travelerOption}</Text>
                    </View>
                </View>

                <View style={styles.infoItem}>
                    <Text style={styles.icon}>💰</Text>
                    <View style={styles.textGroup}>
                        <Text style={styles.infoLabel}>Budget</Text>
                        <Text style={styles.infoText}>{tripData.budgetOption}</Text>
                    </View>
                </View>
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Link href={'/create-trip/generate-trip'} style={{ textAlign: 'center' }}>
                    <Text style={styles.buttonText}>Build My Trip</Text>
                </Link>
            </TouchableOpacity>
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
        marginBottom: 30,
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
        marginBottom: 20,
    },
    infoContainer: {
        marginBottom: 30,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    textGroup: {
        marginLeft: 5,
    },
    infoLabel: {
        fontSize: 20,
        fontFamily: 'outfit-regular',
        color: Colors.gray,
    },
    infoText: {
        fontSize: 20,
        fontFamily: 'outfit-medium',
        color: Colors.primary,
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
    icon: {
        fontSize: 40,
        marginRight: 15,
    },
});
