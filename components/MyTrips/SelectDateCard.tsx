import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import CalendarPicker from "react-native-calendar-picker";
import React, { useContext, useState } from 'react'
import { Colors } from '@/constants/Colors';
import moment, { Moment } from 'moment';
import { CreateTripContext } from '@/contexts/CreateTripContext';
import { useRouter } from 'expo-router';

export default function SelectDateCard() {
    const [startDate, setStartDate] = useState<Moment>();
    const [endDate, setEndDate] = useState<Moment>();

    const { tripData, setTripData } = useContext(CreateTripContext);

    const router = useRouter();

    const onDateChange = (date: any, type: any) => {
        if (type === 'START_DATE') {
            setStartDate(moment(date));
        }
        if (type === 'END_DATE') {
            setEndDate(moment(date));
        }
    }

    const OnDateSelectionContinue = () => {
        console.log(startDate, endDate);

        if (!startDate || !endDate) {
            Alert.alert("Error", "Please select both start and end dates.");
            return;
        }

        const totalDays = endDate.diff(startDate, 'days');
        setTripData({
            ...tripData,
            startDate: startDate,
            endDate: endDate,
            totalDays: totalDays + 1
        });

        router.push('/create-trip/select-budget')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Travel Dates</Text>
            <CalendarPicker
                onDateChange={onDateChange}
                allowRangeSelection={true}
                minDate={new Date()}
                maxRangeDuration={5}
                selectedRangeStyle={styles.selectedRange}
                selectedDayTextStyle={styles.selectedDayText}
            />
            <TouchableOpacity
                onPress={OnDateSelectionContinue}
                style={styles.buttonContainer}
            >
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
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
    selectedRange: {
        backgroundColor: Colors.primary
    },
    selectedDayText: {
        color: Colors.white
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
