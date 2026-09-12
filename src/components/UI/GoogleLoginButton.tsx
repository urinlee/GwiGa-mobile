import { Image } from "expo-image";
import { useFonts } from "expo-font";
import { Platform, Pressable, StyleProp, StyleSheet, Text, ViewStyle } from "react-native";

interface GoogleLoginButtonProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
}

export function GoogleLoginButton({
  onPress,
  style,
}: GoogleLoginButtonProps) {
  const [fontsLoaded] = useFonts({
    GoogleSansMedium: require("../../../assets/images/google/GoogleSans-Medium.ttf"),
  });

  return (
    <Pressable
      accessibilityLabel="Google로 로그인"
      accessibilityRole="button"
      onPress={onPress}
      style={[styles.button, style]}
    >
      <Image
        accessible={false}
        contentFit="contain"
        source={require("../../../assets/images/google/google-g.png")}
        style={styles.logo}
      />
      <Text style={styles.label}>
        <Text style={fontsLoaded ? styles.googleText : undefined}>Google</Text>
        로 로그인
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: "100%",
    minHeight: 52,
    paddingHorizontal: Platform.OS === "ios" ? 16 : 12,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: Platform.OS === "ios" ? 12 : 10,
    backgroundColor: "#FFFFFF",
    borderColor: "#747775",
    borderWidth: 1,
    borderRadius: 4,
  },
  logo: {
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  label: {
    color: "#1F1F1F",
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
    textAlign: "center",
    flexShrink: 1,
  },
  googleText: {
    fontFamily: "GoogleSansMedium",
  },
});
