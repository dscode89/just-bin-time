import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Home = () => {
  const [loaded, error] = useFonts({
    spaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.titleText}>Just-Bin-Time</Text>
      <Image
        source={require("../assets/images/bin.png")}
        style={styles.binImg}
      ></Image>
      <Pressable style={styles.pressableStyle}>
        <Text style={styles.btnText}>VIEW SCHEDULE</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#494848",
  },
  pressableStyle: {
    width: "60%",
    padding: 10,
    borderWidth: 2,
    borderColor: "#2CCA43",
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 22,
    color: "#2CCA43",
  },
  binImg: {
    width: "100%",
    height: "60%",
  },
  titleText: {
    fontFamily: "spaceMono",
    fontSize: 40,
    color: "#2CCA43",
  },
});

export default Home;
