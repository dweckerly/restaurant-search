import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.topHeader}>Grab your</Text>
            <Text style={styles.bottomHeader}>delicious meal!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 25,
    },
    topHeader: {
        fontSize: 35
    },
    bottomHeader: {
        fontSize: 40,
        fontWeight: 'bold'
    }
});