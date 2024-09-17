import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { TravelerOptions } from '@/constants/TravelerOptions';
import TravelerOptionCard from './TravelerOptionCard';
import { CreateTripContext } from '@/contexts/CreateTripContext';
import { Link } from 'expo-router';

export default function SelectTraveler() {
    const travelerOptions = TravelerOptions;
    const [travelerOption, setTravelerOption] = useState<any>();
    const { tripData, setTripData } = useContext(CreateTripContext);

    useEffect(() => {
        setTripData({
            ...tripData,
            travelerOption
        })
    }, [travelerOption])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Who's Traveling</Text>
            <Text style={styles.subtitle}>Choose your travels</Text>

            <View>
                <FlatList
                    data={travelerOptions}
                    renderItem={({ item, index }) => (
                        <TouchableOpacity
                            style={styles.optionContainer}
                            onPress={() => setTravelerOption(item)}
                        >
                            <TravelerOptionCard option={item} selected={travelerOption?.title === item.title} />
                        </TouchableOpacity>
                    )}
                />
            </View>

            <TouchableOpacity style={styles.buttonContainer}>
                <Link href={'/create-trip/select-date'} style={{ textAlign: 'center' }}>
                    <Text style={styles.buttonText}>Continue</Text>
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
