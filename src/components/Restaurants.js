import { View, Text, StyleSheet, ActivityIndicator, FlatList } from "react-native";
import useRestaurants from "../hooks/useRestaurants";
import { useEffect } from "react";
import RestaurantItem from "./RestaurantItem";

export default function Restaurants({term}) {
    const [{data, loading, error}, searchRestaurants] = useRestaurants();
    useEffect(() => {
        searchRestaurants(term);
    }, [term]);
    if(loading) return <ActivityIndicator size="large" marginVertical={30} />;
    if(error) return (
        <View style={styles.conainter}>
            <Text style={styles.header}>{error}</Text>
        </View>
    );
    return (
        <View style={styles.conainter}>
            <Text style={styles.header}>Top Restaurants</Text>
            <FlatList 
                data = {data}
                keyExtractor={(restaurant) => {restaurant.id}}
                renderItem={({item}) => <RestaurantItem restaurant={item}></RestaurantItem> }
                showsVerticalScrollIndicator = {false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    conainter: {
        marginHorizontal: 25,
        marginVertical: 15,
        marginBottom: 100
    },
    header: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 10,
    }
})