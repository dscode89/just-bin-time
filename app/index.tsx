import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

const Home = () => {
  const [loaded, error] = useFonts({
    spaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  return (
    <View style={styles.loginContainer}>
      <Text style={styles.titleText}>Bin-A-While</Text>
      <Image
        source={require("../assets/images/bin.png")}
        style={styles.binImg}
      ></Image>
      <Pressable style={styles.pressableStyle}>
        <Text style={styles.btnText}>Login</Text>
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
    borderColor: "#04D9FF",
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  btnText: {
    fontSize: 22,
    color: "#04D9FF",
  },
  binImg: {
    width: "100%",
    height: "60%",
    marginBottom: 15,
  },
  titleText: {
    fontFamily: "spaceMono",
    fontSize: 40,
    color: "#04D9FF",
  },
});

export default Home;
