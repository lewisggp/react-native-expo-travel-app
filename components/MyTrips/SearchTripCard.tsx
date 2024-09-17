import { View, TextInput, StyleSheet, Text } from "react-native";
import { useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "@/contexts/CreateTripContext";

export default function SearchTripCard() {
    const router = useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        console.log("Trip Data Updated", tripData);
    }, [tripData]);

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Search location"
                    value={tripData.locationInfo?.query || ''}
                    onChangeText={(text) => setTripData({
                        locationInfo: {
                            query: text,
                            name: 'Trip description',
                            coordinates: '10.00 23.00',
                            photoRef: 'img',
                            url: 'url'
                        }
                    })}
                    onSubmitEditing={(text) => router.push('/create-trip/select-traveler')}
                    returnKeyType="search"
                />
            </View>

            <GooglePlacesAutocomplete
                placeholder='Search location'
                fetchDetails={true}
                onPress={(data, details = null) => {
                    setTripData({
                        locationInfo: {
                            name: data.description,
                            coordinates: details?.geometry.location,
                            photoRef: details?.reference,
                            url: details?.url
                        }
                    });
                }}
                query={{
                    key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
                    language: 'en',
                }}
                styles={{
                    textInputContainer: styles.textInputContainer,
                    textInput: styles.textInput,
                }}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    textInputContainer: {
        width: '100%',
        borderRadius: 10,
        marginBottom: 15,
    },
    textInput: {
        height: 40,
        color: '#5d5d5d',
        fontSize: 16,
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#fff',
    },
});
