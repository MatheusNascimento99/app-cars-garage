import { View, TouchableOpacity, Text } from "react-native";
import "./style";
import { styles } from "./style";
import { AntDesign } from "@expo/vector-icons"


export default function BuyButton() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
      <AntDesign name="shoppingcart" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>Buy This</Text>
      </TouchableOpacity>
    </View>
  );
}
