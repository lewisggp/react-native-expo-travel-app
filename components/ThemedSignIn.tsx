import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';

export default function ThemedSignIn() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.backButton, { top: insets.top + 20 }]}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color={Colors.black} />
            </TouchableOpacity>

            <Text style={styles.title}>Let's Sign You In</Text>
            <Text style={styles.subtitle}>Welcome Back</Text>
            <Text style={styles.description}>You've been missed!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor={Colors.gray}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor={Colors.gray}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                style={styles.signInButton}
                onPress={() => router.replace('auth/home')}
            >
                <Text style={styles.signInButtonText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.createAccountButton}
                onPress={() => router.replace('auth/sign-up')}
            >
                <Text style={styles.createAccountText}>Create Account</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    backButton: {
        position: 'absolute',
        left: 20,
        zIndex: 1,
    },
    title: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
        color: Colors.black,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 24,
        fontFamily: 'outfit-regular',
        color: Colors.black,
        textAlign: 'center',
        marginTop: 10,
    },
    description: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        color: Colors.gray,
        textAlign: 'center',
        marginVertical: 10,
    },
    inputContainer: {
        marginTop: 20,
    },
    input: {
        height: 50,
        backgroundColor: Colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: Colors.grayLight,
    },
    signInButton: {
        backgroundColor: Colors.black,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    signInButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'outfit-bold',
    },
    createAccountButton: {
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.black,
    },
    createAccountText: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: 'outfit-regular',
    },
});
