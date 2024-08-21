import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    borderRadius: 8,
  },
  logoContainer: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center",
  },
  imageLogo: {
    flex: 1,
    width: "55%",
    height:"100%",
    resizeMode: "contain",
  },
  carBrand:{
    color:"#fff",
    fontWeight:"400",
    fontSize:18,
    fontStyle:"italic",
  },
  carName:{
    color:"#fff",
    fontWeight:"bold",
    fontSize:20,
    textAlign:"center",
  },
  image:{
    flex:1,
    marginBottom:10,
    width:"80%",
    height:"80%",
    resizeMode: "contain",
    alignSelf:"center",
  },
  priceLabelContainer:{
    flexDirection:"row",
    justifyContent:"space-around",
    paddingBottom:10,
    alignItems:"center",
    marginTop:10
  },
  priceLabel: {
    color:"white",
    fontSize:22
  },
});
