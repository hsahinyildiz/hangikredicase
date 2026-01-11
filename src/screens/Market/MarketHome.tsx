import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../store/hooks";
import { addMarketItem } from "../../store/slices/cartSlice";
import Button from "../../components/Button";
import { showAddToCartToast } from "../../utils/toast";
import Colors from "../../constants/Colors";
import { StackNavigationProp } from "@react-navigation/stack";
import { MarketStackParamList } from "../../types/navigation";

const products = [
  "Su",
  "Kola",
  "Ayran",
  "Cips",
  "Ekmek",
  "Yumurta",
  "Süt",
  "Peynir",
  "Kaşar",
  "Çikolata",
];

type MarketHomeNavProp = StackNavigationProp<MarketStackParamList, "MarketHome">;

const MarketHome = () => {
  const navigation = useNavigation<MarketHomeNavProp>();
  const dispatch = useAppDispatch();

  const getRandomProduct = () => {
    const index = Math.floor(Math.random() * products.length);
    return products[index];
  };

  const handleAddRandom = () => {
    const product = getRandomProduct();
    dispatch(addMarketItem(product));
    showAddToCartToast(product);
  };

  return (
    <View style={styles.view}>
      <Text style={styles.title}>Market Ana Sayfa</Text>
      <Button
        title="Rastgele Ürün Ekle"
        onPress={handleAddRandom}
      />
      <Button
        style={styles.button}
        title="Sepete Git"
        onPress={() => navigation.navigate("MarketSepet")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    color: Colors.Dark,
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default MarketHome;
