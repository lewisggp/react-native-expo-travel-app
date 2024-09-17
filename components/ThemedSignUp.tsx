import { useRouter } from "expo-router";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Colors } from "@/constants/Colors";
import { Ionicons } from '@expo/vector-icons';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/configs/Firebase';
import { useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PASSWORD_REGEX = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;

export default function ThemedSignUp() {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [fullName, setFullName] = useState('');

    const validateInputs = () => {
        if (!fullName.trim()) {
            Alert.alert("Validation Error", "Full name is required.");
            return false;
        }
        if (!EMAIL_REGEX.test(email)) {
            Alert.alert("Validation Error", "Invalid email address.");
            return false;
        }
        if (!PASSWORD_REGEX.test(password)) {
            Alert.alert("Validation Error", "Password must be at least 6 characters long and contain both letters and numbers.");
            return false;
        }
        return true;
    };

    const OnSignUp = () => {
        if (validateInputs()) {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    router.replace('/(tabs)/my-trip');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    if (errorCode == 'auth/email-already-in-use') {
                        Alert.alert("Error", "Email already in use");
                    } else {
                        Alert.alert("Error", errorMessage);
                    }
                });
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.backButton, { top: insets.top + 20 }]}
                onPress={() => router.back()}
            >
                <Ionicons name="arrow-back" size={24} color={Colors.black} />
            </TouchableOpacity>

            <Text style={styles.title}>Create an Account</Text>
            <Text style={styles.subtitle}>Join Us</Text>
            <Text style={styles.description}>Let's get you started!</Text>

            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Full Name"
                    placeholderTextColor={Colors.gray}
                    onChangeText={setFullName}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Email"
                    placeholderTextColor={Colors.gray}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Enter Password"
                    placeholderTextColor={Colors.gray}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>

            <TouchableOpacity
                style={styles.signUpButton}
                onPress={OnSignUp}
            >
                <Text style={styles.signUpButtonText}>Sign Up</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.signInButton}
                onPress={() => router.replace('/auth/sign-in')}
            >
                <Text style={styles.signInText}>Already have an account? Sign In</Text>
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
    signUpButton: {
        backgroundColor: Colors.black,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
    },
    signUpButtonText: {
        color: Colors.white,
        fontSize: 16,
        fontFamily: 'outfit-bold',
    },
    signInButton: {
        padding: 15,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Colors.black,
    },
    signInText: {
        color: Colors.black,
        fontSize: 16,
        fontFamily: 'outfit-regular',
    },
});
