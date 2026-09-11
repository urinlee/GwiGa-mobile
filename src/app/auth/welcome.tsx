import { Screen } from "@/components/Layout/Screen";
import { BottomButton } from "@/components/UI/BottomButton";
import { ThemeText } from "@/components/UI/ThemeText";
import { StyleSheet, View } from "react-native";

export default function Register() {
  return (
    <Screen>
      <View style={styles.Container}>
        <View style={styles.Content}>
          <ThemeText theme="secondary" style={styles.Description}>
            서로가 편한 만남이 되는
          </ThemeText>
          <ThemeText theme="brand" style={styles.BrandText}>
            GwiGa
          </ThemeText>
        </View>
        <View style={{ paddingHorizontal: 16, paddingBottom: 64 }}>
          <BottomButton label="시작하기" onPress={() => {}} />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    display: "flex",
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
