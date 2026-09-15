import { Screen } from "@/components/Layout/Screen";
import { StyleSheet, View } from "react-native";

export function WelcomeScreen({ children }: { children: React.ReactNode }) {
  return (
    <Screen>
      <View style={styles.ScreenContainer}>{children}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  ScreenContainer: {
    marginBottom: 64,
    marginHorizontal: 20,
  },
});
