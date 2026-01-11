import Toast from "react-native-toast-message";

export const showAddToCartToast = (productName: string): void => {
    Toast.show({
        type: "success",
        text1: `${productName} sepete eklendi`,
        position: "top",
        visibilityTime: 1500,
    });
};
