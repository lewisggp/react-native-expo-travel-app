import { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import ThemedSignUp from "@/components/ThemedSignUp";

export default function SignUp() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <ThemedSignUp />
    );
}
