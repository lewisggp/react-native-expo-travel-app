import { View, Image, Text, StyleSheet } from "react-native";

export default function Login() {
    return (
        <View style={styles.container}>
            <Image
                source={require('@/assets/images/Login.jpg')}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Travel App
                </Text>
                <Text style={styles.description}>
                    Discover your next adventure, explore unique destinations, and create unforgettable experiences.
                </Text>
                <View style={styles.button}>
                    <Text style={styles.textButton}>
                        Sign In With Google
                    </Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: '100%',
        height: '65%',
    },
    textContainer: {
        backgroundColor: '#fff',
        marginTop: -20,
        padding: 15,
        alignItems: 'center',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        width: '100%',
        flex: 1,
    },
    text: {
        fontSize: 30,
        fontFamily: 'outfit-bold',
    },
    description: {
        fontSize: 20,
        fontFamily: 'outfit-regular',
        textAlign: 'center',
        color: '#7d7d7d',
        marginVertical: 10,
    },
    button: {
        marginTop: '10%',
        padding: 15,
        width: '100%',
        alignItems: 'center',
        backgroundColor: "#000",
        borderRadius: 100,
    },
    textButton: {
        color: "#fff",
        fontSize: 17,
        fontFamily: 'outfit-regular',
    }
});
