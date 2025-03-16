import { View, Text, StyleSheet } from "react-native";

const Login = () => {
  return <View style={styles.loginContainer}>
    <Text>Login</Text>
  </View>;
};

const styles = StyleSheet.create({
  loginContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
});


export default Login