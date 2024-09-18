import { Colors } from "@/constants/Colors";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Discover() {
    const insets = useSafeAreaInsets();
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, [])

    return (
        <View style={[styles.content, { paddingTop: insets.top + 50 }]}>
            <Text style={styles.title}>Discover</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: Colors.white,
        padding: 20,
    },
    title: {
        fontSize: 25,
        fontFamily: 'outfit-bold',
    },
});
