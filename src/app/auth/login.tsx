import { Screen } from "@/components/Layout/Screen";
import { GoogleLoginButton } from "@/components/UI/GoogleLoginButton";
import { ThemeText } from "@/components/UI/ThemeText";
import { StyleSheet, View, useWindowDimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Login() {
  const { height } = useWindowDimensions();
  const insets = useSafeAreaInsets();

  return (
    <Screen>
      <View style={styles.LoginContainer}>
        <ThemeText theme={"brand"} style={styles.BrandText}>
          GwiGa
        </ThemeText>
        <ThemeText style={styles.LoginTitle}>로그인 / 회원가입</ThemeText>
        <View style={styles.LoginButtonList}>
          <GoogleLoginButton />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  BrandText: {
    fontSize: 64,
    fontWeight: "700",
    textAlign: "center",
  },
  LoginTitle: {
    fontSize: 24,
    lineHeight: 34,
    fontWeight: "700",
    textAlign: "center",
  },
  LoginContainer: {
    width: "100%",
    height: "100%",
    maxWidth: 400,
    alignItems: "center",
    justifyContent: "center",
    gap: 28,
  },
  LoginButtonList: {
    width: "80%",
  },
});
