import { View, TextInput, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { useRouter } from "expo-router";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useContext, useEffect, useState } from "react";
import { CreateTripContext } from "@/contexts/CreateTripContext";
import { Colors } from "@/constants/Colors";

export default function SearchTripCard() {
    const router = useRouter();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const [inputError, setInputError] = useState(false);

    useEffect(() => {
        console.log("Trip Data Updated", tripData);
    }, [tripData]);

    const handleContinue = () => {
        if (!tripData.locationInfo?.query || tripData.locationInfo?.query.trim() === "") {
            setInputError(true);
            Alert.alert("Error", "Please enter a location to continue.");
        } else {
            setInputError(false);
            router.push('/create-trip/select-traveler');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput
                    style={[styles.textInput, inputError && styles.errorInput]}
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
                    onSubmitEditing={handleContinue}
                    returnKeyType="search"
                />
            </View>

            {/* <GooglePlacesAutocomplete
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
            /> */}

            <TouchableOpacity style={styles.buttonContainer} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
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
    errorInput: {
        borderColor: 'red',
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
