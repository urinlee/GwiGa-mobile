import { useAppTheme } from "@/hooks/useAppTheme";
import { Settings } from "lucide-react-native";
import { Image, Pressable, View } from "react-native";

interface AvatarProps {
  size?: number;
  uri?: string;
}

export function Avatar({ size = 20, uri }: AvatarProps) {
  const Color = useAppTheme();
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size ? size / 2 : undefined,
        borderWidth: size / 40,
        borderColor: Color.border.default,
        overflow: "hidden",
      }}
    >
      <Image
        source={{ uri }}
        resizeMode="cover"
        style={{ width: "100%", height: "100%" }}
      />
    </View>
  );
}

interface EditableAvatarProps extends AvatarProps {
  onPress?: () => void;
}

export function EditableAvatar({
  size = 20,
  uri,
  onPress,
}: EditableAvatarProps) {
  const Color = useAppTheme();
  return (
    <Pressable
      style={{
        position: "relative",
      }}
      onPress={onPress}
    >
      <Avatar size={size} uri={uri} />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: size / 3,
          height: size / 3,
          borderRadius: size / 6,
          borderColor: Color.border.default,
          borderWidth: size / 40,
          backgroundColor: Color.background.default,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Settings
          strokeWidth={2}
          color={Color.text.secondary}
          size={size / 5}
        />
      </View>
    </Pressable>
  );
}
