import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { TravelerOptions } from '@/constants/TravelerOptions';
import OptionCard from './OptionCard';
import { CreateTripContext } from '@/contexts/CreateTripContext';
import { useRouter } from 'expo-router';

export default function SelectTraveler() {
    const travelerOptions = TravelerOptions;
    const [travelerOption, setTravelerOption] = useState<any>();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        setTripData({
            ...tripData,
            travelerOption: travelerOption?.title
        });
    }, [travelerOption]);

    const handleContinue = () => {
        if (!travelerOption) {
            Alert.alert("Error", "Please select who is traveling before continuing.");
        } else {
            router.push('/create-trip/select-date');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Who's Traveling</Text>
            <Text style={styles.subtitle}>Choose your travels</Text>

            <View>
                <FlatList
                    data={travelerOptions}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.optionContainer}
                            onPress={() => setTravelerOption(item)}
                        >
                            <OptionCard option={item} selected={travelerOption?.title === item.title} />
                        </TouchableOpacity>
                    )}
                    keyExtractor={(item) => item.title}
                />
            </View>

            <TouchableOpacity
                style={styles.buttonContainer}
                onPress={handleContinue}
            >
                <Text style={styles.buttonText}>Continue</Text>
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
    },
    optionContainer: {
        marginVertical: 10,
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
