import { WelcomeScreen } from "@/components/Layout/WelcomeScreen";
import { BottomButton } from "@/components/UI/BottomButton";
import { ThemeText } from "@/components/UI/ThemeText";
import { router } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Welcome() {
  const handleClickStart = () => {
    router.push("/auth/login");
  };

  return (
    <WelcomeScreen>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <ThemeText theme="secondary" style={styles.Description}>
            서로가 편한 만남이 되는
          </ThemeText>
          <ThemeText theme="brand" style={styles.BrandText}>
            GwiGa
          </ThemeText>
        </View>
        <View>
          <BottomButton label="시작하기" onPress={handleClickStart} />
        </View>
      </View>
    </WelcomeScreen>
  );
}

const styles = StyleSheet.create({
  Container: {
    height: "100%",
  },
  Content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  Description: {
    fontSize: 12,
  },
  BrandText: {
    fontSize: 72,
    fontWeight: "bold",
  },
});
