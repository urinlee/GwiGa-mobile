import { useAppTheme } from "@/hooks/useAppTheme";
import { router } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import { Pressable, StyleSheet, View } from "react-native";
import { ThemeText } from "./ThemeText";

interface GoBackHeaderProps {
  title?: string;
  onBackPress?: () => void;
}

export function GoBackHeader({
  title,
  onBackPress = () => router.back(),
}: GoBackHeaderProps) {
  const colors = useAppTheme();

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.side}
        onPress={onBackPress}
        accessibilityRole="button"
        accessibilityLabel="뒤로가기"
      >
        <ChevronLeft size={30} color={colors.text.primary} />
      </Pressable>
      <View style={styles.center}>
        <ThemeText style={styles.title}>{title}</ThemeText>
      </View>
      <View style={styles.side} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 20,
  },
  // 좌우에 같은 공간을 확보해 제목이 헤더 전체의 중앙에 오도록 합니다.
  side: {
    width: 44,
    minHeight: 44,
    flexShrink: 0,
    justifyContent: "center",
  },
  center: {
    flex: 1,
    minWidth: 0,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
  },
});
