import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';

export default function PlannedTrip({ plannedData }: any) {
    return (
        <View style={{ marginTop: 20 }}>
            <Text style={styles.title}>🏕️ Plan Details</Text>

            {Object.entries(plannedData).map(([index, item]: any) => (
                <View key={index}>
                    <Text style={styles.dayTitle}>{item.day}</Text>

                    {item.activities.map((place: any, index: number) => (
                        <View key={index} style={styles.activityContainer}>
                            <Image
                                source={require('@/assets/images/Placeholder.jpg')}
                                style={{
                                    width: '100%',
                                    height: 120,
                                    borderRadius: 15,
                                }}
                            />
                            <Text style={styles.locationText}>{place.location}</Text>
                            <Text style={styles.activityText}>{place.activity}</Text>
                            <View style={{
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                                alignItems: 'flex-end',
                            }}>
                                <View>
                                    <Text style={styles.infoText}>🎟️ Ticket Price: <Text style={styles.infoBold}>{place.ticketPricing || 'Unknown'}</Text></Text>
                                    <Text style={styles.infoText}>🕒 Time to Travel: <Text style={styles.infoBold}>{place.time || 'Unknown'}</Text></Text>
                                </View>
                                <TouchableOpacity style={styles.navigateButton}>
                                    <Ionicons name='navigate' size={20} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            ))}
        </View>
    );
}

const styles = {
    title: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
    },
    dayTitle: {
        fontFamily: 'outfit-medium',
        fontSize: 20,
        marginTop: 20,
    },
    activityContainer: {
        padding: 10,
        backgroundColor: Colors.blueLight,
        borderRadius: 15,
        marginTop: 15,
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 15,
    },
    locationText: {
        fontFamily: 'outfit-bold',
        fontSize: 20,
        marginTop: 5,
    },
    activityText: {
        fontFamily: 'outfit-regular',
        fontSize: 15,
        color: Colors.gray,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    infoText: {
        fontFamily: 'outfit-regular',
        fontSize: 15,
        marginTop: 5,
    },
    infoBold: {
        fontFamily: 'outfit-bold',
    },
    navigateButton: {
        backgroundColor: Colors.primary,
        padding: 10,
        borderRadius: 7,
    },
};
