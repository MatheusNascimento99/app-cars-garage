import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  constainer: {
    flex: 1,
    width: "100%",
    backgroundColor: "#1E1E20",
    alignItems: "center",
    justifyContent: "center",
  },
  cameraBox: {
    position: "relative",
    width: 350,
    height: "90%",
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden", //corta tudo que sai dessa div
    borderRadius: 10,
  },
  trianguleCorner: {
    position: "absolute",
    width: 0,
    height: 0,
    borderStyle: "solid",
    borderTopWidth: 20,
    borderTopColor: "#fff",
    borderRightWidth: 20,
    borderRightColor: "transparent",
  },
  topRight:{
    top:0,
    right:0,
    transform: [{rotate: "90deg"}],
  },
  bottomRight:{
    bottom:0,
    right:0,
    transform: [{rotate: "180deg"}],
  },
  bottomLeft:{
    bottom:0,
    left:0,
    transform: [{rotate: "270deg"}],
  }
});
