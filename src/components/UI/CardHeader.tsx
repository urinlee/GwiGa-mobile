import { ChevronRight } from "lucide-react-native";
import { Pressable, StyleSheet } from "react-native";
import { ThemeText } from "./ThemeText";

interface CardHeaderProps {
  title: string;
  onPress?: () => void;
}

export function CardHeader({ title, onPress }: CardHeaderProps) {
  return (
    <Pressable onPress={onPress} style={styles.header}>
      <ThemeText theme="secondary" style={styles.title}>
        {title}
      </ThemeText>
      {onPress && <ChevronRight size={12} color={"#9b9b9b"} />}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  header: {
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 14,
    marginLeft: 2,
    fontWeight: "bold",
  },
});
