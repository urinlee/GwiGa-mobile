import { ThemeCard } from "@/components/UI/ThemeCard";
import { ThemeText } from "@/components/UI/ThemeText";
import { Fonts } from "@/constants/theme";
import {
    Image,
    Pressable,
    StyleSheet,
    View,
    type ImageSourcePropType,
} from "react-native";

export interface VerificationMethodCardProps {
  title: string;
  description: string;
  imageSource?: ImageSourcePropType;
  onPress?: () => void;
  disabled?: boolean;
}

export function VerificationMethodCard({
  title,
  description,
  imageSource,
  onPress,
  disabled = false,
}: VerificationMethodCardProps) {
  const card = (
    <ThemeCard style={styles.card}>
      {imageSource ? (
        <Image
          source={imageSource}
          style={styles.logo}
          resizeMode="contain"
          accessible={false}
        />
      ) : null}
      <View style={styles.content}>
        <ThemeText theme="brand" style={styles.title}>
          {title}
        </ThemeText>
        <ThemeText theme="secondary" style={styles.description}>
          {description}
        </ThemeText>
      </View>
    </ThemeCard>
  );

  if (!onPress) return card;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityLabel={`${title}. ${description}`}
      accessibilityState={{ disabled }}
      style={({ pressed }) => [
        disabled && styles.disabled,
        pressed && styles.pressed,
      ]}
    >
      {card}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
  },
  logo: {
    width: 80,
    height: 80,
    flexShrink: 0,
  },
  content: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    fontFamily: Fonts.sans,
  },
  description: {
    fontSize: 14,
  },
  disabled: {
    opacity: 0.5,
  },
  pressed: {
    opacity: 0.7,
  },
});
