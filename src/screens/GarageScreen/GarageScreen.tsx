import { View, Text } from "react-native";
import { styles } from "./GarageScreenStyle";
import CardView from "../../components/CardView";
export default function GarageScreen() {
  return (
    <View style={styles.constainer}>
      <View style={styles.cameraBox}>
        <View style={styles.trianguleCorner}></View>
        <View style={[styles.trianguleCorner, styles.topRight]}></View>
        {/* //usado array de estilização */}
        <View style={[styles.trianguleCorner, styles.bottomRight]}></View>
        <View style={[styles.trianguleCorner, styles.bottomLeft]}></View>
        <CardView />
      </View>
    </View>
  );
}
