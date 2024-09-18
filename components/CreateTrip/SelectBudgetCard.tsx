import { View, Text, TouchableOpacity, StyleSheet, FlatList, Alert } from 'react-native';
import { useContext, useEffect, useState } from 'react';
import { Colors } from '@/constants/Colors';
import { BudgetOptions } from '@/constants/BudgetOptions';
import OptionCard from './OptionCard';
import { CreateTripContext } from '@/contexts/CreateTripContext';
import { useRouter } from 'expo-router';

export default function SelectBudgetCard() {
    const budgetOptions = BudgetOptions;
    const [budgetOption, setBudgetOption] = useState<any>();
    const { tripData, setTripData } = useContext(CreateTripContext);
    const router = useRouter();

    useEffect(() => {
        setTripData({
            ...tripData,
            budgetOption: budgetOption?.title
        });
    }, [budgetOption]);

    const handleContinue = () => {
        if (!budgetOption) {
            Alert.alert("Error", "Please select a budget option before continuing.");
        } else {
            router.push('/create-trip/review-trip');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Budget</Text>
            <Text style={styles.subtitle}>Choose spending habits for your trip</Text>

            <View>
                <FlatList
                    data={budgetOptions}
                    renderItem={({ item }) => (
                        <TouchableOpacity
                            style={styles.optionContainer}
                            onPress={() => setBudgetOption(item)}
                        >
                            <OptionCard option={item} selected={budgetOption?.title === item.title} />
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
