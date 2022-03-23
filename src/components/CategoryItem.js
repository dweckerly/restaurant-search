import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { elevation } from "../shared/styles";

export default function CategoryItem({ name, imageUrl, index, length, active, handlePress }) {
    return (
        <TouchableOpacity onPress={handlePress}>
            <View style={[styles.container, elevation, index > 0 ? {marginLeft: 10} : {marginLeft: 25}, 
                index === (length - 1) ? { marginRight: 25 } : {marginRight: 0 },
                active ? { backgroundColor: "rgb(241, 186, 87)"} : { backgroundColor: "white" }
            ]}>
                <View style={styles.imageContainer}>
                    <Image 
                        style={styles.image}
                        source={imageUrl}/>
                </View>
                <Text style={styles.label}>{name}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 70,
        height: 100,
        borderRadius: 50,
        marginVertical: 15,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center"
    },
    image: {
        width: 35,
        height: 35
    },
    imageContainer: {
        width: 50,
        height: 50,
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 30,
        marginBottom: 5
    },
    label: {
        fontWeight: "bold"
    }
});