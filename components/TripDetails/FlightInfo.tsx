import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';

export default function FlightInfo({ flightData }: any) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>✈️ Flights</Text>

                <TouchableOpacity style={styles.bookButton}>
                    <Text style={styles.bookButtonText}>Book Here</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.infoText}>Airplane: {flightData.airplane || 'Unknown'}</Text>
            <Text style={styles.infoText}>Price: {flightData.price || 'N/A'}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        borderWidth: 1,
        borderColor: Colors.grayLight,
        padding: 10,
        borderRadius: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 20,
    },
    bookButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 8,
        paddingHorizontal: 10,
        borderRadius: 7,
    },
    bookButtonText: {
        textAlign: 'center',
        color: Colors.white,
        fontFamily: 'outfit-regular',
    },
    infoText: {
        fontFamily: 'outfit-regular',
        fontSize: 15,
        marginTop: 7,
    },
});
