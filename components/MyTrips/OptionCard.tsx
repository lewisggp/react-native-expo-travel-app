import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

interface OptionCardProps {
    option: {
        title: string;
        description: string;
        icon: string;
    };
    selected?: boolean;
}

export default function OptionCard({ option, selected = false }: OptionCardProps) {
    return (
        <View style={[styles.container, selected && styles.selectedContainer]}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{option.title}</Text>
                <Text style={styles.description}>{option.description}</Text>
            </View>
            <Text style={styles.icon}>{option.icon}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: Colors.grayLight,
    },
    selectedContainer: {
        borderColor: Colors.primary,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 20,
        fontFamily: 'outfit-bold',
    },
    description: {
        fontSize: 16,
        fontFamily: 'outfit-regular',
        color: Colors.gray,
    },
    icon: {
        fontSize: 40,
        marginRight: 15,
    },
});
