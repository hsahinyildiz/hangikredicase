import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useAppSelector } from "../../store/hooks";
import Colors from "../../constants/Colors";

const FoodCart = () => {
  const foodCart = useAppSelector((state) => state.cart.foodCart);
  return (
    <View style={styles.view}>
      <Text style={styles.title}>Yemek Sepeti</Text>
      <FlatList
        data={foodCart}
        style={styles.flatlist}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemBox}>
            <Text style={styles.itemText}>• {item}</Text>
          </View>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>Sepet boş</Text>
        }
      />
    </View>
  );
};

export default FoodCart;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.Dark,
  },
  flatlist: {
    marginTop: 20
  },
  itemBox: {
    padding: 14,
    backgroundColor: Colors.White,
    borderRadius: 20,
    marginBottom: 10,
  },
  itemText: {
    fontSize: 14,
    color: Colors.Dark,
  },
  emptyText: {
    fontSize: 14,
    color: Colors.Gray,
    marginTop: 10
  },
});
