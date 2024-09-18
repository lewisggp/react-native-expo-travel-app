import { View, Text, FlatList, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function HotelList({ hotelData }: any) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hotel Recommendation</Text>

            <FlatList
                data={hotelData}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item, index) => `hotel-${index}`}
                contentContainerStyle={styles.listContainer}
                renderItem={({ item }) => (
                    <View style={styles.hotelItem}>
                        <Image
                            source={require('@/assets/images/Placeholder.jpg')}
                            style={styles.image}
                        />
                        <View style={styles.hotelInfo}>
                            <Text style={styles.hotelName}>{item.hotelName}</Text>
                            <View style={styles.hotelDetails}>
                                <Text style={styles.hotelRating}>⭐ {item.rating}</Text>
                                <Text style={styles.hotelPrice}>💰 {item.price}</Text>
                            </View>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
    },
    title: {
        fontFamily: 'outfit-bold',
        fontSize: 20,
    },
    listContainer: {
        marginTop: 8,
    },
    hotelItem: {
        marginRight: 15,
    },
    image: {
        width: 180,
        height: 130,
        borderRadius: 15,
    },
    hotelInfo: {
        width: 180,
        marginTop: 8,
    },
    hotelName: {
        fontFamily: 'outfit-medium',
        fontSize: 17,
    },
    hotelDetails: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 4,
    },
    hotelRating: {
        fontFamily: 'outfit-regular',
    },
    hotelPrice: {
        fontFamily: 'outfit-regular',
    },
});
