import React, { useEffect, useState } from "react";
import { View, Button, Image, Text } from "react-native";
import { styles } from "./style";
import Logo from "../../../assets/logo.png";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviosItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarDate] = useState<CarModel | null>(null);
  useEffect(() => {
    (async () => {  
      await loadCarData(7, setCarDate)
      console.log(carData)
    })();
  }, [])

  const renderLogoBox = () => (
    /* Técnica de subfunção dentro do próprio componenrte */
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    /* Técnica de subfunção dentro do próprio componenrte */
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{ uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png` }}
    />
  );

  const renderPriceControl = () => (
    <View style={styles.priceLabelContainer}>
      <Button title="<" color={"#01A6B3"} onPress={() => {handlePreviosItem(carData, setCarDate)}} />
      <Text style={styles.priceLabel}> {carData?.price} </Text>
      <Button title=">" color={"#01A6B3"} onPress={() => {handleNextItem(carData, setCarDate)}} />
    </View>
  );

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControl()}
    </View>
  );
}
