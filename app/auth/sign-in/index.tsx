import { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "expo-router";
import ThemedSignIn from "@/components/ThemedSignIn";

export default function SignIn() {
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false
        })
    }, [])

    return (
        <ThemedSignIn />
    );
}
